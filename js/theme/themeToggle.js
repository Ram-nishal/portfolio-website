"use strict";

import { toggleTheme } from "./themeManager.js";

/* ==========================================================
   Theme Toggle
========================================================== */

export function initializeThemeToggle() {

    const button = document.getElementById("theme-toggle");

    if (!button) return;

    updateThemeIcon(button);

    button.addEventListener("click", () => {

        toggleTheme();

        updateThemeIcon(button);

    });

}

function updateThemeIcon(button) {

    const currentTheme = document.documentElement.getAttribute("data-theme");

    button.textContent = currentTheme === "dark" ? "☀️" : "🌙";

}