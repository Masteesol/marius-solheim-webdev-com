/*
Syntax: modifyClassNames(html element, class name to add (array or single value), class name to remove (array or single value));
*/
export default function modifyClassNames(element, addClassNames = null, removeClassNames = null) {
    if(removeClassNames) {
        if(Array.isArray(removeClassNames)) {
            removeClassNames.forEach(className => {
                if(element.classList.contains(className)) {
                    element.classList.remove(className)
                }
            })
        } else {
            if(element.classList.contains(removeClassNames)) {
                element.classList.remove(removeClassNames)
            }
        }
    }
    if(addClassNames) {
        if(Array.isArray(addClassNames)) {
            addClassNames.forEach(className => {
                if(!element.classList.contains(className)) {
                    element.classList.add(className)
                }
            })
        } else {
            if(!element.classList.contains(addClassNames)) {
                element.classList.add(addClassNames)
            }
        }
    }
}