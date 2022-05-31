// Syntax: newElement(node type, classname (array or single value(), attribute (array or single value), attribute value (array or single value);
// the index position of the attribute name and attribute value needs to be the same in each array

export default function (type, className = null, attributeType = null, attributeValue = null) {
    const container = document.createElement(type);
    if(className) {
        if(Array.isArray(className)) {
            className.forEach((className) => {
                container.classList.add(className)
            })
        } else {
            container.classList.add(className);
        }  
    }
    if(attributeType){
        if(Array.isArray(attributeType)) {
            attributeType.forEach((att, index) => {
                container.setAttribute(att, attributeValue[index])
            })
        } else {
            container.setAttribute(attributeType, attributeValue)
        }
    }
    return container;
}
