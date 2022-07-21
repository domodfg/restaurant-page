const loadPage = () => {
  const container = document.querySelector("#content");
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");
  const info = document.createElement("div");
  info.classList.add("info");
  const header = document.createElement("div");
  header.classList.add("header");
  const home = document.createElement("button");
  home.classList.add("home");
  const menu = document.createElement("button");
  menu.classList.add("menu");
  const contact = document.createElement("button");
  contact.classList.add("contact");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  middleContainer.appendChild(header);
  middleContainer.appendChild(info);
  container.appendChild(middleContainer);
};

const loadHome = () => {
  const info = document.querySelector(".info");
  const hero = document.createElement("h1");
  hero.textContent = "Pog Fish";
  const description = document.createElement("h2");
  description.textContent = "Fish and Chips Only. Tasty, delicous and crispy";
  const openHour = document.createElement("p");
  openHour.textContent = "Opening hour:";
  const day = document.createElement("p");
  day.textContent = "Monday - Sunday: 8am - 10pm";
  info.appendChild(hero);
  info.appendChild(description);
  info.appendChild(openHour);
  info.appendChild(day);
};

export { loadHome, loadPage };
