var feedbackButton = document.querySelector(".js-feedback-button");
var feedbackPopup = document.querySelector(".js-modal-feedback");

if (feedbackPopup) {
    
    var feedbackClose = feedbackPopup.querySelector(".js-modal-close");
    
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
        feedbackPopup.classList.add("js-modal-show");
        
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
    
    feedbackClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackPopup.classList.remove("js-modal-show");
        feedbackPopup.classList.remove("js-modal-error");
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
    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (feedbackPopup.classList.contains("js-modal-show")) {
                feedbackPopup.classList.remove("js-modal-show");
                feedbackPopup.classList.remove("js-modal-error");
            }
        }
    });
    
}

/* Catalog */

var addedItemButtons = document.querySelectorAll(".js-buy");
var addedItemPopup = document.querySelector(".js-modal-added");

if (addedItemPopup) {
    var addedItemClose = addedItemPopup.querySelector(".js-modal-close");
    var addedItemContunue = addedItemPopup.querySelector(".js-modal-continue");
    
    
    for (var i = 0; i < addedItemButtons.length; i++) {
        addedItemButtons[i].addEventListener("click", function(evt) {
            evt.preventDefault();
            addedItemPopup.classList.add("js-modal-show");
        });
    }
    
    addedItemClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedItemPopup.classList.remove("js-modal-show");
    });
    
    addedItemContunue.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedItemPopup.classList.remove("js-modal-show");
    });
    
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            if (addedItemPopup.classList.contains("js-modal-show")) {
                addedItemPopup.classList.remove("js-modal-show");
            }
        }
    });
    
}

/* Slider */

var arrowLeft = document.querySelector(".js-arrow-left");
var arrowRight = document.querySelector(".js-arrow-right");

var sliderDrill = document.querySelector(".js-slider-1");
var sliderPerforator = document.querySelector(".js-slider-2");

arrowLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeSlide;
    var inactiveSlide;
    if (sliderDrill.classList.contains("js-show-initial") || sliderDrill.classList.contains("js-show-left") || sliderDrill.classList.contains("js-show-right")) {
        activeSlide = sliderDrill;
        inactiveSlide = sliderPerforator;
    } else {
        activeSlide = sliderPerforator;
        inactiveSlide = sliderDrill;
    }

    activeSlide.classList.remove("js-show-initial");
    activeSlide.classList.remove("js-show-left");
    activeSlide.classList.remove("js-show-right");

    inactiveSlide.classList.add("js-show-left");

});

arrowRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeSlide;
    var inactiveSlide;
    if (sliderDrill.classList.contains("js-show-initial") || sliderDrill.classList.contains("js-show-left") || sliderDrill.classList.contains("js-show-right")) {
        activeSlide = sliderDrill;
        inactiveSlide = sliderPerforator;
    } else {
        activeSlide = sliderPerforator;
        inactiveSlide = sliderDrill;
    }

    activeSlide.classList.remove("js-show-initial");
    activeSlide.classList.remove("js-show-left");
    activeSlide.classList.remove("js-show-right");

    inactiveSlide.classList.add("js-show-right");
});