function testLength(node, minLength, maxLength) {
  if (node.value.length >= minLength && node.value.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

function testRegEx(string, type) {
  let regEx;
  if (type === "email") {
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  } else {
    regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  }
  return regEx.test(string);
}

export default function (node, minLength, maxLength, type) {
  let passed = 0;
  node.nextElementSibling.innerHTML = "";

  if (testLength(node, minLength, maxLength)) {
    passed++;
  } else {
    node.classList.add("error");
    node.nextElementSibling.innerHTML = `Length should be between ${minLength} and ${maxLength}`;
  }

  if (testRegEx(node.value, type)) {
    passed++;
  } else {
    if (type === "email") {
      node.nextElementSibling.innerHTML =
        "email should be with current format name@domain.com";
    } else {
      node.nextElementSibling.innerHTML =
        "Should contain capital letter, special symbol and a number";
    }
  }
  if (node.value.trim() === "") {
    node.nextElementSibling.innerHTML = "Empty input";
  }
  if (passed === 2) {
    node.classList.add("success");
    return true;
  }
}
