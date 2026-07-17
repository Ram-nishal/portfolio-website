"use strict";

/* ==========================================================
   Smooth Scroll Navigation
========================================================== */

export function initializeSmoothScroll() {

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}