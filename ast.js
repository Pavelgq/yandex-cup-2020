

const scopeStorage = new Map();

function getScopeFor(ast, outerScope) {
    if (!scopeStorage.has(ast)) {
        scopeStorage.set(ast, new Scope(ast, outerScope));
    }

    return scopeStorage.get(ast);
}
/**
 * Функция обхода дерева. Выполняет обход дерева в глубину,
 * передаваяв callback-функции onNodeEnter (до посещения потомков)
 * и onNodeLeave (после посещения потомков) каждый узел дерева
 * и текущую область видимости (смотри определение Scope ниже)
 *
 * @param      {object}    ast                              Исходное ast
 * @param      {Function}  [onNodeEnter=(node, scope)=>{}]  Вызывается для каждого узла до посещения потомков
 * @param      {Function}  [onNodeLeave=(node, scope)=>{}]  Вызывается для каждого узла после посещения потомков
 */
function traverse(
    ast,
    onNodeEnter = (node, scope) => {},
    onNodeLeave = (node, scope) => {}
) {
    const rootScope = getScopeFor(ast);

    _inner(ast, rootScope);

    /**
     * Определение области видимости узла.
     * Может либо вернуть текущий scope, либо создать новый
     *
     * @param      {object}  ast       ast-узел
     * @param      {Scope}   currentScope  текущая область видимости
     * @return     {Scope}   область видимости для внутренних узлов astNode
     */
    function resolveScope(ast, currentScope) {
        let isFunctionExpression = ast.type === 'FunctionExpression',
            isFunctionDeclaration = ast.type === 'FunctionDeclaration';

        if (!isFunctionExpression &&
            !isFunctionDeclaration) {
            // Новые области видимости порждают только функции
            return currentScope;
        }

        // каждая функция порождает новую область видимости
        const newScope = getScopeFor(ast, currentScope);

        ast.params.forEach(param => {
            // параметры функции доступны внутри функции
            newScope.add(param.name, param);
        });

        if (isFunctionDeclaration) {
            // имя функции при декларации доступно снаружи функции
            currentScope.add(ast.id.name, ast);
        } else if (ast.id) {
            // имя функции-выражения доступно только внутри неё
            newScope.add(ast.id.name, ast);
        }

        return newScope;
    }

    /**
     * Рекурсивная функция обхода ast
     *
     * @param      {object}  astNode  Текущий ast-узел
     * @param      {Scope}  scope     Область видимости для текущего ast-узла
     */
    function _inner(astNode, scope, parent) {
        if (Array.isArray(astNode)) {
            astNode.forEach(node => {
                /* Рекурсивный обход элементов списков.
                 * Списками являются, например, параметры функций
                 */
                _inner(node, scope, parent);
            });
        } else if (astNode && typeof astNode === 'object') {
            onNodeEnter(astNode, scope, parent);

            const innerScope = resolveScope(astNode, scope),
                keys = Object.keys(astNode).filter(key => {
                    // loc - служебное свойство, а не ast-узел
                    return key !== 'loc' &&
                        astNode[key] && typeof astNode[key] === 'object';
                });

            keys.forEach(key => {
                // Обход всех потомков
                _inner(astNode[key], innerScope, astNode);
            });

            onNodeLeave(astNode, scope, parent);
        }
    }
}

/**
 * Представление области видимости
 *
 * @class      Scope (name)
 * @param      {object}  astNode      ast-узел, породивший эту область видимости
 * @param      {object}  parentScope  Родительская область видимости
 */
function Scope(astNode, parentScope) {
    this._node = astNode;
    this._parent = parentScope;
    this._vars = new Map();
}

Scope.prototype = {
    /**
     * Добавление имени переменной в область видимости
     *
     * @param      {string}  name    имя переменной
     */
    add(name, value) {
        this._vars.set(name, {
            value: value,
            scope: this
        });
    },
    resolve(node) {
        if (!node) {
            return node;
        }
        if (node.type === 'Identifier') {
            let value = this._vars.get(node.name);
            if (!value) {
                if (this._parent) {
                    value = this._parent.resolve(node);
                } else {
                    // Это глобальный scope, поэтому node -
                    // необъявленная глобальная переменная
                    this.add(node.name, node);
                    return this.resolve(node);
                }
            }
            if (!value) {
                return;
            }
            if (value.value.type === 'Identifier' &&
                value.value !== node) {
                return value.scope.resolve(value.value) || value;
            }
            return value;
        }
    },
    /**
     * Была ли определена переменная с таким именем.
     *
     * @param      {string}   name    имя переменной
     * @return     {boolean}  Встречалась ли переменная с таким именем в доступных областях видимости
     */
    isDefined(name) {
        return this._vars.has(name) || (this._parent && this._parent.isDefined(name));
    }
};

function getPropName(node, scope) {
    let prop = node.property;

    if (!node.computed) {
        return prop.name;
    }

    let resolved = scope.resolve(prop);
    if (resolved) {
        prop = resolved.value;
    }
    if (prop.type === 'StringLiteral') {
        return prop.value;
    }
}

module.exports = function (ast) {
    var result = [];


    traverse(ast, (node, scope) => {
        if (node.type === 'VariableDeclarator') {
            scope.add(node.id.name, node.init);
        }
    });

    let rootScope = getScopeFor(ast);

    traverse(ast, (node, scope) => {
        if (node.type !== 'CallExpression') {
            return;
        }
        let args = node.arguments;
        if (args.length !== 0) {
            return;
        }
        let callee = node.callee; 
        let res = node.callee;

        let resolved = scope.resolve(callee);
        if (resolved) {
            callee = resolved.value;
            scope = resolved.scope;
        }

        if (callee.type !== 'MemberExpression') {
            return;
        }
        let property = getPropName(callee, scope), //y
            object = callee.object; //New Expression

        if (property !== 'y') {
            return;
        }
        if (object.type !== 'NewExpression') {
            return;
        }

        resolved = scope.resolve(object);
        if (resolved) {
            callee = resolved.value;
            scope = resolved.scope;
        }

        args = object.arguments;
        if (args.length !== 1 ||
            args[0].type !== 'ObjectExpression') {
            return;
        }
        callee = object.callee; 
          
        if (callee.name !== 'M') {
            return;
        }
        
        checkObject(args[0])

        result.push(res.property)
    });

    function checkObject(ast) {

        traverse(ast, (node, scope, parent) => {
            if (parent === ast) {
                return;
            }
            if (node.type !== 'ObjectExpression') {
                return;
            }
            
            let prop = node.properties;

            if (prop.length === 0) {
                return
            }
            let property;
            for (let i = 0; i < prop.length; i++) {
                property = prop[i];
                if (property.key.name === 'x') {
                    break;
                }
            }

            if (!property) {
                return
            }

            let value = property.value;

            if (value.type !== 'StringLiteral') {
                return
            }
        });
    }

    return result;
};