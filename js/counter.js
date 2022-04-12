window.addEventListener('DOMContentLoaded', (event) => {

   // CREATE ELEMENTS
   let display = document.createElement('div');                // Create DISPLAY CONTAINER (div)
      let title = document.createElement('h2');                   // Create TITLE (H2)
      let counter = document.createElement('h1');                 // Create COUNTER (H1)
   let buttons = document.createElement('div');                // Create BUTTONS CONTAINER (div)
      let decreaseButton = document.createElement('button');      // Create DECREASE (button)
      let increaseButton = document.createElement('button');      // Create INCREASE (button)

   // ASSIGN CSS SELECTORS
   display.id = 'display';                                     // Assign CSS selector '#display'
      title.id = 'title';                                         // Assign CSS selector '#title'
      counter.id = "counter";                                     // Assign CSS selector '#counter'
   buttons.id = 'buttons';                                     // Assign CSS selector '#buttons'
      decreaseButton.id = "decreaseButton";                       // Assign CSS selector '#decreaseButton'
      decreaseButton.classList.add('button');                     // Assign CSS selector '.button'
      increaseButton.id = "increaseButton";                       // Assign CSS selector '#increaseButton'
      increaseButton.classList.add('button');                     // Assign CSS class '.button'

   // FILL ELEMENTS INNER HTML
   title.innerHTML = "PRESS <strong>-</strong> OR \
   <strong>+</strong> TO <strong>DECREASE</strong>\
   OR <strong>INCREASE</strong> THE NUMBER.";                 // Insert TITLE html content
   counter.innerHTML = 0;                                      // Insert COUNTER html content
   decreaseButton.innerHTML = "-";                             // Insert DECREASE html content
   increaseButton.innerHTML = "+";                             // Insert INCREASE html content

   // DISPLAY ELEMENTS
   document.body.append(display);                              // Append DISPLAY CONTAINER into DOCUMENT BODY
      display.append(title);                                      // Append TITLE into DISPLAY CONTAINER
      display.append(counter);                                    // Append COUNTER into DISPLAY CONTAINER
   document.body.append(buttons);                              // Append BUTTONS CONTAINER into DOCUMENT BODY
      buttons.append(decreaseButton);                             // Append DECREASE into BUTTONS CONTAINER
      buttons.append(increaseButton);                             // Append INCREASE into BUTTONS CONTAINER

   // EVENT LISTENERS
   increaseButton.addEventListener('click', increaseCounter);  // CLICK FUNCTIONS
   decreaseButton.addEventListener('click', decreaseCounter);  // CLICK FUNCTIONS
   increaseButton.addEventListener('mousemove', shineEffect);  // HOVER FUNCTIONS
   decreaseButton.addEventListener('mousemove', shineEffect);  // HOVER FUNCTIONS




   // COUNTER FUNCTIONS
   let counterNumber = Number(counter.innerHTML);            // READ COUNTER AS NUMBER

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
