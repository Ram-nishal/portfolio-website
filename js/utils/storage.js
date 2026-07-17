"use strict";

/* ==========================================================
   Portfolio Website
   Storage Utility

   Handles:
   - Theme Preference
   - Future User Preferences

   Author: Ram Nishal M
   Version: 1.3.0
========================================================== */

/* ==========================================================
   Storage Keys
========================================================== */

const STORAGE_KEYS = {

    THEME: "portfolio-theme"

};

/* ==========================================================
   Generic Functions
========================================================== */

export function setItem(key, value) {

    try {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    }

    catch (error) {

        console.error(

            "Storage Error:",

            error

        );

    }

}

export function getItem(key) {

    try {

        const value = localStorage.getItem(key);

        return value === null

            ? null

            : JSON.parse(value);

    }

    catch (error) {

        console.error(

            "Storage Error:",

            error

        );

        return null;

    }

}

export function removeItem(key) {

    localStorage.removeItem(key);

}

/* ==========================================================
   Theme
========================================================== */

export function saveTheme(theme) {

    setItem(

        STORAGE_KEYS.THEME,

        theme

    );

}

export function loadTheme() {

    return getItem(

        STORAGE_KEYS.THEME

    );

}

export function clearTheme() {

    removeItem(

        STORAGE_KEYS.THEME

    );

}