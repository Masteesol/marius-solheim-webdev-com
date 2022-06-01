import { getApi } from "../data/api.js";
import createElement from "../utils/createElement.js";
import createArticle from "../components/articles/createArticle.js"
import { isLoggedIn } from "./admin.js";
import { getSummary } from "../utils/convert-html-to-custom-syntax.js";

const main = document.querySelector('main');

export default async function() {
    const json = await getApi("posts");
    const data = json.data;
    const newArticles = data.map(item => createHTML(item));
    const loader = document.querySelector('.loader');
    loader.style.display = "none"
    if(isLoggedIn()) {
        createArticle(main)
    }
    newArticles.forEach(article => {
        main.append(article)
    })
    
}

function createHTML(item) {
         const id = item.id;
        
        const summary = createElement("p")
        summary.innerText = getSummary(item.attributes.fulltexthtml);
        console.log('%call-posts.js line:26 object', 'color: #007acc;', item.attributes.fulltexthtml);
        const title = item.attributes.title;
        const row = createElement("a", ["row", "article-row", "bg-dark", "p-3"], "href", "/post.html?id="+id)
        const h2 = createElement("h2", "text-light")
        h2.innerText = title
        row.append(h2, summary)
        console.log(row)
        return row;
    }