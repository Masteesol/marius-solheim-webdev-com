import { api, stringify } from "../../data/api.js";
import createElement from "../../utils/createElement.js";
import { getLocalStorage } from "../../utils/storage.js";

export default function deleteArticle(object) {

    const { deleteBtn, editBtn, container } = object;

    const cancelBtn = createElement("button", ["btn", "text-white"]);

    cancelBtn.innerText = "Cancel"
    deleteBtn.classList.add("active");
    if(deleteBtn.classList.contains("active") && !deleteBtn.classList.contains("confirm")) {
        deleteBtn.innerText = "Confirm";
        deleteBtn.classList.replace("btn-danger", "btn-warning");
        editBtn.style.display = "none";
        container.append(cancelBtn);
        deleteBtn.classList.add("confirm");
    } 
    else if(deleteBtn.classList.contains("active") && deleteBtn.classList.contains("confirm")) {
        makeChanges(object)
    }

    cancelBtn.addEventListener("click", function() {
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.replace("btn-warning", "btn-danger");
        deleteBtn.classList.remove("active");
        deleteBtn.classList.remove("confirm");
        editBtn.style.display = "block";
        this.remove();
    })
}

async function makeChanges(object){
    const { id } = object;
    const token =  getLocalStorage("token");    
    const json = await api(
        stringify({id: id}),
        { Authorization : `bearer ${token}`},
        `posts/${id}`,
        "DELETE"
      )
    const { response } = json;

    if (response.status === 200) {
        location.replace("/posts.html")
        console.log("removed node")
      } else {
        alert("You are not authorized to edit articles")
    }
}
