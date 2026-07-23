"use strict";

/* ==========================================================
   Hero Content
========================================================== */

export function createHeroContent(data) {

    const container = document.createElement("div");

    container.className = "hero-content";

    /* Greeting */

    const greeting = document.createElement("p");

    greeting.className = "hero-greeting";

    greeting.textContent = data.hero.greeting || "Hello, I'm";

    /* Name */

    const name = document.createElement("h1");

    name.className = "hero-name";

    name.textContent = data.personal.name;

    /* Roles */

    const roles = document.createElement("div");

    roles.className = "hero-roles";

    data.personal.roles.forEach((role, index) => {

        const item = document.createElement("span");

        item.className = "hero-role";

        item.textContent = role;

        roles.appendChild(item);

        if (index < data.personal.roles.length - 1) {

            const divider = document.createElement("span");

            divider.className = "hero-role-divider";

            divider.textContent = "•";

            roles.appendChild(divider);

        }

    });

    /* Description */

    const description = document.createElement("p");

    description.className = "hero-description";

    description.textContent = data.hero.description;

    container.append(

        greeting,

        name,

        roles,

        description

    );

    return container;

}