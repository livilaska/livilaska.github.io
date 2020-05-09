var domReady = function() {
    var siteNavigation = SiteNavigation();
    siteNavigation.attachListeners();
};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    domReady;
}
else {
    document.addEventListener('DOMContentLoaded', domReady);
}

function SiteNavigation() {
    var hamburgerMenu = document.querySelector('.hamburger');
    var attachListeners = function() {
        hamburgerMenu.onclick = function() {
            this.nextElementSibling.classList.toggle('hamburger-show-nav-links');
            this.classList.toggle('is-active');
        }
    }


    return {
        attachListeners: attachListeners
    }

}