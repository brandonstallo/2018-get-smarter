console.log('its-friday');

//Shadow DOM

class ItsFriday extends HTMLElement {
  constructor(){
    super();
    
    const shadowRoot = this.attachShadow({mode: 'open'});

    // We define some inline styles using a template string
      const styles=`
        :host {
            position: relative;
            font-family: sans-serif;
        }
 
        #counter-increment, #counter-decrement {
            width: 60px;
            height: 30px;
            margin: 20px;
            background: none;
            border: 1px solid black;
        }
 
          #counter-value {
              font-weight: bold;
          }
      `;
    
       // We provide the shadow root with some HTML
       shadowRoot.innerHTML = `
       <style>${styles}</style>
       <h3>Counter</h3>
       <button id='counter-increment'> - </button>
       <span id='counter-value'> 0 </span>
       <button id='counter-decrement'> + </button>
   `;
      // We can query the shadow root for internal elements
        // in this case the button
        this.incrementButton = this.shadowRoot.querySelector('#counter-increment');
        this.decrementButton = this.shadowRoot.querySelector('#counter-decrement');
        this.counterValue = this.shadowRoot.querySelector('#counter-value');
 
        // We can bind an event which references one of the class methods
        this.incrementButton.addEventListener("click", this.decrement.bind(this));
        this.decrementButton.addEventListener("click", this.increment.bind(this));
  }
  increment() {
    this.counter++
    this.invalidate();
  }

  decrement() {
      this.counter--
      this.invalidate();
  }

  // Call when the counter changes value
  invalidate() {
    this.counterValue.innerHTML = this.counter;
  }
}

customElements.define('its-friday', ItsFriday)

//Custom Elements