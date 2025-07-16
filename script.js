document.addEventListener("DOMContentLoaded", () => {

const URL = "https://script.google.com/macros/s/AKfycbwJBJPCd5qF3sFawOZ4y33dRdVY5RGNqhdolWFNbmdz1JD4klRrVdRm2KcxS1vASNvz/exec";
const form = document.forms['submit-to-google-sheet'];
const statusEl = document.getElementById("status");



form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(URL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          statusEl.textContent = "✅ Dziękujemy! Wiadomość została wysłana.";
          alert("Twoje zgłoszenie zostało wysłane.");
          form.reset();
        })
        .catch(error => {
          statusEl.textContent = "❌ Błąd: nie udało się wysłać formularza.";
          console.error('Error!', error.message);
        });
    });

});


const upButton = document.querySelector('.up');
upButton.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
});




window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    const h1 = document.querySelector(".hero header");
    const p = document.querySelector(".hero p");
    const button = document.querySelector(".hero button");

    hero.classList.add("visible");
    setTimeout(() => {
        h1.classList.add("visible");
        setTimeout(() => {
            p.classList.add("visible");
            setTimeout(() => {
                button.classList.add("visible");
            }, 500);
        }, 500);
    }, 500);
});
