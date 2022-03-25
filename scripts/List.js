const template = document.createElement('template');
template.innerHTML = `
  <style>
    .list-box-fixed {
      height: 100%;
      min-width: 150px;
      max-width: 200px;
      width: 200px;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to right, #F0F0F0 , #FFFFFF);;
    }
  </style>
  <div class="list-box-fixed">
    <slot>
    text
    </slot>
  </div>
`;

class ListElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }
}

window.customElements.define('list-element', ListElement);