window.addEventListener('DOMContentLoaded', (event) => {

   const increaseButton = document.querySelector('#decreaseButton');
   const decreaseButton = document.querySelector('#increaseButton');

   increaseButton.addEventListener('click', decreaseCounter);
   decreaseButton.addEventListener('click', increaseCounter);
   increaseButton.addEventListener('mousemove', shineEffect);
   decreaseButton.addEventListener('mousemove', shineEffect);

   const counter = document.querySelector('#counter');
   let counterNumber = Number(counter.innerHTML);

   function decreaseCounter(e) {
      counter.innerHTML = --counterNumber;
      pressAnimation(this);
   }

   function increaseCounter() {
      counter.innerHTML = ++counterNumber;
      pressAnimation(this);
   }

   function shineEffect(e) {
      let { x, y } = this.getBoundingClientRect();
      this.style.setProperty("--x", e.clientX - x);
      this.style.setProperty("--y", e.clientY - y);
   }

   function pressAnimation(button) {
      button.classList.add('pressedButton');
      button.ontransitionend = () => {
         button.classList.remove('pressedButton')
      }
      counter.classList.add('changedCounter');
      counter.onanimationend = () => {
         counter.classList.remove('changedCounter');
      }
   }



});
