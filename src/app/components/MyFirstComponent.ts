class MyFirstComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <div>
        <h1>Primeiro Componente</h1>
        <p>Este é o conteúdo do meu primeiro Web Component.</p>
      </div>
    `;
    }
  }
}

customElements.define('my-first-component', MyFirstComponent);
