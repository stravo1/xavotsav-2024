class CustomDesktopMenu extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  connectedCallback() {
    this.innerHTML = `
          <nav class="nav-menu-desktop menu-invisible">
            <div class="logo desktop-close-button link-pointer">
              <span class="material-symbols-rounded smaller-icon">
                close
              </span>
            </div>
            <div class="routes-desktop">
              <li id="desktop-home" class="slides slide-out route-desktop" style="--i:0"><a href="/">home</a></li>
              <li id="desktop-events" class="route-desktop" style="--i:1"><a href="/events">events</a></li>
              <li id="desktop-sponsors" class="route-desktop"  style="--i:2"><a href="/sponsors">sponsors</a></li>
              <li id="desktop-merchandise" class="route-desktop" style="--i:3"><a href="/merchandise">merchandise</a></li>
              <li id="desktop-contact" class="route-desktop" style="--i:4"><a href="/contact">contact us</a></li>
              <li id="desktop-about" class="route-desktop" style="--i:5"><a href="/about">about us</a></li>
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

customElements.define("custom-desktop-menu", CustomDesktopMenu)