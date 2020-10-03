const call = require('./ast');

const context = {
  "type": "File",
  "start": 0,
  "end": 64,
  "program": {
    "type": "Program",
    "start": 0,
    "end": 64,
    "sourceType": "script",
    "interpreter": null,
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 0,
        "end": 31,
        "expression": {
          "type": "CallExpression",
          "start": 0,
          "end": 30,
          "callee": {
            "type": "MemberExpression",
            "start": 0,
            "end": 28,
            "object": {
              "type": "NewExpression",
              "start": 1,
              "end": 15,
              "callee": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "name": "M"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 7,
                  "end": 14,
                  "properties": [
                    {
                      "type": "ObjectProperty",
                      "start": 8,
                      "end": 13,
                      "method": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8,
                        "end": 9,
                        "name": "x"
                      },
                      "computed": false,
                      "shorthand": false,
                      "value": {
                        "type": "StringLiteral",
                        "start": 11,
                        "end": 13,
                        "extra": {
                          "rawValue": "",
                          "raw": "''"
                        },
                        "value": ""
                      }
                    }
                  ]
                }
              ],
              "extra": {
                "parenthesized": true,
                "parenStart": 0
              }
            },
            "property": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "y"
            },
            "computed": false
          },
          "arguments": []
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 33,
        "end": 64,
        "expression": {
          "type": "CallExpression",
          "start": 33,
          "end": 63,
          "callee": {
            "type": "MemberExpression",
            "start": 33,
            "end": 61,
            "object": {
              "type": "NewExpression",
              "start": 34,
              "end": 48,
              "callee": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "M"
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 47,
                  "properties": [
                    {
                      "type": "ObjectProperty",
                      "start": 41,
                      "end": 46,
                      "method": false,
                      "key": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
                        "name": "x"
                      },
                      "computed": false,
                      "shorthand": false,
                      "value": {
                        "type": "StringLiteral",
                        "start": 44,
                        "end": 46,
                        "extra": {
                          "rawValue": "",
                          "raw": "''"
                        },
                        "value": ""
                      }
                    }
                  ]
                }
              ],
              "extra": {
                "parenthesized": true,
                "parenStart": 33
              }
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "x"
            },
            "computed": false
          },
          "arguments": []
        }
      }
    ],
    "directives": []
  }
}
console.log(call(context)[0])