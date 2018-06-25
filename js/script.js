        var link = document.querySelector(".login");
        var popup = document.querySelector(".popup");
        var close = document.querySelector(".popup-close");
        var grayBg = document.querySelector(".gray-bg");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]")
        var submitEmptyForm = popup.querySelector("form");
        var error = popup.querySelector(".error");

        link.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.add("popup-show");
            grayBg.classList.add("gray-bg-show");
            login.focus();
            if (localStorage.getItem("login")) {
                login.value = localStorage.getItem("login");
                password.focus();
            }
        });

        close.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.remove("popup-show");
            error.classList.remove("error-show");
            grayBg.classList.remove("gray-bg-show");
        });

        window.addEventListener("keydown", function(event){
            if (popup.classList.contains("popup-show") && event.keyCode == 27) {
                event.preventDefault();
                popup.classList.remove("popup-show");
                error.classList.remove("error-show");
                grayBg.classList.remove("gray-bg-show");
            }
        });

        submitEmptyForm.addEventListener("submit", function(event){
            if (!login.value || !password.value) {
                event.preventDefault();
                error.classList.add("error-show");
            }   else    {
                localStorage.setItem("login", login.value);
            }
        });

        var mapLink = document.querySelector(".map");
        var popupMap = document.querySelector(".popup-map");

        mapLink.addEventListener("click", function(event){
            event.preventDefault();
            popupMap.classList.add("popup-map-show");
            grayBg.classList.add("gray-bg-show");
        });

        close.addEventListener("click", function(event){
            event.preventDefault();
            popupMap.classList.remove("popup-map-show");
            grayBg.classList.remove("gray-bg-show");
        });

        window.addEventListener("keydown", function(event){
            if (popupMap.classList.contains("popup-map-show") && event.keyCode == 27) {
                event.preventDefault();
                popupMap.classList.remove("popup-map-show");
                grayBg.classList.remove("gray-bg-show");
            }
        });