class CustomModal extends HTMLElement {
    constructor() {
        super();
        // element created
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="modal-wrapper transition-all">
            <div class="modal-top">
                <div class="modal-header">Sample Header</div>
                <div class="modal-close cursor-pointer">
                    <span class="material-symbols-rounded">
                    close
                    </span>
                </div>
            </div>
            <div class="modal-content">
                Sample <b>Content</b>...

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
                quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
                vitae laborum libero unde voluptatibus cum, numquam quis illum!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
                quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
                vitae laborum libero unde voluptatibus cum, numquam quis illum!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
                quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
                vitae laborum libero unde voluptatibus cum, numquam quis illum!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
                quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
                vitae laborum libero unde voluptatibus cum, numquam quis illum!

                <ul>
                    <li>Sample Event 1</li>
                    <li>Sample Event 1</li>
                    <li>Sample Event 1</li>
                </ul>
            </div>
            <div class="modal-bottom register-button-wrapper">
                <a class="modal-link cursor-pointer" href="" target="__blank">Open Rulebook</a>
            </div>
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

customElements.define("custom-modal", CustomModal)