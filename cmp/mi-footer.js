class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       VELARDE AGUILERA AXEL GRUPO IC42M
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
