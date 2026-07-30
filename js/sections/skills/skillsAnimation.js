"use strict";

/* ==========================================================
   Skills Section
   Progress Bar Animation

   Responsible for:
   - Animate Progress Bars
   - Trigger Once
   - Intersection Observer

   Author : Ram Nishal M
   Version : 2.2.0
========================================================== */

export function initializeSkillsAnimation() {

    const section = document.querySelector("#skills");

    if (!section) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const fills = section.querySelectorAll(".skill-fill");

                fills.forEach(fill => {

                    const width = fill.dataset.width;

                    fill.style.width = width;

                });

                observer.disconnect();

            });

        },

        {

            threshold:0.35

        }

    );

    observer.observe(section);

}