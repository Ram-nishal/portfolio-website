"use strict";

/* ==========================================================
   About Section
   Statistics Component

   Responsible for:
   - Rendering Statistics
   - Dynamic Statistic Cards

   Author : Ram Nishal M
   Version : 1.6.0
========================================================== */

export function createAboutStats(data) {

    const container = document.createElement("div");

    container.className = "about-stats";

    data.about.statistics.forEach(stat => {

        const card = document.createElement("div");

        card.className = "about-stat";

        const value = document.createElement("h3");

        value.className = "about-stat-value";

        value.textContent = stat.value;

        const label = document.createElement("p");

        label.className = "about-stat-label";

        label.textContent = stat.label;

        card.append(

            value,

            label

        );

        container.appendChild(card);

    });

    return container;

}