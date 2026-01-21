const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/xaqqqwzk", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerHTML = "✅ Message envoyé avec succès";
    status.style.color = "lightgreen";
    form.reset();
  } else {
    status.innerHTML = "❌ Erreur, réessayez";
    status.style.color = "red";
  }
});