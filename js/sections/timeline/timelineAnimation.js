"use strict";

/* ==========================================================
   Timeline Section
   Animation

   Responsible for:
   - Scroll Reveal Animation
   - Staggered Card Animation

   Author : Ram Nishal M
   Version : 2.0.0
========================================================== */

export function initializeTimelineAnimation() {

    const cards = document.querySelectorAll(".timeline-card");

    if (!cards.length) return;

    /* ======================================================
       Initial State
    ====================================================== */

    cards.forEach(card => {

        card.classList.add("timeline-hidden");

    });

    /* ======================================================
       Observer
    ====================================================== */

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("timeline-visible");

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.20
        }

    );

    cards.forEach(card => observer.observe(card));

}