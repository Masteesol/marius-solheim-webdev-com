import createElement from "../utils/createElement.js";
import login from "../utils/login.js";
import { getLocalStorage, removeLocalStorage } from "../utils/storage.js";

export default function admin(){
    const main = document.querySelector('#admin-main');
    if(isLoggedIn()) {
       const row = createElement("div", "row")
       const col = createElement("div", "col")
       const logoutBtn = createElement("button", ["btn", "btn-primary"])
       logoutBtn.addEventListener("click", logout)
       logoutBtn.innerText = "Logout"
       col.append(logoutBtn)
       row.append(col)
       main.append(row)
    } else {
        loginForm()
    }
}

function logout () {
    removeLocalStorage("user");
    removeLocalStorage("token");
    window.location.replace("index.html");
  }

function loginForm() {
    const main = document.querySelector('main');
    let modal = 
    `
    <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary ms-auto me-5"
                data-bs-toggle="modal"
                data-bs-target="#modalLogin"
              >
                Sign in
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="modalLogin"
                tabindex="-1"
                aria-labelledby="modalLoginLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalLoginLabel">
                        Sign in
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form id="form-signin-admin">
                    <div class="modal-body">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1">
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
                        <button type="submit" class="btn btn-primary">
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
    `;
    const loginContainer = createElement("div")
    loginContainer.innerHTML = modal;
    main.append(loginContainer)
    const form = document.querySelector('#form-signin-admin');
    form.addEventListener("submit", login)
}

export function isLoggedIn() {
    return (getLocalStorage("token").length > 0 ? true : false);
}
