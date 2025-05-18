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