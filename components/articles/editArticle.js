import { api, stringify } from "../../data/api.js";
import simpleArticleInputValidation from "../../utils/simpleArticleInputValidation.js";
import { getLocalStorage } from "../../utils/storage.js";
import { convertNodeListToCustomSyntax, parseInput } from "../../utils/convert-html-to-custom-syntax.js";

let localObject;

export default function editArticle(object) {
    localObject = object;
    const customSyntaxInput = convertNodeListToCustomSyntax()
    const { id, saveBtn, btn, nodes, inputs, deleteBtn} = object;

    btn.classList.toggle("active");

    if(btn.classList.contains("active")) {
        saveBtn.style.display = "block";
        btn.innerText = "Cancel"
        nodes.forEach((node, index) => {
            node.style.display = "none";
            deleteBtn.style.display = "none";
            inputs[index].style.display = "block";
            inputs[index].value = [nodes[0].innerText, customSyntaxInput][index];
        })
        saveBtn.addEventListener("click", function() {
            validation(inputs, nodes, id, btn);
        })
    } else {
        location.reload()
    }   
}

function validation() {
    const { inputs } = localObject;
    if(simpleArticleInputValidation(inputs)) {
        addChanges()
    }
}


async function addChanges(){
    const { id, inputs } = localObject;
    const token =  getLocalStorage("token");
    const [title, fulltexthtml ] = [inputs[0].value, parseInput(inputs[1].value)]
    const json = await api(
        stringify({title: title, fulltexthtml: fulltexthtml}),
        {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        `posts/${id}`,
        "PUT"
      )
    console.log(json)
    const { response } = json;

    if (response.status === 200) {
       location.reload()
      } else {
        alert("You are not authorized to edit articles")
    }
}