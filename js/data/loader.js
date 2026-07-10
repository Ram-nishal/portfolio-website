"use strict";

/* ==========================================================
   Portfolio Website
   Loader Module

   Responsible for:
   - Loading portfolio.json
   - Validating JSON
   - Caching Portfolio Data

   Author: Ram Nishal M
   Version: 1.1.0
========================================================== */

import { appState } from "../core/appState.js";

/* ==========================================================
   Configuration
========================================================== */

const DATA_PATH = new URL(  
    "../../data/portfolio.json",
    import.meta.url
);

/* ==========================================================
   Validation
========================================================== */

const REQUIRED_SECTIONS = [

    "website",
    "settings",
    "assets",
    "personal",
    "navigation",
    "hero",
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "certifications",
    "timeline",
    "achievements",
    "contact",
    "social",
    "footer"

];

/* ==========================================================
   Validate Portfolio Structure
========================================================== */

function validatePortfolio(data) {

    for (const section of REQUIRED_SECTIONS) {

        if (!(section in data)) {

            throw new Error(

                `Missing required section: ${section}`

            );

        }

    }

    return true;

}

/* ==========================================================
   Load Portfolio
========================================================== */

/**
 * Loads portfolio.json.
 *
 * Returns cached data if already loaded.
 *
 * @returns {Promise<Object>}
 */

export async function loadPortfolio() {

    if (appState.portfolio) {

        return appState.portfolio;

    }

    appState.isLoading = true;

    try {

        const response = await fetch(DATA_PATH);

        if (!response.ok) {

            throw new Error(

                `Failed to load portfolio.json (${response.status})`

            );

        }

        const data = await response.json();

        validatePortfolio(data);

        Object.freeze(data);

        appState.portfolio = data;

        appState.isLoaded = true;

        appState.hasError = false;

        return data;

    }

    catch (error) {

        appState.hasError = true;

        console.error(error);

        throw error;

    }

    finally {

        appState.isLoading = false;

    }

}

/* ==========================================================
   Get Cached Portfolio
========================================================== */

export function getPortfolio() {

    return appState.portfolio;

}