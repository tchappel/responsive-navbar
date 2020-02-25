class Nav {
  constructor({navId, navTransitionTime, navBreakpoint}) {
    this.nav = document.querySelector(`.nav#${navId}`);
    this.navCheckbox = this.nav.querySelector(".nav__checkbox");
    this.navToggleBtn = this.nav.querySelector(".nav__toggle-btn");
    this.navLinks = this.nav.querySelector(".nav__links");
    this.navTransitionTimeout = null;
    this.navTransitionTime = navTransitionTime; // this must correspond to transition time in class "nav-transition"
    this.navBreakpoint = navBreakpoint; // this should correspond to mediaQuery for navbar in css
    this.init();
  }

  shouldOpenNavbar = () => {
    if (!this.navCheckbox) return false;
    return this.navCheckbox.checked;
  };

  addTransitionToNavLinks = () => {
    this.navLinks.classList.add("nav-transition");
    clearTimeout(this.navTransitionTimeout);
    this.navTransitionTimeout = setTimeout(() => {
      this.navLinks.classList.remove("nav-transition");
    }, this.navTransitionTime);
  };

  openNav = () => {
    if (!this.shouldOpenNavbar()) this.navCheckbox.checked = true;
    this.nav.classList.add("open");
  };

  closeNav = () => {
    if (this.shouldOpenNavbar()) this.navCheckbox.checked = false;
    this.nav.classList.remove("open");
  };

  init = () => {
    window.addEventListener("click", () => {
      if (this.shouldOpenNavbar()) {
        this.openNav();
        this.addTransitionToNavLinks();
      } else {
        this.closeNav();
        this.addTransitionToNavLinks();
      }
    });

    window.addEventListener("resize", e => {
      const clientWidth = document.body.clientWidth;
      if (clientWidth > this.navBreakpoint) {
        this.closeNav();
      }
    });
  }
}

const nav1 = new Nav({
  navId: 'nav-main',
  navTransitionTime: 300,
  navBreakpoint: 600
})
