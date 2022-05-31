import { isLoggedIn } from "../pages/admin.js";
import createElement from "../utils/createElement.js";
import sendEmail from "../utils/sendEmail.js";

export default function (location) {
    const navElement = document.querySelector("nav");
    let homeActive = "";
    let postsPageActive = "";
    let adminLinkActive = "";
    let modal = 
    `
    <!-- Button trigger modal -->
            <div class="nav-item d-flex justify-content-center me-2 ms-2">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#contact-modal"
              >
                Contact
              </button>
              </div>

              <!-- Modal -->
              <div
                class="modal fade"
                id="contact-modal"
                tabindex="-1"
                aria-labelledby="contact-modal"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="contact-modal">
                        Contact
                      </h5>
                      <button
                        type="button"
                        class="btn-close bg-light" 
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form id="form-contact">
                    <div class="modal-body outer" id="contact-form-modal-body">
                      <div class="modal-body inner">
                        <div class="mb-3">
                          <label for="name" class="form-label">Name</label>
                          <input type="text" class="form-control" id="name" name="from_name" aria-describedby="emailHelp" placeholder="Your name...">
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" name="reply_to" aria-describedby="emailHelp" placeholder="Your Email...">
                        </div>
                        <div class="mb-3">
                        <label for="message">Message</label>
                          <textarea class="form-control" id="message" rows="3" name="message" placeholder="Your message..."></textarea>
                          </div> 
                        </div> 
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                        <button type="submit" class="btn btn-primary" id="contact-send">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
    `;
    
    switch(location) {
      case "/index.html": 
        homeActive = "active";
        break;
      case "/posts.html":
        postsPageActive = "active";
        break;
      case "/admin.html":
        adminLinkActive = "active"
      default:
        homeActive = "active";
    }

    let adminLink = "";

    if(isLoggedIn()) {
      adminLink = ` <li class="nav-item me-2 ms-2">
                        <a class="nav-link ${adminLinkActive} text-center" href="admin.html">Admin</a>
                      </li>`
    }
    const container = createElement("div", "container-fluid");

    const template = 
        `
            <a class="navbar-brand" href="index.html">Marius Solheim Web Design</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item me-2 ms-2">
                  ${adminLink}
                  <a
                    class="nav-link ${homeActive} text-center"
                    aria-current="page"
                    href="index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item me-2 ms-2">
                  <a class="nav-link ${postsPageActive} text-center" href="posts.html">Posts</a>
                </li>
                ${modal}
              </ul>
              
              </div>
            </div>
        `;
    container.innerHTML = template;
    navElement.append(container);
    const contactForm = document.querySelector('#form-contact');
    contactForm.addEventListener("submit", sendEmail)
}



