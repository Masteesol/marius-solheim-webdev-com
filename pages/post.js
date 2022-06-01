import { getApi } from "../data/api.js";
import createElement from "../utils/createElement.js";
import { isLoggedIn } from "./admin.js";
import editArticle from "../components/articles/editArticle.js";
import deleteArticle from "../components/articles/deleteArticle.js";
import { parseInput, getSummary } from "../utils/convert-html-to-custom-syntax.js";
import colouriseCodeSnippets from "../utils/colourise-code-snippets.js";

const main = document.querySelector('main');
const heading = document.querySelector('h1');

export default async function() {
    const metaDescr = document.querySelector('[name=description]');
    const loader = document.querySelector('.loader');
    loader.style.display = "none"
    const params = new URL(document.location).searchParams
    const id = params.get("id")

    const json = await getApi("posts/"+id);
    const articleData = json.data.attributes
    const parsedHTML = parseInput(articleData.fulltexthtml);
    document.title =  articleData.title +" - Marius Solheim Web Design";
    heading.innerText = articleData.title;
    metaDescr.content = getSummary(parsedHTML);
    const articleContainer = fixSpacesCodeSnippet(parsedHTML)
    if(isLoggedIn()) {
        const titleInputEdit = createElement("input", ["form-control", "mb-2"], ["style", "placeholder"], ["display: none", "Title..."])
        const articleTextAreaEdit = createElement("textarea", "form-control", ["style", "placeholder"], ["display: none; height: 50%", "Article text. Use HTML syntax or custom syntax..."])
        
        const buttonsContainer = createElement("div", ["d-flex", "w-100", "justify-content-end", "mt-5"], "id", "modify-article-buttons")
  
        const editBtn = createElement("button", ["btn", "btn-warning", "me-4"])
        const deleteBtn = createElement("button", ["btn", "btn-danger"])
        const saveBtn = createElement("button", ["btn", "btn-success", "me-4"], "style", "display: none");
        
        saveBtn.innerText = "Save";
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";

        deleteBtn.addEventListener("click", function() {
            deleteArticle({deleteBtn: deleteBtn, 
                editBtn: editBtn, 
                container: buttonsContainer,
                id: id
            });
        })

        editBtn.addEventListener("click", function() {
            const title = document.querySelector('h1');
            editArticle({btn: this, id: id, saveBtn: saveBtn, deleteBtn: deleteBtn, 
                nodes: [title, articleContainer], inputs:
                [titleInputEdit, articleTextAreaEdit]})
        })
        
        buttonsContainer.append(saveBtn, 
            editBtn, deleteBtn)
            
        main.append(
            titleInputEdit,
            articleTextAreaEdit,
            buttonsContainer
            );
    }
    main.append(articleContainer)
}

function copyCode(input) {
    const temp = createElement("div");
    temp.innerHTML = input;
    let tempRemovedSpaces = temp.innerHTML.replaceAll("&nbsp;", " ");
    tempRemovedSpaces = tempRemovedSpaces.slice(0, tempRemovedSpaces.length-4);
    navigator.clipboard.writeText(tempRemovedSpaces)
    alert("Copied the text: " + tempRemovedSpaces);
  }

function fixSpacesCodeSnippet(parsedHTML) {
    const articleContainer = createElement("div", "article-container")
   console.log('%cpost.js line:77 object', 'color: #007acc;', articleContainer);
    articleContainer.innerHTML = parsedHTML;

      //Removing &nbsp; from all elements besides the coding examples, where they are needed
    if(document.querySelector('code')) {
        for (const element of articleContainer.childNodes) {
            if(element.tagName != "CODE" && element.tagName != "BR") {
                const modified = element.innerHTML.replaceAll('&nbsp;', ' ');
                element.innerHTML = modified;
            }   
        }
    }
    for (const element of articleContainer.childNodes) {
        if(element.tagName === "CODE") {
            const copyBtn = createElement("button", ["copy-btn", "btn", "btn-primary", "position-absolute"], "style", "right: 1rem; top: 1rem; display: none")
            copyBtn.innerText = "Copy";
            copyBtn.addEventListener("click", function() {
                copyCode(element.innerText)
            })
            const modified = colouriseCodeSnippets(element.innerHTML)
            element.innerHTML = modified;
            element.append(copyBtn)
        }   
    }
    return articleContainer;
  }

