const loadPage = () => {
  const container = document.querySelector("#content");
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");
  const header = document.createElement("div");
  header.classList.add("header");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  middleContainer.appendChild(header);
  container.appendChild(middleContainer);
};

const loadHome = () => {
    const middleContainer=document.querySelector('.middle')
    const info = document.createElement("div");
    info.classList.add("info");
    const hero = document.createElement('h1')
    hero.textContent= 'Pog Fish';
    const description = document.createElement('h2');
    description.textContent='Fish and Chips Only. Tasty, delicous and crispy'
    const openHour = document.createElement('p')
    openHour.textContent='Opening hour:'
    const day = document.createElement('p')
    day.textContent = 'Monday - Sunday: 8am - 10pm'
    info.appendChild(hero);
    info.appendChild(description);
    info.appendChild(openHour);
    info.appendChild(day);
    middleContainer.appendChild(info);
}

export {loadHome, loadPage};
