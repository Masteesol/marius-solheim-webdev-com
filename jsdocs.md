# JS functions

## Creating new elements

1. Purpose:

- used where you normally would use `createElement()`
- adding multiple classes and attributes in one line.

2. Syntax:

- newElement(node type, classname (array or single value(), attribute (array or single value), attribute value (array or single value);

The index position of the attribute name and attribute value needs to be the same in each array.

3. Function call example:

- multiple attributes;

```javascript
const textArea = createElement(
  "textarea",
  "form-control",
  ["id", "placeholder", "style"],
  ["input-summary", "Summary...", "display: none"]
);
```

- multiple classes

```javascript
const bodyContainer = createElement(
  "div",
  ["card-body", "d-flex", "flex-column", "justify-content-between"],
  "style",
  "height: 100%"
);
```

The full function:

```javascript
export default function (
  type,
  className = null,
  attributeType = null,
  attributeValue = null
) {
  const container = document.createElement(type);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach((className) => {
        container.classList.add(className);
      });
    } else {
      container.classList.add(className);
    }
  }
  if (attributeType) {
    if (Array.isArray(attributeType)) {
      attributeType.forEach((att, index) => {
        container.setAttribute(att, attributeValue[index]);
      });
    } else {
      container.setAttribute(attributeType, attributeValue);
    }
  }
  return container;
}
```

## Modifying class names

1. Purpose:

- Adding and removing class names using utlity classes quickly becomes a source for errors when combined with conditional logic on forms. This function keeps track of which classes you already have in the classlist and only adds the ones which are new. If you want to remove one classes or multiple classes, this is possible through the third function argument.

2. Syntax:

- modifyClassNames(html element, class name to add (array or single value), class name to remove (array or single value));

3. Function call example:

```javascript
if (input.value.trim().length > 0) {
  modifyClassNames(input, ["border-1", "border-success"], "border-danger");
  return input;
} else {
  modifyClassNames(input, ["border-1", "border-danger"], "border-success");
}
```

The function:

```javascript
export default function modifyClassNames(
  element,
  addClassNames = null,
  removeClassNames = null
) {
  if (removeClassNames) {
    if (Array.isArray(removeClassNames)) {
      removeClassNames.forEach((className) => {
        if (element.classList.contains(className)) {
          element.classList.remove(className);
        }
      });
    } else {
      if (element.classList.contains(removeClassNames)) {
        element.classList.remove(removeClassNames);
      }
    }
  }
  if (addClassNames) {
    if (Array.isArray(addClassNames)) {
      addClassNames.forEach((className) => {
        if (!element.classList.contains(className)) {
          element.classList.add(className);
        }
      });
    } else {
      if (!element.classList.contains(classNames)) {
        element.classList.add(classNames);
      }
    }
  }
}
```

## Simple input validation

```javascript
import modifyClassNames from "./modifyClassNames.js";

export default function (inputs) {
  const passedValidation = inputs.filter((input) => {
    if (input.value.trim().length > 0) {
      modifyClassNames(input, ["border-1", "border-success"], "border-danger");
      return input;
    } else {
      modifyClassNames(input, ["border-1", "border-danger"], "border-success");
    }
  });
  if (passedValidation.length === inputs.length) {
    return true;
  } else {
    return false;
  }
}
```

## Checking if logged in

```js
export function isLoggedIn() {
  return getLocalStorage("token").length > 0 ? true : false;
}
```
