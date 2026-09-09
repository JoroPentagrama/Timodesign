/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});



/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

    });

});



/* =========================================
   HEADER ON SCROLL
========================================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* =========================================
   SERVICE MODAL
========================================= */

const serviceButtons =
    document.querySelectorAll(".service");


const serviceModal =
    document.getElementById("serviceModal");


const modalClose =
    document.getElementById("modalClose");


const modalNumber =
    document.getElementById("modalNumber");


const modalTitle =
    document.getElementById("modalTitle");


const modalContent =
    document.getElementById("modalContent");



/*
    Всички подробни описания
    са тук.

    Ако искаш по-късно да промениш
    текста на някоя услуга,
    правиш го само тук.
*/

const services = {


    graphic: {

        number: "01 / ГРАФИЧЕН ДИЗАЙН",

        title: "Графичен дизайн",

        content: `

            <p>
                Добрият графичен дизайн не е просто красива
                картинка. Той трябва да представя правилно
                вашата идея и да бъде съобразен с хората,
                към които е насочен.
            </p>

            <p>
                Мога да създам различни визуални материали
                според нуждите на вашия бизнес или проект.
            </p>

            <ul>

                <li>
                    Лога и графични знаци
                </li>

                <li>
                    Рекламни материали
                </li>

                <li>
                    Банери и рекламни визии
                </li>

                <li>
                    Дизайн за публикации в социалните мрежи
                </li>

                <li>
                    Визитки и печатни материали
                </li>

                <li>
                    Други индивидуални дизайнерски решения
                </li>

            </ul>

            <p>
                Всеки дизайн се разработва според вашия
                стил, идея и конкретната цел на проекта.
            </p>

        `
    },


    identity: {

        number: "02 / ВИЗУАЛНА ИДЕНТИЧНОСТ",

        title: "Визуална идентичност",

        content: `

            <p>
                Визуалната идентичност е начинът, по който
                един бизнес се представя пред хората.
                Тя трябва да бъде последователна,
                разпознаваема и подходяща за самия бранд.
            </p>

            <p>
                Работя върху цялостното визуално усещане,
                така че отделните елементи да изглеждат
                като част от едно цяло.
            </p>

            <ul>

                <li>
                    Създаване или развитие на лого
                </li>

                <li>
                    Избор на подходящи цветове
                </li>

                <li>
                    Типография и шрифтове
                </li>

                <li>
                    Визуален стил
                </li>

                <li>
                    Графични елементи
                </li>

                <li>
                    Материали за представяне на бранда
                </li>

            </ul>

            <p>
                Целта е вашият бизнес да има собствен
                характер и да бъде разпознаваем.
            </p>

        `
    },


    digital: {

        number: "03 / ДИГИТАЛЕН ДИЗАЙН",

        title: "Дигитален дизайн",

        content: `

            <p>
                Дигиталният дизайн трябва да изглежда добре,
                но също така да бъде лесен за разбиране
                и използване.
            </p>

            <p>
                Създавам визуални концепции за дигитални
                среди, като се съобразявам както с визията,
                така и с начина, по който потребителят
                ще взаимодейства с тях.
            </p>

            <ul>

                <li>
                    Дизайн на уеб сайтове
                </li>

                <li>
                    Визии за социални мрежи
                </li>

                <li>
                    Дизайн на рекламни материали
                </li>

                <li>
                    Дигитални презентации
                </li>

                <li>
                    Визуални концепции за онлайн проекти
                </li>

                <li>
                    Индивидуални дигитални решения
                </li>

            </ul>

            <p>
                Всеки проект е съобразен с неговата
                аудитория, цел и цялостен визуален стил.
            </p>

        `
    }

};



/* =========================================
   OPEN SERVICE MODAL
========================================= */

serviceButtons.forEach(button => {

    button.addEventListener("click", () => {


        const serviceName =
            button.dataset.service;


        const service =
            services[serviceName];


        if (!service) {
            return;
        }


        modalNumber.textContent =
            service.number;


        modalTitle.textContent =
            service.title;


        modalContent.innerHTML =
            service.content;


        serviceModal.classList.add("active");

        serviceModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );


    });

});



/* =========================================
   CLOSE SERVICE MODAL
========================================= */

function closeModal() {

    serviceModal.classList.remove(
        "active"
    );

    serviceModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    closeModal
);



/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

serviceModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === serviceModal
        ) {

            closeModal();

        }

    }
);



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            serviceModal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);



/* =========================================
   MODAL CONTACT BUTTON
========================================= */

const modalContact =
    document.getElementById("modalContact");


modalContact.addEventListener(
    "click",
    () => {

        closeModal();

    }
);