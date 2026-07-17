"use strict";

/* ==========================================================
   Navbar Scroll Effect
   Version : 1.4.0
========================================================== */

export function initializeNavbarScroll() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}