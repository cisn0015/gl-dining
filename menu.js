/* =====================================================================
   GL DINING — menu component (blu.html, library.html)
   Category tabs + menu item rows built from VENUES[venueKey].menu.
   Item format in data.js: ["Name", "Price", "Description", "V GF"]
   A {h:"Heading"} entry starts a sub-section.
   ===================================================================== */

const menuRoot = document.getElementById("menu-root");
const categories = venue.menu;

function formatPrice(price) {
  if (!price) return "";
  // "14.5" -> "$14.5", "6 / 10" -> "$6 / $10", "MKT" stays "MKT"
  return price.split(" / ").map((p) => (/^\d/.test(p) ? "$" + p : p)).join(" / ");
}

function itemHtml(item) {
  if (item.h) return `<h3 class="menu-subhead">${escapeHtml(item.h)}</h3>`;
  const [name, price, desc, tags] = item;
  const badges = (tags || "").split(" ").filter(Boolean)
    .map((t) => `<span class="badge badge-outline badge-xs menu-tag" title="${t === "V" ? "Vegetarian" : "Gluten friendly"}">${t}</span>`)
    .join("");
  return `
    <div class="menu-item">
      <div class="menu-line">
        <span class="menu-name">${escapeHtml(name)}</span>${badges}
        ${price ? `<span class="menu-leader" aria-hidden="true"></span><span class="menu-price">${escapeHtml(formatPrice(price))}</span>` : ""}
      </div>
      ${desc ? `<p class="menu-desc">${escapeHtml(desc)}</p>` : ""}
    </div>`;
}

menuRoot.innerHTML = `
  <div class="menu-card card bg-base-100 shadow-sm">
    <div class="card-body">
      <p class="eyebrow">${escapeHtml(venue.menuNote || "")}</p>
      <div class="overflow-x-auto -mx-2 px-2 pb-1">
        <div class="menu-tabs tabs tabs-box flex-nowrap w-max" role="tablist" aria-label="Menu categories">
          ${categories.map((c, i) => `<button type="button" role="tab" class="tab whitespace-nowrap" id="menu-tab-${i}" aria-controls="menu-panel" data-index="${i}">${escapeHtml(c.cat)}</button>`).join("")}
        </div>
      </div>
      <div id="menu-panel" role="tabpanel" class="mt-2"></div>
    </div>
  </div>`;

function showCategory(index) {
  const cat = categories[index];
  menuRoot.querySelectorAll(".menu-tabs .tab").forEach((tab, i) => {
    tab.classList.toggle("tab-active", i === index);
    tab.setAttribute("aria-selected", String(i === index));
  });
  const panel = document.getElementById("menu-panel");
  panel.setAttribute("aria-labelledby", "menu-tab-" + index);
  panel.innerHTML = `
    ${cat.note ? `<p class="menu-note">${escapeHtml(cat.note)}</p>` : ""}
    <div class="menu-grid">${cat.items.map(itemHtml).join("")}</div>`;
}

menuRoot.querySelectorAll(".menu-tabs .tab").forEach((tab) => {
  tab.addEventListener("click", () => showCategory(Number(tab.dataset.index)));
});

showCategory(0);
