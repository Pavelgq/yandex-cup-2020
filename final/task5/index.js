module.exports = function (root) {

    const res = [];
    const values = {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "flex-start"
    }

    let element = {};
    element.x = 0;
    element.y = 0;
    for (const key in root.style) {
        if (values.hasOwnProperty(key)) {
            values[key] = root.style[key];
        } else {
            element[key] = root.style[key];
        }
    }
    res.push(element);

    const blocks = [];
    let startPoint = {x:0, y: 0}
    root.children.forEach(el => {
        if (values.flexDirection === 'column') {
            let obj = {
                width: el.style.width,
                height: (root.style.height / root.children.length)
            }
            startPoint.y +=height;
            switch (values.alignItems) {
                case 'center':
                    obj.x = startPoint.x + (root.style.width/2) - obj.width/2;
                    break;
                case 'flex-start':
                    obj.x = startPoint.x;
                    break;
                case 'flex-end':
                    obj.x = (root.style.width) - obj.width;
                    break;

                default:
                    break;
            }
            switch (values.justifyContent) {
                case 'center':
                    obj.y = startPoint.y - ;
                    break;
                case 'flex-start':

                    break;
                case 'flex-end':

                    break;

                default:
                    break;
            }
        } else {

        }

       
    })


    return res;
}

function flexDirection(option, el) {

}

alignItems ? : "stretch" | "baseline" | "center" | "flex-start" | "flex-end";
justifyContent ? : "center" | "flex-start" | "flex-end" | "space-between"