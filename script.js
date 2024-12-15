
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment-button");
    const resetButton = document.getElementById("reset-button");
    const partyPopper = document.getElementById("party-popper");

    // Load counter value from local storage or start from 0
    let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
    counterElement.textContent = counter;

    // Increment counter on button click and save to local storage
    incrementButton.addEventListener("click", () => {
        counter += 1;
        
       // alert("Congrats !💪");
  
          triggerConfetti();
        counterElement.textContent = counter;
        localStorage.setItem("counter", counter);
    });
     
       
       
       
    // Reset counter on button click, save to local storage, and alert message
    resetButton.addEventListener("click", () => {
        counter = 0;
        counterElement.textContent = counter;
        localStorage.setItem("counter", counter);
        alert("You are a loser !😡");
    });
    
    function triggerConfetti() { const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f']; 
const confettiCount = 100;
 for (let i = 0; i < confettiCount; i++)
  { 
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; confetti.style.left = Math.random() * window.innerWidth+ 'px';
   confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);  confetti.addEventListener('animationend', () => { 
    confetti.remove();
     }); } } 
});
