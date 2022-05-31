import createElement from "../utils/createElement.js";
import modifyClassNames from "../utils/modifyClassNames.js";

export default function() {
    const inputFilter = createElement("input", "mb-5", "placeholder", "filter by title...");
    inputFilter.addEventListener("keyup", function(e) {
        const titles = document.querySelectorAll('.card-title');
        const cards = document.querySelectorAll('.article-card');
  
        titles.forEach((title, index) => {
            if(!title.innerHTML.toLowerCase().includes(e.target.value)) {
                modifyClassNames(cards[index], "d-none");
            } else {e
                modifyClassNames(cards[index], "", "d-none");
            }
        })
    })
    return inputFilter;
}

