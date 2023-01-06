class NavComponent {
    get linksNavMenu() {
        return $$('#primary-menu li[id*=menu]');
    }

    get firstNavMenu() {
        return $('#primary-menu li');
    }
}

export default new NavComponent();