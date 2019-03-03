var feedbackButton = document.querySelector(".js-feedback-button");
var feedbackPopup = document.querySelector(".js-modal-feedback");

if (feedbackPopup) {
    
    var feedbackName = feedbackPopup.querySelector(".js-feedback-name");
    var feedbackForm = feedbackPopup.querySelector(".js-feedback-form");
    var feedbackEmail = feedbackPopup.querySelector("[name=email]");
    var feedbackText = feedbackPopup.querySelector("[name=text-field]");
    
    var isStorageSupport = true;
    var storedName = "";
    var storedEmail = "";
    
    try {
        storedName = localStorage.getItem("name");
        storedEmail = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }
    
    feedbackButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackPopup.classList.add("is-modal-show");
        
        if (storedName) {
            feedbackName.value = storedName;
        }
        if (storedEmail) {
            feedbackEmail.value = storedEmail;
        }
        
        if (storedName && storedEmail) {
            feedbackText.focus();
        } else if (storedName) {
            feedbackEmail.focus();
        } else {
            feedbackName.focus();
        }
    });
    
    feedbackForm.addEventListener("submit", function (evt) {
        if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
            evt.preventDefault();
            feedbackPopup.classList.remove("js-modal-error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("js-modal-error");
        } else if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    });
}

var addedItemButtons = document.querySelectorAll(".js-buy");
var addedItemPopup = document.querySelector(".js-modal-added");

if (addedItemPopup) {
    var addedItemContunue = addedItemPopup.querySelector(".js-modal-continue");
    
    for (var i = 0; i < addedItemButtons.length; i++) {
        addedItemButtons[i].addEventListener("click", function(evt) {
            evt.preventDefault();
            addedItemPopup.classList.add("is-modal-show");
        });
    }
    
    addedItemContunue.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedItemPopup.classList.remove("is-modal-show");
    });
    
}

/* Slider */

var slides = document.querySelectorAll(".js-slide");
var currentSlide = 0;

var arrowLeft = document.querySelector(".js-arrow-left");
var arrowRight = document.querySelector(".js-arrow-right");

if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        slides[currentSlide].classList.remove("js-show");
        slides[currentSlide].classList.remove("js-show-initial");
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add("js-show");
    });
    
    arrowRight.addEventListener("click", function(evt) {
        evt.preventDefault();
        slides[currentSlide].classList.remove("js-show");
        slides[currentSlide].classList.remove("js-show-initial");
        
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        
        slides[currentSlide].classList.add("js-show");
    });
}

var mapLink = document.querySelector(".js-map-preview");
var mapPopup = document.querySelector(".js-modal-map");

if(mapLink) {
    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("is-modal-show");
    });
}


var servicesButtons = document.querySelectorAll(".js-services-button");
var servicesItems = document.querySelectorAll(".js-services-item");

function listenServiceButtonClick(button, item) {
    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        
        for (var i = 0; i < servicesButtons.length; i++) {
            servicesButtons[i].classList.remove("services-button-current");
            servicesItems[i].classList.remove("services-item-current");
        }
        
        button.classList.add("services-button-current");
        item.classList.add("services-item-current");
    });
}

for (var i = 0; i < servicesButtons.length; i++) {
    listenServiceButtonClick(servicesButtons[i], servicesItems[i]);
}

function hidePopups() {
    var popups = document.querySelectorAll(".is-modal-show");
    for (var i = 0; i < popups.length; i++) {
        popups[i].classList.remove("is-modal-show");
        popups[i].classList.remove("js-modal-error");
    }
}

var closePopupButtons = document.querySelectorAll(".js-modal-close");

for (var i = 0; i < closePopupButtons.length; i++) {
    closePopupButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        hidePopups();
    });
}

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();
        hidePopups();
    }
});