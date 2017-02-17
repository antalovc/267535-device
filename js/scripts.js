var linkContact = document.querySelector(".index-contacts .btn");
var popupContact = document.querySelector(".popup-contact");
var closeContact = popupContact.querySelector(".popup-close");
var contactName = popupContact.querySelector("[name=name]");

var linkMap = document.querySelector(".index-contacts-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".popup-close");

linkContact.addEventListener("click", function (event) {
  event.preventDefault();
  popupContact.classList.add("popup-show");
  contactName.focus();
});

closeContact.addEventListener("click", function (event) {
  event.preventDefault();
  popupContact.classList.remove("popup-show");
});

linkMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.add("popup-show");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupContact.classList.contains("popup-show")) {
      popupContact.classList.remove("popup-show");
    }
    if (popupMap.classList.contains("popup-show")) {
      popupMap.classList.remove("popup-show");
    }
  }
});
