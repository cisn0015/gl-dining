/* =====================================================================
   GL DINING — specials & activities cards (blu.html, library.html)
   Builds one DaisyUI card per special from VENUES[venueKey].specials.
   ===================================================================== */

document.getElementById("specials-list").innerHTML = venue.specials.map((s) => `
  <article class="card bg-base-100 shadow-sm overflow-hidden special-card">
    <figure><img src="${s.img}" alt="${escapeHtml(s.title)} at ${escapeHtml(venue.name)}" class="w-full aspect-[16/10] object-cover"></figure>
    <div class="card-body gap-2">
      <h3 class="card-title special-title">${escapeHtml(s.title)}</h3>
      <span class="badge badge-soft special-when">${escapeHtml(s.when)}</span>
      <p class="text-muted text-sm">${escapeHtml(s.text)}</p>
    </div>
  </article>`).join("");
