import $ from 'jquery';

class MobileMenu {
    constructor() {
        // Select element from the DOM
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    // Event Handling
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    // Defining functionality
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x")
    }
}

export default MobileMenu;