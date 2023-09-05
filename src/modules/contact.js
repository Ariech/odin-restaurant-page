function createContact() {
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact");

  const address = document.createElement("div");
  address.classList.add("contact-address");

  const addressText = document.createElement("h2");
  addressText.textContent = "Address";
  const street = document.createElement("p");
  street.textContent = "Ceglana 21B";
  const city = document.createElement("p");
  city.textContent = "Ceglikowo";

  address.appendChild(addressText);
  address.appendChild(street);
  address.appendChild(city);

  const numberWrapper = document.createElement("div");
  numberWrapper.classList.add("contact-number");

  const contactUs = document.createElement("h2");
  contactUs.textContent = "Contact us!";
  const phone = document.createElement("p");
  phone.classList.add("contact-phone");
  phone.textContent = "364 823 912";

  numberWrapper.appendChild(contactUs);
  numberWrapper.appendChild(phone);

  contactWrapper.appendChild(address);
  contactWrapper.appendChild(numberWrapper);
  return contactWrapper;
}

export default function addContactToMain() {
  const main = document.querySelector(".main");
  main.appendChild(createContact());
}
