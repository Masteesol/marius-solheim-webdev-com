import tabsText from "../data/tabs-text.js";
import createElement from "../utils/createElement.js";
import modifyClassNames from "../utils/modifyClassNames.js";
import tabsImages from "../data/tabs-images.js";

const main = document.querySelector('main');
const layerOne = document.querySelector('.body-layer-1');
const layerTwo = document.querySelector('.body-layer-2');
const mainLayer1 = document.querySelector('.main-layer-1');
const mainLayer2 = document.querySelector('.main-layer-2');
export default async function() {
    mainLayer2.append(createTabs());
    backGroundTriangles();
}


function createTabs() {
    const loader = document.querySelector('.loader');
    loader.style.display = "none"
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('.sub-heading');
    h1.style.display = "block";
    h2.style.display = "block";
    const tabsUtilities = ["nav-item", "tabs-item", "justify-content-center", "pointer", "p-2", "d-flex", "flex", "border", "border-2", "border-bottom-0"];

    const about = createElement("li", tabsUtilities)
    about.innerText = "About";
    const skills = createElement("li", tabsUtilities)
    skills.innerText = "Skills";
    const experience = createElement("li", tabsUtilities)
    experience.innerText = "Experience";
    const education = createElement("li", tabsUtilities)
    education.innerText = "Education";
    const projects = createElement("li", tabsUtilities)
    projects.innerText = "Projects";

    
    const textContainer = createElement("div", ["border", "p-3", "border-2", "border-top-1", "bg-black"]);
    const text = createElement("p", "mb-0")
    const array = [about, skills, experience, education, projects];
    const tabContainer = createElement("ul", ["nav", "nav-tabs", "w-100"]);

    //adding logos to a hidden container in layer 1
    const logosContainer = createElement("div", ["tech-logos", "container", "position-absolute", "d-none", "d-flex", "justify-content-start", "container"], "style", "bottom: 3rem; z-index: 500");

    const logosContainerInner = createElement("div", ["row"], "style", "max-width: 600x");

    const { base, fileNames } = tabsImages;
    fileNames.forEach(fileName => {
        const imgContainer = createElement("div", "col");
        const img = createElement("img", "", ["src", "style"], [base+fileName, "height: 3rem;"]);
        imgContainer.append(img)
        logosContainerInner.append(imgContainer);
    })
    logosContainer.append(logosContainerInner)
    mainLayer1.append(logosContainer);

    //Tabs selector
    array.forEach((item, index) => {
        if(index != 0) {
            modifyClassNames(item, "border-transparent", ["border-light", "bg-black", "active"]);
        } else {
            modifyClassNames(item, ["border-light", "bg-black", "active"], "border-transparent");
            text.innerHTML = tabsText[item.innerText.toLowerCase()];
        }
        if(index === 1) {
            modifyClassNames(item, "skills-tab")
        }
        item.addEventListener("click", function(){
            //clear all styling
            array.forEach(item => {
                modifyClassNames(item, "border-transparent", ["border-light", "bg-black", "active"]);
            })
            //setting styling on clicked item
            modifyClassNames(item, ["border-light", "bg-black", "active"], "border-transparent");
            //finding value by key which is the tab title
            text.innerHTML = tabsText[item.innerText.toLowerCase()];
            //skills tab revealing tech logos
            if(index === 1) {
                modifyClassNames(logosContainer, "fade-in", "d-none")
            } else {
                modifyClassNames(logosContainer, "d-none", "fade-in");
            }
        })
        
        tabContainer.append(item)
    })
    const container = createElement("div", ["tabs","px-0", "container", "ms-0", "pt-5"], "style", "height: 20rem; max-width: 600px");
    
    textContainer.append(text)
    
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

    //setInterval(newTriangle, 5000);
    //setInterval(newTriangle, 2000);

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
