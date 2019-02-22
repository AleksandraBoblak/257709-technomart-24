var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-wrapper-feedback");

if (feedbackPopup) {
    
    var feedbackClose = feedbackPopup.querySelector(".modal-close");
    
    var feedbackName = feedbackPopup.querySelector(".feedback-name");
    var feedbackForm = feedbackPopup.querySelector(".feedback-form");
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
        feedbackPopup.classList.add("modal-show");
               
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
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
    });
    
    feedbackForm.addEventListener("submit", function (evt) {
        if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("modal-error");
        } else if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    });
    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (feedbackPopup.classList.contains("modal-show")) {
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-error");
            }
        }
    });
    
}

/* Catalog */

var addedItemButtons = document.querySelectorAll(".buy");
var addedItemPopup = document.querySelector(".modal-wrapper-added");

if (addedItemPopup) {
    var addedItemClose = addedItemPopup.querySelector(".modal-close");
    var addedItemContunue = addedItemPopup.querySelector(".modal-continue");
    
    
    for (var i = 0; i < addedItemButtons.length; i++) {
        addedItemButtons[i].addEventListener("click", function(evt) {
            evt.preventDefault();
            addedItemPopup.classList.add("modal-show");
        });
    }
    
    addedItemClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedItemPopup.classList.remove("modal-show");
    });
    
    addedItemContunue.addEventListener("click", function(evt) {
        evt.preventDefault();
        addedItemPopup.classList.remove("modal-show");
    });
    
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            if (addedItemPopup.classList.contains("modal-show")) {
                addedItemPopup.classList.remove("modal-show");
            }
        }
    });
    
}