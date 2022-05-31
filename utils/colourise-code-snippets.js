export default function colouriseCodeSnippets(textInput, getHTML = null) {
    const colours = {
        darkblue: "#1e90ff",
        main: "#FF8800",
        yellow: "#ff6347"
    }

    const { darkblue, main, yellow } = colours

    const keywords = [
        ["const", darkblue],
        ["let", darkblue],
        ["export", main],
        ["default", main],
        ["import", main],
        ["null", darkblue],
        ["true", darkblue],
        ["false", darkblue],
        ["if&nbsp;", main],
        ["else&nbsp;", main],
        ["forEach", yellow],
        ["trim()", yellow],
        ["includes", yellow],
        ["remove(", yellow],
        ["add(", yellow],
        ["return", main],
        ["function", darkblue],
        ["=>", darkblue],
        ["(", main],
        [")", main],
        ["{", main],
        ["}", main],
        ["[", main],
        ["]", main],
        [".", "white"]
        
    ]
    let htmlParsed = textInput.replaceAll(" ", "&nbsp;");

    if(!getHTML) {
        //creating html
        keywords.forEach(keyword => {
            if(htmlParsed.includes(keyword[0])) {
                const addedHTML = `<span style="color: ${keyword[1]}">${keyword[0]}</span>`;
                const temp = htmlParsed.replaceAll(keyword[0], addedHTML);
                htmlParsed = temp;
            }
        })
    } else {
        //removing tags creating custom syntax for editing
        keywords.forEach(keyword => {
            console.log(keyword[0])
            if(htmlParsed.includes(keyword[0])) {
                const removeHTML = `<span style="color: ${keyword[1]}">${keyword[0]}</span>`;
                const temp = htmlParsed.replaceAll(removeHTML, keyword[0]);
                htmlParsed = temp;
            }
        })
    }

    return htmlParsed;
}