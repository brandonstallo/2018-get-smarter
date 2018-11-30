console.log('web components js');

class MyComponent extends HTMLElement{

  connectedCallback(){
      this.innerHTML = `
      <style>p{color:red}</style>
      <p>My Web Component</p>
      `;
  }
}
window.customElements.define('my-component', MyComponent)

// let $div = document.getElementById('simple-div');
// $div.attachShadow({mode: "open"});
// $div.shadowRoot.innerHTML= `
//   <style>
//     p {color:blue;}
//     </style>
//     <p>Paragraph text within the Shadow DOM!</p>
// `;
