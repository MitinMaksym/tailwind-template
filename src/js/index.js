import "../tailwind.css";
import checkbox from "./modules/checkbox";
import tabs from "./modules/tabs";
import faq from "./modules/faq";
import video from "./modules/video";
import hints from "./modules/hints";
import login from "./modules/login";

document.addEventListener("DOMContentLoaded", function () {
  login();
  checkbox();
  video();
  hints();
  const tabsList = Array.from(document.querySelectorAll(".tabs"));
  tabsList.forEach(tabsContainer => {
    tabs({
      selector: tabsContainer
    });
  })
  faq();
});
