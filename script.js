import nav from "./components/nav.js";
import footer from "./components/footer.js";
import home from "./pages/home.js";
import sendEmail from "./utils/sendEmail.js";
import post from "./pages/post.js";
import allPosts from "./pages/all-posts.js";
import admin from "./pages/admin.js";

const footerContainer = document.querySelector("footer");

(function () {
  insertData();
  nav(window.location.pathname);
  const form = document.querySelector('#form-contact');
  form.addEventListener("submit", sendEmail)
  footerContainer.append(footer());
})();

function insertData() {
  switch (window.location.pathname) {
    case "/index.html":
      home();
      break;
    case "/posts.html":
      allPosts()
      break;
    case "/post.html":
      post()
      break;
    case "/admin.html":
      admin()
      break;
    default:
      window.location.replace("/index.html");
  }
}
