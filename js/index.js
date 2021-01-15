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
        }/*
        window.onscroll = function() {
            if (this.document.body.scrollTop > 50 || this.document.documentElement.scrollTop > 50) {
                this.document.querySelector('nav').classList.add('small-nav');
                this.document.querySelector('header').classList.add('small-nav-header');
                this.document.querySelector('.nav-links').classList.add('small-nav-margin');
                this.document.body.classList.add('small-nav-padding');
                
            }
            else {
                this.document.querySelector('nav').classList.remove('small-nav');
                this.document.querySelector('header').classList.remove('small-nav-header');
                this.document.querySelector('.nav-links').classList.remove('small-nav-margin');
                this.document.body.classList.remove('small-nav-padding');
                
                
            }
        }*/
    }


    return {
        attachListeners: attachListeners
    }

}