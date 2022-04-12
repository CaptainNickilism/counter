window.addEventListener('DOMContentLoaded', (event) => {

   let display = document.createElement('div');
   display.id = 'display';
   document.body.append(display);

   let title = document.createElement('h2');
   title.id = 'title';
   title.innerHTML = "PRESS <strong>-</strong> OR <strong>+</strong> TO <strong>DECREASE</strong> OR <strong>INCREASE</strong> THE NUMBER.";
   display.append(title);

   let counter = document.createElement('h1');
   counter.id = "counter";
   counter.innerHTML = 0;
   display.append(counter);

   let buttons = document.createElement('div');
   buttons.id = 'buttons';
   document.body.append(buttons);

   let decreaseButton = document.createElement('button');
   decreaseButton.id = "decreaseButton";
   decreaseButton.classList.add('button');
   decreaseButton.innerHTML = "-";
   buttons.append(decreaseButton);

   let increaseButton = document.createElement('button');
   increaseButton.id = "increaseButton";
   increaseButton.classList.add('button');
   increaseButton.innerHTML = "+";
   buttons.append(increaseButton);


   let counterNumber = Number(counter.innerHTML);                    // COUNTER NUMBER

   // EVENT LISTENERS
   increaseButton.addEventListener('click', increaseCounter);  // CLICK FUNCTIONS
   decreaseButton.addEventListener('click', decreaseCounter);  // CLICK FUNCTIONS
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
