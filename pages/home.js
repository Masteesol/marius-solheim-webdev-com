import tabsText, {projectText} from "../data/tabs-text.js";
import createElement from "../utils/createElement.js";
import modifyClassNames from "../utils/modifyClassNames.js";
import tabsImages from "../data/tabs-images.js";

const main = document.querySelector('main');
const body = document.querySelector('body');
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
    const logosContainer = createElement("div", ["tech-logos", "container", "position-absolute", "d-none", "d-flex"], "style", "bottom: 3rem; z-index: 500");
    let logosContainerInner = "";

    const { base : logosBase, fileNames : logosFileNames } = tabsImages.logos;

    logosFileNames.forEach((fileName, index) => {
        if(index === 0 || index === 4) {
            logosContainerInner = "";
            logosContainerInner = createElement("div", ["row", "mb-3", "px-2"]);
        }
        logosContainerInner.append(imgCard());
        logosContainer.append(logosContainerInner)
        function imgCard() {
            const imgContainer = createElement("div", ["col", "d-flex", "justify-content-center"]);
            const img = createElement("img", "", ["src", "style"], [logosBase+fileName, "height: 12vw; max-height: 3rem;"]);
            imgContainer.append(img)
            return imgContainer;
        } 
    })
    mainLayer1.append(logosContainer);
    //adding profile image
    //const profileImg = createElement("img", "position-absolute", ["src", "style"], ["../images/profile.png", "width: 20rem; height: auto; right: 0px;"])
    //mainLayer2.append(profileImg)

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
        if(index === 4) {
            item.setAttribute("id", "projects-tab")
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
            const {projectExamOne, bayyinah, semesterProject} = projectText;

            body.addEventListener("click", function(event) {
                if(event.target.classList.contains("quick-view")) {
                    const button = event.target;
                    const buttons = document.querySelectorAll('.quick-view');

                    for (const button of buttons) {
                        modifyClassNames(button, "btn-primary", ["btn-secondary", "active"])
                    }
                    if(button.classList.contains("quick-view")) {
                        modifyClassNames(event.target, ["btn-secondary", "active"], "btn-primary");
                    }
                    
                }
                let url = "";
                let urlMobile = "";
                let pageUrl = "";
                switch(event.target.id) {
                    case("projects-tab"): 
                        url = "../images/projects/sarif-interface-2.JPG";
                        urlMobile = "../images/projects/sarif-main-mobile.JPG";
                        pageUrl = "https://sarif-industries-semester-project.netlify.app"
                        
                        modifySite(url, pageUrl, semesterProject.heading, semesterProject.subheading, semesterProject.about, urlMobile);
                        break;
                    case("semester-project"):
                        url = "../images/projects/sarif-interface-2.JPG";
                        urlMobile = "../images/projects/sarif-main-mobile.JPG";
                        pageUrl = "https://sarif-industries-semester-project.netlify.app"
                        modifySite(url, pageUrl, semesterProject.heading, semesterProject.subheading, semesterProject.about, urlMobile);
                        break;
                    case("project-exam-1"):
                        url = "../images/projects/eternalblue-desktop.JPG";
                        urlMobile = "../images/projects/eternalblue-mobile.png";
                        pageUrl = "https://eternalblueband.netlify.app/"
                        modifySite(url, pageUrl, projectExamOne.heading, projectExamOne.subheading, projectExamOne.about, urlMobile);
                        break;
                    case("project-bayyinah"):
                        pageUrl = "https://bayyinah-bdk.net/"
                        urlMobile = "../images/projects/bayyinah-mobile.png";
                        url = "../images/projects/bayyinah-desktop.JPG";
                        modifySite(url, pageUrl, bayyinah.heading, bayyinah.subheading, bayyinah.about, urlMobile);
                        break;
                    default:
                        modifySiteRemove()
                        const buttons = document.querySelectorAll('.quick-view');
                        for (const button of buttons) {
                            modifyClassNames(button, "btn-primary", ["btn-secondary", "active"])
                    }
                }
            })

            function modifySiteRemove() {
                layerOne.removeAttribute("style");
                layerTwo.removeAttribute("style");
                main.removeAttribute("style")
                h1.innerText = "Welcome!";
                h2.innerText = "The world of a frontend development student";
                if(document.querySelector('.about-page')) {
                    document.querySelector('.about-page').remove()
                }
                if(document.querySelector('.visit-page-btn')) {
                    document.querySelector('.visit-page-btn').remove()
                }
                modifyClassNames(layerTwo, "", ["pointer", "fade-in"])

            }

            function modifySite(ImageUrl, pageUrl, heading, subheading, about, imageUrlMobile) {
                console.log('%chome.js line:147 object', 'color: #007acc;', "test");
                if(document.querySelector('.about-page')) {
                    document.querySelector('.about-page').remove()
                }
                if(document.querySelector('.visit-page-btn')) {
                    document.querySelector('.visit-page-btn').remove()
                };
                const h1 = document.querySelector('h1');
                const h2 = document.querySelector('h2');
                h1.innerText = heading;
                h2.innerText = subheading;
                const mobileImage = createElement("a", ["mobileImage", "position-absolute", "shadow"], ["style", "href", "target"], 
                [`background-image: url(${imageUrlMobile}); background-size: 100%; height: 80vh; width: 25rem; right: 0px`,
                pageUrl, "_blank"])
                const paragraph = createElement("p", ["about-page", "position-absolute"], "style", "max-width: 600px; max-height: 9rem; overflow-y: auto");
                paragraph.innerText = about;
                const visitBtn = createElement("a", ["btn", "btn-primary", "position-absolute", "visit-page-btn", "font-secondary"], ["href", "target", "style"], [pageUrl, "_blank", "right: 0px; font-size: 1.5rem"]);
                visitBtn.innerText = "Visit site";
                h2.insertAdjacentElement("afterend", paragraph)
                h1.insertAdjacentElement("afterbegin", visitBtn)
                h1.insertAdjacentElement("afterbegin", mobileImage)
                layerTwo.removeAttribute("style");
                layerTwo.setAttribute("style", `background: rgba(0, 0, 0, 0.5) url(${ImageUrl}); background-size: cover; background-position: center; background-blend-mode: darken`);
                modifyClassNames(layerTwo, "fade-in");
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
