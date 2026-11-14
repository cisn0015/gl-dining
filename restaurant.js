/* =====================================================================
   GL DINING — restaurant page basics (blu.html and library.html)
   Reads <body data-venue="blu"> or <body data-venue="library">, then fills
   every element marked data-field="..." with that restaurant's info from
   js/data.js. Also holds helpers shared by specials.js, menu.js and
   visit.js, which build the other sections of the page.
   ===================================================================== */

/* Makes text safe to put inside HTML */
function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

const venueKey = document.body.dataset.venue;
const venue = VENUES[venueKey];

document.querySelectorAll("[data-field]").forEach((el) => {
  el.textContent = venue[el.dataset.field] ?? "";
});

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(venue.name + " " + venue.addr);
document.querySelectorAll("[data-directions]").forEach((a) => {
  a.href = mapsUrl;
});

document.title = venue.name + " | GL Dining";
