class CustomLoader extends HTMLElement {
    constructor() {
        super();
        // element created
      }
    
      connectedCallback() {
        this.innerHTML = `
        <div class="loader hidden">
          <div class="loader-nature"> 	
          </div>
          <div class="loading-percentage">0%</div>
          <div class="loader-text">Xavotsav '24</div>
      </div>
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

customElements.define("custom-loader", CustomLoader)