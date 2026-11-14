/* =====================================================================
   GL DINING — hours helpers
   Works out "Open now / Closed" for each restaurant using Norman, OK time.
   Any element with data-status="blu" or data-status="library" gets the
   live status text and a green (open) or red (closed) DaisyUI badge.
   ===================================================================== */

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* 11 -> "11am", 24 -> "midnight", 26 -> "2am" */
function formatHour(h) {
  const hour = ((h % 24) + 24) % 24;
  if (hour === 0) return "midnight";
  const suffix = hour < 12 ? "am" : "pm";
  return (hour % 12 || 12) + suffix;
}

/* Current day and hour in Norman, OK (Central Time) */
function normanNow() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }));
  return { day: now.getDay(), hour: now.getHours() + now.getMinutes() / 60 };
}

function venueStatus(key) {
  const hours = VENUES[key].hours;
  const { day, hour } = normanNow();
  const yesterday = (day + 6) % 7;

  // still open from last night (e.g. Friday until 2am)
  if (hours[yesterday][1] > 24 && hour < hours[yesterday][1] - 24) {
    return { open: true, text: "Open now · until " + formatHour(hours[yesterday][1]) };
  }
  const [open, close] = hours[day];
  if (hour >= open && hour < close) return { open: true, text: "Open now · until " + formatHour(close) };
  if (hour < open) return { open: false, text: "Closed · opens " + formatHour(open) };
  return { open: false, text: "Closed · opens " + formatHour(hours[(day + 1) % 7][0]) + " tomorrow" };
}

function paintStatus() {
  document.querySelectorAll("[data-status]").forEach((el) => {
    const s = venueStatus(el.dataset.status);
    el.textContent = s.text;
    el.classList.add("badge");
    el.classList.toggle("badge-success", s.open);
    el.classList.toggle("badge-error", !s.open);
  });
}

paintStatus();
setInterval(paintStatus, 60000);
