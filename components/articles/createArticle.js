import { stringify, api } from "../../data/api.js";
import simpleInputValidation from "../../utils/simpleInputValidation.js";
import { getLocalStorage } from "../../utils/storage.js";
import createModal from "../createModalForm.js";
import { parseInput } from "../../utils/convert-html-to-custom-syntax.js";

export default function addArticle(parentElement) {
    const inputGroups = `<div class="form-group">
                            <label for="inputTitle">Title</label>
                            <input type="text" class="form-control" id="inputTitle" placeholder="Enter title">
                        </div>
                        <div class="form-group">
                            <label for="inputAuthor">Text</label>
                            <textarea class="form-control rows="3" id="inputSummary" style="height: 50vh" placeholder="Use HTML syntax..."></textarea>
                        </div>
    `;

    parentElement.append(createModal("Add article",inputGroups, "form-add-article"));

    const form = document.querySelector('#form-add-article');
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        if(simpleInputValidation([form[0], form[1]])) {
            const inputHTMLSyntax = parseInput(form[1].value)
            console.log(inputHTMLSyntax)
            saveArticle({title: form[0].value, fullText: form[1].value})
        }
    });
}

async function saveArticle(inputs){
    const token =  getLocalStorage("token");
    const { title, fullText } = inputs;
    console.log('%ccreateArticle.js line:32 object', 'color: #007acc;', inputs);
    const apiCall = await api(
        stringify({title: title, fulltexthtml: fullText}),
        {"Content-Type": "application/json", "Authorization" : `bearer ${token}`},
        "posts",
        "POST"
      )

    console.log(apiCall)

    const { response } = apiCall;

    if (response.status === 200) {
        location.reload();
      } else {
          alert("You are not authorized to add articles")
    }
}