const translations = {
  en: {
    title: "Destiny Matrix Calculator",
    app_name: "Destiny Matrix Calculator",
    enter_data: "Enter your data:",
    calculate: "Calculate",
    back: "Back",
    print: "Print",
    error_empty: "Please enter your birth date",
    error_invalid: "Please enter a valid date",
    weekdays: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    energy_title: "Energy Description"
  },
  it: {
    title: "Calcolatrice della Matrice del Destino",
    app_name: "Calcolatrice della Matrice del Destino",
    enter_data: "Inserisci i dati:",
    calculate: "Calcolare",
    back: "Indietro",
    print: "Stampa",
    error_empty: "Inserire la data di nascita",
    error_invalid: "Inserire una data valida",
    weekdays: ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],
    energy_title: "Descrizione dell'Energia"
  },
  ua: {
    title: "Калькулятор Матриці Долі",
    app_name: "Калькулятор Матриці Долі",
    enter_data: "Введіть дані:",
    calculate: "Розрахувати",
    back: "Назад",
    print: "Друкувати",
    error_empty: "Введіть дату народження",
    error_invalid: "Введіть коректну дату",
    weekdays: ["Неділя","Понеділок","Вівторок","Середа","Четвер","Пʼятниця","Субота"],
    energy_title: "Опис енергії"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.title = translations[lang].title;
  window.currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switcher button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
  switchLanguage("en");
});
