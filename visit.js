/* =====================================================================
   GL DINING — hours & location section (blu.html, library.html)
   Weekly hours table (today highlighted), address, directions, gallery.
   Uses DAYS and formatHour() from js/hours.js.
   ===================================================================== */

const today = normanNow().day;
const weekOrder = [1, 2, 3, 4, 5, 6, 0]; // Monday first

const hoursRows = weekOrder.map((d) => {
  const [open, close] = venue.hours[d];
  const isToday = d === today;
  return `<tr class="${isToday ? "is-today" : ""}">
    <td>${DAYS[d]}${isToday ? ' <span class="badge badge-sm badge-soft ml-1">Today</span>' : ""}</td>
    <td class="text-right tabular-nums">${formatHour(open)} – ${formatHour(close)}</td>
  </tr>`;
}).join("");

document.getElementById("visit-root").innerHTML = `
  <div class="grid md:grid-cols-2 gap-6">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <p class="eyebrow">Hours</p>
        <table class="table hours-table"><tbody>${hoursRows}</tbody></table>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <p class="eyebrow">Find us</p>
        <p class="text-xl">${escapeHtml(venue.addr)}</p>
        <p class="text-muted tabular-nums">${escapeHtml(venue.phone)}</p>
        <div class="card-actions mt-2">
          <a class="btn btn-venue rounded-full" href="${mapsUrl}" target="_blank" rel="noopener">Open in Google Maps</a>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-4">
          ${venue.gallery.map((src) => `<img src="${src}" alt="Inside ${escapeHtml(venue.name)}" class="w-full aspect-square object-cover rounded-xl">`).join("")}
        </div>
      </div>
    </div>
  </div>`;
