/* =====================================================================
   GL DINING — careers application form (careers.html)

   GitHub Pages can't receive form submissions by itself. To collect real
   applications, create a free form at https://formspree.io, copy its
   endpoint (looks like https://formspree.io/f/abcdwxyz) and paste it below.
   Until then the form runs in demo mode and sends nothing.
   ===================================================================== */

const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/abcdwxyz"

const form = document.getElementById("job-form");
const message = document.getElementById("job-message");
const venueSelect = document.getElementById("job-venue");

// "Apply at blu" / "Apply at The Library" buttons pick the restaurant for you
document.querySelectorAll("[data-apply]").forEach((btn) => {
  btn.addEventListener("click", () => {
    venueSelect.value = btn.dataset.apply;
  });
});

function showMessage(kind, text) {
  message.className = "alert mt-4 " + (kind === "success" ? "alert-success" : "alert-error");
  message.textContent = text;
  message.hidden = false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const days = form.querySelectorAll('input[name="availability"]:checked');
  if (days.length === 0) {
    showMessage("error", "Please choose at least one time you're available to work.");
    return;
  }

  if (!FORM_ENDPOINT) {
    showMessage("success", "Thanks for applying! (Demo mode: this form isn't connected yet, so nothing was sent.)");
    form.reset();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(response.status);
    showMessage("success", "Thanks for applying! A manager will reach out soon.");
    form.reset();
  } catch (err) {
    showMessage("error", "Your application didn't go through. Please try again, or call the restaurant.");
  } finally {
    button.disabled = false;
  }
});
