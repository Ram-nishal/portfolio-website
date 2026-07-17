"use strict";

/* ==========================================================
   Portfolio Website
   Theme Toggle
   Version : 1.3.0
========================================================== */

import {

    toggleTheme,
    getCurrentTheme,
    THEMES

} from "./themeManager.js";

/* ==========================================================
   Create Theme Toggle
========================================================== */

function createToggleScene() {

    const scene = document.createElement("div");
    scene.className = "theme-scene";

    /* ---------- Stars ---------- */

    const stars = document.createElement("div");
    stars.className = "theme-stars";

    /* ---------- Moon ---------- */

    const moon = document.createElement("div");
    moon.className = "theme-moon";

    /* ---------- Sun ---------- */

    const sun = document.createElement("div");
    sun.className = "theme-sun";

    /* ---------- Rays ---------- */

    const rays = document.createElement("div");
    rays.className = "theme-rays";

    /* ---------- Cloud ---------- */

    const cloud = document.createElement("div");
    cloud.className = "theme-cloud";

    scene.appendChild(stars);
    scene.appendChild(rays);
    scene.appendChild(sun);
    scene.appendChild(moon);
    scene.appendChild(cloud);

    return scene;

}

/* ==========================================================
   Update State
========================================================== */

function updateState(button) {

    const dark =

        getCurrentTheme() === THEMES.DARK;

    button.classList.toggle(

        "dark",

        dark

    );

    button.classList.toggle(

        "light",

        !dark

    );

    button.setAttribute(

        "aria-label",

        dark

            ? "Switch to Light Mode"

            : "Switch to Dark Mode"

    );

}

/* ==========================================================
   Initialize
========================================================== */

export function initializeThemeToggle() {

    const button = document.getElementById(

        "theme-toggle"

    );

    if (!button) return;

    button.innerHTML = "";

    button.appendChild(

        createToggleScene()

    );

    updateState(button);

    button.addEventListener(

        "click",

        () => {

            toggleTheme();

            updateState(button);

        }

    );

}