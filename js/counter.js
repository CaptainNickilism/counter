window.addEventListener('DOMContentLoaded', (event) => {

   // DOM SELECTIONS
   const increaseButton = document.querySelector('#decreaseButton'); // DECREASE DOM ELEMENT
   const decreaseButton = document.querySelector('#increaseButton'); // INCREASE DOM ELEMENT
   const counter = document.querySelector('#counter'); // COUNTER DOM ELEMENT
   let counterNumber = Number(counter.innerHTML);      // COUNTER NUMBER

   // EVENT LISTENERS
   increaseButton.addEventListener('click', decreaseCounter);  // CLICK FUNCTIONS
   decreaseButton.addEventListener('click', increaseCounter);  // CLICK FUNCTIONS
   increaseButton.addEventListener('mousemove', shineEffect);  // HOVER FUNCTIONS
   decreaseButton.addEventListener('mousemove', shineEffect);  // HOVER FUNCTIONS

   // COUNTER FUNCTIONS
   function decreaseCounter(e) {                      // DECREASE
      counter.innerHTML = --counterNumber;            // Decrease the number by 1
      pressAnimation(this);                           // Play animation on button
   }

   function increaseCounter() {                       // INCREASE
      counter.innerHTML = ++counterNumber;            // Increase the number by 1
      pressAnimation(this);                           // Play animation on button
   }

   // VISUAL EFFECTS
   function shineEffect(e) {                          // HOVER "GLASS REFLECTION" EFFECT
      let { x, y } = this.getBoundingClientRect();    // Get button size & position
      this.style.setProperty("--x", e.clientX - x);   // Update --x CSS variable (i.e. move the reflection horizontally)
      this.style.setProperty("--y", e.clientY - y);   // Update --y CSS variable (i.e. move the reflection vertically)
   }

   function pressAnimation(button) {                  // CLICK VISUAL FEEDBKACK
      button.classList.add('pressedButton');          // Add class to style button pseudo-elements
      button.ontransitionend = () => {                // When CSS transition ends...
         button.classList.remove('pressedButton')     // ...remove the class
      }
      counter.classList.add('changedCounter');        // Add class to play fade animation
      counter.onanimationend = () => {                // When CSS animation ends...
         counter.classList.remove('changedCounter');  // ...remove the class
      }
   }



});
