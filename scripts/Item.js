const template = document.createElement('template');
template.innerHTML = `
  <style>
    .item {
      height: 45px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5rem 0 0.5rem 0;
      cursor: pointer;
    }
    .text {
      width: 100px;
      text-align: start;
      font-size: 1.2rem;
      text-transform: uppercase;
      z-index: 999999;
      color: #000000;
      transition-duration: 0.2s;
    }
    .item-mark {
      height: 45px;
      width: 0px;
      position: absolute;
      left: 0;
      transition-duration: 0.5s;
    }
    .item-mark.show {
      width: 150px;
      transition-duration: 0.2s;
    }
    .text.show {
      color: #FFFFFF;
      transition-duration: 0.5s;
    }
  </style>
  <div class="item">
    <span class="item-mark">
    </span>
    <span class="text">
      <slot name="title"></slot>
    </span>
  </div>
`;

class ItemElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.itemMark = this.shadowRoot.querySelector('span.item-mark');
    this.textMark = this.shadowRoot.querySelector('span.text');
    
    this.shadowRoot.querySelector('div.item').addEventListener('mouseenter', () => {
      this.itemMark.classList.add('show');
      this.textMark.classList.add('show');
    });

    this.shadowRoot.querySelector('div.item').addEventListener('mouseleave', () => {
      this.itemMark.classList.remove('show');
      this.textMark.classList.remove('show');
    });
  }

  static get observedAttributes() {
    return ['color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color') {
      if (oldValue !== newValue) {
        this.itemMark = this.shadowRoot.querySelector('span.item-mark');
        this.itemMark.style = `background: #${newValue}`;
      }
    }
  }
}

window.customElements.define('item-element', ItemElement);