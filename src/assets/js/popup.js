let link = document.querySelector('.login__link');
let map = document.querySelector('.contacts__button-map');
let popup = document.querySelector('.modal__login');
let popupMap = document.querySelector('.modal__map');
let close = document.querySelector('.modal__close');
let login = popup.querySelector('[name=login]');
let form = popup.querySelector('form');
let password = popup.querySelector('[name=password]');

let isStorageSupport;
let storage = "";

try {
    storage = localStorage.getItem('login');
}
    catch (err) {
        isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }

});

map.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');

});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    popupMap.classList.remove('modal-show');

});

form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("modal-show") || popupMap.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove('modal-error');
            popupMap.classList.remove("modal-show");
        }
    }

});