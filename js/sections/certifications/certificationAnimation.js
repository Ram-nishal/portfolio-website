"use strict";

/* ==========================================================
   Certifications Section
   Animation Controller

   Responsible for:
   - Card entrance animation
   - Future scroll animations

   Author : Ram Nishal M
   Version : 1.0.0
========================================================== */

export function initializeCertificationAnimation() {

    const cards = document.querySelectorAll(".certification-card");

    if (!cards.length) return;

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        card.style.transition = `opacity .6s ease ${index * 100}ms,
                                 transform .6s ease ${index * 100}ms`;

        requestAnimationFrame(() => {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        });

    });

}