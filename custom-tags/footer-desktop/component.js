class CustomDesktopFooter extends HTMLElement {
    constructor() {
        super();
        // element created
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="desktop-footer">
                <div class="footer-upper">
                    <div class="footer-logo-wrapper">
                        <img class="footer-logo" src="/assets/images/logo/main.png" />
                    </div>
                    <div class="footer-address">
                        <div class="address-header">Address</div>
                        <div class="address-content">
                            St. Xavier’s College (Autonomous), Kolkata
                            <br />
                            30, Mother Teresa Sarani,
                            <br />
                            Kolkata - 700016, West Bengal, India
                        </div>
                    </div>
                    
                        <div class="contacts">
                            Contact Us
                            <div class="phones">
                                <div class="icon"><span class="material-symbols-rounded"> call </div>
                                <div class="numbers">
                                    <div>+91 1234567890</div>
                                    <div>+91 1234567890</div>
                                    <div>+91 1234567890</div>
                                </div>
                            </div>
                            <div class="emails">
                                <div class="icon"><span class="material-symbols-rounded"> mail </div>
                                <div class="mailids">
                                    <div>contact.xavotsav@sxccal.edu</div>
                                </div>
                            </div>
                        </div>
                        <div class="send-message">
                            Need Help?
                            <div class="link">
                                <a href="">Send us a message</a>
                            </div>
                        </div>
                    
                    <div class="socials">
                        <div class="socials-heading">Connect With Us</div>
                        <div class="icon-group">
                            <a href=""><img src="/assets/images/logo/fb.png" alt="facebook" /></a>
                            <a href=""><img src="/assets/images/logo/insta.png" alt="instagram" /></a>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="credits">
                    Designed and Developed by WebDev Team, Xavotsav’24
                </div>
            </footer>

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

customElements.define("custom-desktop-footer", CustomDesktopFooter)