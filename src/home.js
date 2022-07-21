const loadHome = () => {
  const container = document.querySelector("#content");
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");
  const header = document.createElement("div");
  header.classList.add("header");
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact= document.createElement('button');
  home.textContent=('Home');
  menu.textContent=('Menu');
  contact.textContent=('Contact');
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  middleContainer.appendChild(header);
  container.appendChild(middleContainer);
};

export default loadHome;