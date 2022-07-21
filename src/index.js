import "./style.css";
import {loadHome, loadPage} from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadPage();
loadHome();

const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const contact = document.querySelector('.contact')

function clearContent () {
    const info=document.querySelector(".info");
    const middle=document.querySelector(".middle");
    middle.removeChild(info);
    const newInfo = document.createElement("div");
    newInfo.classList.add("info");
    middle.appendChild(newInfo);
}


home.addEventListener("click", () => {
    clearContent ();
    loadHome();
})

menu.addEventListener("click", () => {
    clearContent ();
    loadMenu();
})

contact.addEventListener("click", () => {
    clearContent ();
    loadContact();
})