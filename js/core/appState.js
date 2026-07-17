"use strict";

/* ==========================================================
   Portfolio Website
   Application State

   Responsible for:
   - Shared runtime state
   - Portfolio cache
   - Current UI state

   Author: Ram Nishal M
   Version: 1.1.0
========================================================== */

export const appState = {

    /* ======================================================
       Portfolio Data
    ====================================================== */

    portfolio: null,

    /* ======================================================
       Application Status
    ====================================================== */

    isLoaded: false,

    isLoading: false,

    hasError: false,

    /* ======================================================
       Theme
    ====================================================== */

    currentTheme: "dark",

    /* ======================================================
       Navigation
    ====================================================== */

    currentSection: "hero",

    /* ======================================================
       Runtime
    ====================================================== */

    initialized: false

};

Object.seal(appState);

/* ==========================================================
   Portfolio Data
========================================================== */

export function setPortfolioData(data) {

    appState.portfolio = data;

}

export function getPortfolioData() {

    return appState.portfolio;

}

/* ==========================================================
   Loading State
========================================================== */

export function setLoaded(value = true) {

    appState.isLoaded = value;

}

export function setLoading(value = true) {

    appState.isLoading = value;

}

/* ==========================================================
   Theme
========================================================== */

export function setCurrentTheme(theme) {

    appState.currentTheme = theme;

}

/* ==========================================================
   Navigation
========================================================== */

export function setCurrentSection(section) {

    appState.currentSection = section;

}