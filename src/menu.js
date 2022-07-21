import hamburger from "./hamburger.jpg";
import friedfish from "./friedfish.jpg";
import beer from "./beer.jpg";

const loadMenu = () => {
  const info = document.querySelector(".info");
  const Hamburger = new Image();
  Hamburger.src = hamburger;
  const Friedfish = new Image();
  Friedfish.src = friedfish;
  const Beer = new Image();
  Beer.src = beer;
  
  const fishinfo = document.createElement('p');
  fishinfo.textContent="Pog fish and chips, CLASSIC"
  fishinfo.setAttribute('style', 'margin-top:20px');
  const burgerinfo = document.createElement('p');
  burgerinfo.textContent="FullStack Burger"
  const beerinfo = document.createElement('p');
  beerinfo.textContent="B E E R"

  info.appendChild(fishinfo);
  info.appendChild(Friedfish);
  info.appendChild(burgerinfo);
  info.appendChild(Hamburger);
  info.appendChild(beerinfo);
  info.appendChild(Beer);
};

export default loadMenu;
