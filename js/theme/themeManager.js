"use strict";

/* ==========================================================
   Portfolio Website
   Theme Manager

   Responsibilities
   ----------------
   • Detect saved theme
   • Detect system theme
   • Apply theme
   • Save theme
   • Toggle theme

   Version : 1.3.0
========================================================== */

import {

    loadTheme,

    saveTheme

} from "../utils/storage.js";

/* ==========================================================
   Theme Constants
========================================================== */

export const THEMES = {

    LIGHT: "light",

    DARK: "dark"

};

/* ==========================================================
   Current Theme
========================================================== */

let currentTheme = THEMES.LIGHT;

/* ==========================================================
   System Preference
========================================================== */

function getSystemTheme() {

    return window.matchMedia(

        "(prefers-color-scheme: dark)"

    ).matches

        ? THEMES.DARK

        : THEMES.LIGHT;

}

/* ==========================================================
   Apply Theme
========================================================== */

export function applyTheme(theme) {

    currentTheme = theme;

    document.documentElement.setAttribute(

        "data-theme",

        theme

    );

}

/* ==========================================================
   Initialize Theme
========================================================== */

export function initializeTheme() {

    const savedTheme = loadTheme();

    const theme =

        savedTheme ||

        getSystemTheme();

    applyTheme(theme);

}

/* ==========================================================
   Toggle Theme
========================================================== */

export function toggleTheme() {

    const nextTheme =

        currentTheme === THEMES.DARK

            ? THEMES.LIGHT

            : THEMES.DARK;

    applyTheme(nextTheme);

    saveTheme(nextTheme);

}

/* ==========================================================
   Helpers
========================================================== */

export function getCurrentTheme() {

    return currentTheme;

}

export function isDarkTheme() {

    return currentTheme === THEMES.DARK;

}