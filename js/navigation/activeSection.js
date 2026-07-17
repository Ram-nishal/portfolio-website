"use strict";

/* ==========================================================
   Active Navigation Link
========================================================== */

export function initializeActiveSection() {

    const sections = document.querySelectorAll("main section");

    const links = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                links.forEach(link => {

                    link.classList.remove("active");

                    if (

                        link.getAttribute("href") ===
                        "#" + entry.target.id

                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {

            threshold: 0.45

        }

    );

    sections.forEach(section => observer.observe(section));

}