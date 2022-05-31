import nav from "./components/nav.js";
import footer from "./components/footer.js";
import home from "./pages/home.js";;
import post from "./pages/post.js";
import allPosts from "./pages/all-posts.js";
import admin from "./pages/admin.js";

const footerContainer = document.querySelector("footer");


(function () {
  insertData();
  nav(window.location.pathname);
  footerContainer.append(footer());
  emailjs.init('9WjCwswas6-QiAuxU');
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
