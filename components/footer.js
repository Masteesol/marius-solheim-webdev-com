export default function() {
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("fluid");
    const template = 
            `
            <div class="row">
                <div class="col">
                     Created by Marius Solheim
                </div>
                <div class="col">
                &copy2022
                </div>
            </div>
            `
    container.innerHTML = template;
    return container;
}