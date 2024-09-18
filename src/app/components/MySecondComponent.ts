class MySecondComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <div>
        <h2>Segundo Componente</h2>
        <p>Este é o conteúdo do meu segundo Web Component.</p>
      </div>
    `;
    }
  }
}

customElements.define('my-second-component', MySecondComponent);
