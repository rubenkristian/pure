const template = document.createElement('template');
const div = document.createElement('div');
const slotName = document.createElement('slot');
const slotAll = document.createElement('slot');
slotName.name = 'firstname';
slotName.innerHTML = `<div>Hello</div>`
div.textContent = 'Click';
div.appendChild(slotName);
div.appendChild(slotAll);
template.content.appendChild(div);

class ButtonGame extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('div').addEventListener('click', () => {
      console.log('div shadow clicked');
    });
  }

  connectedCallback() {
    console.log('connected');
  }
}

window.customElements.define('button-game', ButtonGame);