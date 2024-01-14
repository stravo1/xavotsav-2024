class CustomDesktopMenu extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  connectedCallback() {
    let textColor = this.hasAttribute("textColor") ? this.getAttribute("textColor") : "white";
    this.innerHTML = `
          <nav class="nav-bar-desktop">
            <div class="routes-desktop monospace text-${textColor}">
              <div class="nav-groups nav-group-1 nav-group-visible">
                <li id="home-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/">home</a></li>
                <li id="events-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/events">events</a></li>
                <li id="schedule-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/schedule">schedule</a></li>
              </div>
              <div class="nav-groups nav-group-2 nav-group-invisible">
                <li id="sponsors-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/sponsors">sponsors</a></li>
                <li id="contact-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/contact">contact-us</a></li>
                <li id="about-desktop" class="route-desktop text-${textColor}"><a class="underline-on-hover" href="/about">about-us</a></li>
              </div>
              <button class="nav-group-toggle underline-on-hover">more</button>
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