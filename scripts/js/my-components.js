console.log('web components js');

class MyComponent extends HTMLElement{
  constructor(){
    super();
    this._quotes = [
      "All we have to decide is what to do with the time that is given to us.",
      "Two things are infinte: the universe and human stupidity; and I'm not sure about the universe.",
      "Try not to become a man of success, but rather try to become a man of value.",
    ];

    this._$quote = null;
    this._interval = null;

  }
  connectedCallback(){
      this.innerHTML = `
        <style>
        .rw-container{
          width:500px;
          margin:auto;
        }
        .rw-container h1 {
          font-size: 20px;
          margin:0;
        }
        </style>
        <div class='rw-container'>
          <h1>Random Quote:</h1>
          <p>"<span id="quote"></span>"</p>
        </div>
      `;
      this._$quote = this.querySelector('#quote');
      this._setInterval(this.getAttribute("interval"))
      this._render();
  }
  _render(){
    if(this._$quote !== null)    {
      this._$quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
    }
  }

  _setInterval(value){
    if(this._interval !== null){
      clearInterval(this._interval);
    }
    if(value > 0){
      this._interval = setInterval(() => this._render(), value);
    }
  }
  disconnectedCallback(){
    clearInterval(this._interval);
  }
}

window.customElements.define('my-component', MyComponent)