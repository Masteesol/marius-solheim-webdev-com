import createElement from "../utils/createElement.js";

export default function() {
    const container = createElement("div", ["container", "fluid", "mt-3"])
    const template = 
            `
            <div class="row footer-inner">
                <div class="col footer-name text-center">
                     Created by Marius Solheim&copy2022
                </div>
            </div>
            `
    container.innerHTML = template;
    return container;
}