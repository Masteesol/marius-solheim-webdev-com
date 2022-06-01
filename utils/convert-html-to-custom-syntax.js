import createElement from "./createElement.js";

export function parseInput(textInput, getHTML = false) {
    const symbols = [
        ["h2#", "<h2>"],
        ["#h2", "</h2>"],
        ["h3#", "<h3>"],
        ["#h3", "</h3>"],
        ["p#", `<p>`],
        ["#p", "</p>"],
        ["\n", "<br>"],
        ["(sum#", `<strong class="summary" style="font-weight: 400">`],
        ["#sum)", `</strong>`],
        ["#[[", `<code class="bg-dark d-block p-3 text-white position-relative" style="overflow-x: scroll; white-space: nowrap">`],
        ["]]#", "</code>"],
        ["#[", `<code class="bg-dark d-inline text-white">`],
        ["]#", "</code>"]
    ]
    
    let htmlParsed = textInput;
    
    if(!getHTML) {
        //creating html
        symbols.forEach(symbol => {
            if(htmlParsed.includes(symbol[0])) {
                const temp = htmlParsed.replaceAll(symbol[0], symbol[1]);
                htmlParsed = temp;
            }
        })
    } else {
        //creating custom syntax for editing
        console.log("test")
        symbols.forEach(symbol => {
            if(htmlParsed.includes(symbol[1])) {
                const temp = htmlParsed.replaceAll(symbol[1], symbol[0]);
                htmlParsed = temp;
            }
        })
    }   
    return htmlParsed;
}

export function convertNodeListToCustomSyntax() {
    const articleContainer = document.querySelector('.article-container');
    removeSpaces()
    let parsedHTML = parseInput(articleContainer.innerHTML, true);
    parsedHTML = parsedHTML.replaceAll("Copy", "")
    return parsedHTML;
}

export function removeSpaces() {
    const articleContainer = document.querySelector('.article-container');
    for (const element of articleContainer.childNodes) {
        if(element.tagName === "CODE") {
            const temp = createElement("div")
            temp.innerHTML = element.innerText;
            const tempRemovedSpaces = temp.innerHTML.replaceAll("&nbsp;", " ");
            element.innerHTML = tempRemovedSpaces;
        }
    }
}

export function getSummary(fullText) {
    const temp = createElement("div")
    temp.innerHTML = fullText;
    const summary = createElement("p");
    if(temp.getElementsByClassName("summary")[0]) {
        summary.innerText = temp.getElementsByClassName("summary")[0].innerText
    } else {
        summary.innerText = "";
    }
    return summary.innerText;
}