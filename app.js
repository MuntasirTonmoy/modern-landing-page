const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav-menu]");

mobileMenu.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    mobileMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill='currentColor' d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>`;
    nav.classList.remove("hidden");
    nav.classList.add("block");
  } else {
    mobileMenu.innerHTML = ` <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
              />
            </svg>`;
    nav.classList.add("hidden");
    nav.classList.remove("block");
  }
});
