import tabsText from "../data/tabs-text.js";
import createElement from "../utils/createElement.js";
import modifyClassNames from "../utils/modifyClassNames.js";

const main = document.querySelector('main');
const layerOne = document.querySelector('.body-layer-1');
const layerTwo = document.querySelector('.body-layer-2');

export default async function() {
    main.append(createTabs());
    backGroundTriangles();
}


function createTabs() {
    const loader = document.querySelector('.loader');
    loader.style.display = "none"
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('.sub-heading');
    h1.style.display = "block";
    h2.style.display = "block";
    const tabsUtilities = ["nav-item", "tabs-item", "pointer", "me-3", "p-2", "border", "border-2", "border-bottom-0"];

    const about = createElement("li", tabsUtilities)
    about.innerText = "About";

    const skills = createElement("li", tabsUtilities)
    skills.innerText = "Skills";

    modifyClassNames(skills, "border-transparent", "border-light");

    modifyClassNames(about, tabsUtilities);

    modifyClassNames(about, "bg-black")

    const textContainer = createElement("div", ["border", "p-3", "border-2", "border-top-1", "bg-black"]);
    const text = createElement("p", "mb-0")

    text.innerText = tabsText.about;
    about.addEventListener("click", function() {
        modifyClassNames(skills, "border-transparent", ["border-light", "bg-black"]);
        modifyClassNames(about, ["border-light", "bg-black"], "border-transparent");
        text.innerText = tabsText.about;
    })
    skills.addEventListener("click", function() {
        modifyClassNames(about, "border-transparent", ["border-light", "bg-black"]);
        modifyClassNames(skills, ["border-light", "bg-black"], "border-transparent");
        text.innerText = tabsText.skills
    })
    
    const container = createElement("div", ["container", "ms-0", "pt-5"], "style", "height: 20rem; max-width: 600px");
    const tabContainer = createElement("ul", ["nav", "nav-tabs"]);
    textContainer.append(text)
    tabContainer.append(about, skills)
    container.append(tabContainer, textContainer);
    return container;
}


const triangleUtilities = {
    base: [
        "triangle"
    ],
    size: [
        "triangle-small",
        "triangle-medium",
        "triangle-large"
    ],
    direction: [
        "move-up-right",
        "move-up-right-2",
        "move-up-right-3",
        "move-down-left",
        "move-down-left-2",
        "move-down-left-3"
    ],
    duration: [
        "duration-fast",
        "duration-medium",
        "duration-slow"
    ]

}

function backGroundTriangles() {
    const { base, size, direction, duration } = triangleUtilities;

    setInterval(newTriangle, 5000);
    setInterval(newTriangle, 2000);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    function newTriangle() {
        const randomUtilities = [
            base,
            size[getRandomInt(3)],
            direction[getRandomInt(6)],
            duration[getRandomInt(3)]
        ]
        const triangle = createElement("div", randomUtilities);

        let timeOut;

        if(triangle.classList.contains("duration-slow")) {
            timeOut = 8000;
        } else if(triangle.classList.contains("duration-fast")) {
            timeOut = 3000;
        } else {
            timeOut = 6000;
        }

        
        layerOne.insertBefore(triangle, layerTwo)
        setTimeout(removeElement, timeOut);

        function removeElement() {
            triangle.remove();
        }
    }
}
