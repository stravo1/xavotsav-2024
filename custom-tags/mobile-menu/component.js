class CustomMobileMenu extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  connectedCallback() {
    this.innerHTML = `
          <nav class="nav-menu-mobile menu-invisible">
            <div class="logo close-button link-pointer">
              <span class="material-symbols-rounded smaller-icon">
                close
              </span>
            </div>
            <div class="routes-mobile">
              <li id="home" class="slides slide-out route-mobile" style="--i:0"><a href="/">home</a></li>
              <li id="events" class="route-mobile" style="--i:1"><a href="/events">events</a></li>
              <li id="sponsors" class="route-mobile"  style="--i:2"><a href="/sponsors">sponsors</a></li>
              <li id="merchandise" class="route-mobile" style="--i:3"><a href="/merchandise">merchandise</a></li>
              <li id="contact" class="route-mobile" style="--i:4"><a href="/contact">contact us</a></li>
              <li id="about" class="route-mobile" style="--i:5"><a href="/about">about us</a></li>
            </div>
            <div class="socials-mobile mono">
              <div class="icons-group">
                <img src="/assets/insta.svg">
                <img src="/assets/site.svg">
              </div>
              <div class="info-mobile">
                Student Council
                <br>
                St. Xavier's College (Autonomous), Kolkata
              </div>
            </div>
          </nav>
        `
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  // there can be other element methods and properties
}

customElements.define("custom-mobile-menu", CustomMobileMenu)