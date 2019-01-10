console.log('rw-poll');

// class RwPoll extends HTMLElement{
//   constructor(){
//     super();
//     this.attached = false;
//     this.data= {
//       'question': 'Is thsi a static question?',
//       'answer': ['Yes of course it is', 'No it\'s definitely not']
//     };

//     this.selected = null;

//     //Elements
//     this.question = null;
//     this.answers = null
//   }

//   connectedCallback(){
//     this.attached = true;
//   }
// }


class ItsFriday extends HTMLElement {
  constructor(){
    super();
    var shadow = this.attachShadow({mode: 'open'});

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
shadow.appendChild(wrapper);
  }
}