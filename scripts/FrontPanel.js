const template = document.createElement('template');
template.innerHTML = `
  <style>
    .panel {
      height: 100%;
      width: 100%;
      background: #8ae5ff;
      position: fixed;
      left: 100%;
      transition-duration: 0.5s;
    }
    .panel.show {
      left: 0%;
      transition-duration: 0.5s;
    }
  </style>
  <div class="panel">
    <slot></slot>
  </div>
`;

class FrontPanel extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {

  }

  static get observedAttributes() {
    return ['stat'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'stat') {
      if (oldValue !== newValue) {
        const classPanel = this.shadowRoot.querySelector('div.panel').classList;

        if (newValue === 'show') {
          classPanel.add('show');
        } else {
          classPanel.remove('show');
        }
      }
    }
  }
}

window.customElements.define('front-panel', FrontPanel);