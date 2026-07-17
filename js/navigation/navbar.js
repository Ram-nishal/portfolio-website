"use strict";

import {

    getPortfolioData

} from "../core/appState.js";

/* ==========================================================
   Portfolio Website
   Navigation Bar

   Version : 1.4.0
========================================================== */

/* ==========================================================
   Create Logo
========================================================== */

function createLogo(data) {

    const logo = document.createElement("a");

    logo.className = "nav-logo";

    logo.href = "#hero";

    logo.textContent =
        data?.navigation?.title ||
        data?.personal?.shortName ||
        data?.personal?.name ||
        "Portfolio";

    return logo;

}

/* ==========================================================
   Create Navigation Links
========================================================== */

function createNavigation(items) {

    const nav = document.createElement("nav");

    nav.className = "nav-links";

    items
        .filter(item => item.visible !== false)
        .forEach(item => {

        const link = document.createElement("a");

        link.className = "nav-link";

        link.href = `#${item.id}`;

        link.textContent = item.label;

        nav.appendChild(link);

    });

    return nav;

}

/* ==========================================================
   Create Theme Toggle Placeholder
========================================================== */

function createThemeHolder() {

    const wrapper = document.createElement("div");

    wrapper.className = "nav-theme";

    const oldToggle = document.getElementById(

        "theme-toggle"

    );

    if (oldToggle) {

        wrapper.appendChild(oldToggle);

    }

    return wrapper;

}

/* ==========================================================
   Initialize Navbar
========================================================== */

export function initializeNavbar() {

    const data = getPortfolioData();

    console.log("Navbar Data:", data);

    if (!data) {

        console.error("Portfolio data not available.");

        return;

    }

    const container = document.getElementById("navbar-container");

    if (!container) {

        console.error("Navbar container not found.");

        return;

    }

    container.innerHTML = "";

    const navbar = document.createElement("div");

    navbar.className = "navbar";

    navbar.appendChild(

        createLogo(data)

    );

    navbar.appendChild(

        createNavigation(

            data.navigation.items

        )

    );

    navbar.appendChild(

        createThemeHolder()

    );

    container.appendChild(

        navbar

    );

}