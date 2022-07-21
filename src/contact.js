const loadContact = () => {
    const info = document.querySelector(".info");
    const address = document.createElement("h2");
    address.textContent = "Address:";
    const addressInfo = document.createElement("p");
    addressInfo.textContent = "4 Sleepy Hollow Ave. Milford, MA01757";
    const tel = document.createElement("h2");
    tel.textContent = "Tel Number:";
    const telNumber = document.createElement("p");
    telNumber.textContent = "218-523-6969";
    info.appendChild(address);
    info.appendChild(addressInfo);
    info.appendChild(tel);
    info.appendChild(telNumber);
  };

  export default loadContact;

