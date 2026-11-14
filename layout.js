/* =====================================================================
   GL DINING — shared navigation and footer
   Every page has <div id="site-header"></div> and <div id="site-footer"></div>.
   This file fills them in, so the nav only has to be edited in one place.
   The current page is highlighted using <body data-page="...">.
   ===================================================================== */

const NAV_LINKS = [
  { page: "blu", href: "blu.html", label: "blu" },
  { page: "library", href: "library.html", label: "The Library" },
  { page: "careers", href: "careers.html", label: "Careers" },
];

function navItems() {
  const current = document.body.dataset.page;
  return NAV_LINKS.map((link) => {
    const active = link.page === current;
    return `<li><a href="${link.href}"${active ? ' class="menu-active" aria-current="page"' : ""}>${link.label}</a></li>`;
  }).join("");
}

document.getElementById("site-header").innerHTML = `
<header class="navbar site-nav sticky top-0 z-50 px-4 md:px-8">
  <div class="navbar-start gap-1">
    <div class="dropdown md:hidden">
      <div tabindex="0" role="button" class="btn btn-ghost btn-square" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
      </div>
      <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-56 p-2 z-50">
        <li><a href="index.html">Home</a></li>
        ${navItems()}
      </ul>
    </div>
    <a href="index.html" class="brand">GL Dining<small class="hidden sm:inline">Norman, OK</small></a>
  </div>
  <nav class="navbar-end hidden md:flex" aria-label="Main">
    <ul class="menu menu-horizontal gap-1">${navItems()}</ul>
  </nav>
</header>`;

document.getElementById("site-footer").innerHTML = `
<footer class="site-footer bg-base-100">
  <div class="footer sm:footer-horizontal max-w-6xl mx-auto px-4 py-10">
    <aside>
      <p class="brand">GL Dining</p>
      <p class="text-muted">Welcome to the Good Life!</p>
    </aside>
    <nav>
      <h6 class="footer-title text-blu">blu</h6>
      <p>201 S Crawford Ave, Norman</p>
      <p>(405) 360-4258</p>
      <a class="link link-hover" href="blu.html">Menu &amp; specials</a>
    </nav>
    <nav>
      <h6 class="footer-title text-lib">The Library</h6>
      <p>607 W Boyd St, Norman</p>
      <p>(405) 366-7465</p>
      <a class="link link-hover" href="library.html">Menu &amp; specials</a>
    </nav>
    <nav>
      <h6 class="footer-title">Explore</h6>
      <a class="link link-hover" href="careers.html">Careers</a>
      <a class="link link-hover" href="https://www.facebook.com/blufinewineok" target="_blank" rel="noopener">blu on Facebook</a>
    </nav>
  </div>
  <p class="max-w-6xl mx-auto px-4 pb-6 text-xs text-muted">© ${new Date().getFullYear()} GL Dining · Menu items and prices subject to change.</p>
</footer>`;
