class EditableInputField extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
  	this.attachShadow({mode: 'open'});
  	this.editorOn = false
  	
    render();
  }

  disconnectedCallback() {
    // il browser chiama questo metodo quando l'elemento viene rimosso dal documento
    // (può essere chiamato tante volte se un elemento viene aggiunto o rimosso)
  }

  static get observedAttributes() {
    return [/* un array di nomi di attributi per monitorare le modifiche */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // chiamato quando uno degli attributi della lista precedente viene modificato
  }

  adoptedCallback() {
    // chiamato quando l'elemento viene spostato su un nuovo documento
    // (avviene in document.adoptNode, usato molto raramente)
  }

  render() {
  	if (this.editorOn == false) {
  		this.setAttribute("editorOn", "false");
  		this.shadowRoot.innerHTML = `<div>${this.innerText}</div>`;
  		this.shadowRoot.firstElementChild.addEventListener('click',
      e => alert("clicked: ")
    );
  	} else {
  		this.setAttribute("editorOn", "true");
  		this.shadowRoot.innerHTML =  `<input type="text" value="${this.innerText}">`;
  	}
  }
}

// fa in modo che il browser sappia che <my-element> viene fornito dalla nostra classe
customElements.define("input-field", EditableInputField);


