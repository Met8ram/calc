function Print() {
  window.print();
}

function Slide(showIntro) {
  document.getElementById("intro").classList.toggle("hidden", !showIntro);
  document.getElementById("results").classList.toggle("hidden", showIntro);
}

function GetValue(id) {
  return document.getElementById(id).value;
}

function SetValue(id, val) {
  document.getElementById(id).value = val;
}

function SetHTML(id, val) {
  document.getElementById(id).innerHTML = val;
}

function KD(key, id) {
  if (key === "Backspace") {
    const d = GetValue(id);
    if (d.length === 3 || d.length === 6) {
      SetValue(id, d.slice(0, -1));
    }
  }
  return (key >= "0" && key <= "9") || ["ArrowLeft","ArrowRight","Delete","Backspace","Tab","Enter"].includes(key);
}

function Dots(id) {
  const d = GetValue(id);
  if (d.length === 2 || d.length === 5) {
    SetValue(id, d + ".");
  }
}

function We2JS(x) {
  const d = x.substr(0, 2);
  const m = x.substr(3, 2);
  const y = x.substr(6, 4);
  return `${y}-${m}-${d}`;
}

function GetAge(bday) {
  const today = new Date();
  let age = today.getFullYear() - bday.getFullYear();
  if (today.getMonth() < bday.getMonth() || 
      (today.getMonth() === bday.getMonth() && today.getDate() < bday.getDate())) {
    age--;
  }
  return age;
}

function Calc() {
  const dateStr = GetValue("birthday");
  if (!dateStr) {
    SetHTML("elabel", translations[window.currentLang].error_empty);
    document.getElementById("elabel").style.visibility = "visible";
    return;
  }

  const date = new Date(We2JS(dateStr));
  if (isNaN(date)) {
    SetHTML("elabel", translations[window.currentLang].error_invalid);
    document.getElementById("elabel").style.visibility = "visible";
    return;
  }

  document.getElementById("elabel").style.visibility = "hidden";

  // TODO: вставити твій код обчислення матриці тут
  // Приклад:
  SetHTML("zona1", "Sample zone description");
  SetHTML("zona2", "...");
  SetHTML("zona3", "...");
  SetHTML("zona4", "...");

  Slide(false);
}

function loadMatrixSVG() {
  return fetch("matrix.svg")
    .then(response => response.text())
    .then(svg => {
      document.getElementById("matrix-container").innerHTML = svg;
    });
}

function Calc() {
  const dateStr = GetValue("birthday");
  if (!dateStr) {
    SetHTML("elabel", translations[window.currentLang].error_empty);
    document.getElementById("elabel").style.visibility = "visible";
    return;
  }

  const date = new Date(We2JS(dateStr));
  if (isNaN(date)) {
    SetHTML("elabel", translations[window.currentLang].error_invalid);
    document.getElementById("elabel").style.visibility = "visible";
    return;
  }

  document.getElementById("elabel").style.visibility = "hidden";

  // Завантажуємо SVG і після цього запускаємо розрахунки
  loadMatrixSVG().then(() => {
    // TODO: викликати твої функції Kver(), обчислення масивів, SetHTML("point-XX", ...)
    SetHTML("zona1", "Sample zone description");
    SetHTML("zona2", "...");
    SetHTML("zona3", "...");
    SetHTML("zona4", "...");
  });

  Slide(false);
}

