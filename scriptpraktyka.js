const submitButton = document.querySelector(".submit-buttons");
const entryButton = document.querySelector(".entry-buttons");
const removeButton = document.querySelector(".remove-buttons")

const namesSummary = document.querySelector(".namesSummary");
const schoolSummary = document.querySelector(".schoolSummary");
const companySummary = document.querySelector(".companySummary");
const yearSummary = document.querySelector(".yearSummary");

const dateSummary = document.querySelector(".dateSummary");
const unitSummary = document.querySelector(".unitSummary");
const topicSummary = document.querySelector(".topicSummary");
const supervisorSummary = document.querySelector(".supervisorSummary");
const raportSummary = document.querySelector(".raportSummary");
const doneSummary = document.querySelector(".doneSummary");
const hoursSummary = document.querySelector(".hoursSummary");
const abilitySummary = document.querySelector(".abilitySummary");




let students = [];
let journal = [];

function addStudent() {
    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const classInput = document.querySelector("#class");
    const yearInput = document.querySelector("#year");
    const companyInput = document.querySelector("#company");
    const startInput = document.querySelector("#start");
    const finishInput = document.querySelector("#finish");

    const student = {
        name: nameInput.value,
        surname: surnameInput.value,
        class: classInput.value,
        year: yearInput.value,
        company: companyInput.value,
        start: startInput.value,
        finish: finishInput.value,
    };

    students.push(student);

    namesSummary.innerHTML = '<span>Imię i nazwisko: </span>' + nameInput.value + " " + surnameInput.value;
    schoolSummary.innerHTML = '<span>Klasa </span>' + classInput.value + "<span>, rok: </span>" + yearInput.value;
    companySummary.innerHTML = '<span>Firma: </span>' + companyInput.value;
    yearSummary.innerHTML = '<span>Termin od: </span>' + startInput.value + " <span>do: </span>" + finishInput.value;

    nameInput.value = "";
    surnameInput.value = "";
    classInput.value = "";
    yearInput.value = "";
    companyInput.value = "";
    startInput.value = "";
    finishInput.value = "";
}

function showStudent() {
    const mySummary = document.getElementById("student-summary");
    const myForms = document.getElementById("forms");
    const displaySetting = mySummary.style.display;
    const summaryButton = document.getElementsByClassName("submit-buttons");

    if(displaySetting == 'block'){
        mySummary.style.display = 'none';
        myForms.style.display = 'block';
        summaryButton.innerHTML = 'Zatwierdź';
    }else{
        mySummary.style.display = 'block';
        myForms.style.display = 'none';
    }
}

function addEntry(){
    const dateInput = document.querySelector("#date");
    const unitInput = document.querySelector("#unit");
    const topicInput = document.querySelector("#topic");
    const supervisorInput = document.querySelector(".supervisor");
    const raportInput = document.querySelector("#raport");
    const doneInput = document.querySelector("#done");
    const hoursInput = document.querySelector("#hours");
    const abilityInput = document.querySelector("#ability");

    const entry = {
        date: dateInput.value,
        unit: unitInput.value,
        topic: topicInput.value,
        supervisor: supervisorInput.value,
        raport: raportInput.value,
        done: doneInput.value,
        hours: hoursInput.value,
        ability: abilityInput.value,
    };

    journal.push(entry);

    dateSummary.innerHTML = '<span>Dzień: </span>' + dateInput.value;
    unitSummary.innerHTML = '<span>Dział: </span>' + unitInput.value;
    topicSummary.innerHTML = '<span>Temat: </span>' + topicInput.value;
    supervisorSummary.innerHTML = '<span>Opiekun: </span>' + supervisorInput.value;
    raportSummary.innerHTML = '<span>Sprawozdanie: </span>' + raportInput.value;
    doneSummary.innerHTML = '<span>Zrealizowano: </span>' + doneInput.value;
    hoursSummary.innerHTML = '<span>Ilość godzin: </span>' + hoursInput.value;
    abilitySummary.innerHTML = '<span>Opanowanie zagadnienia: </span>' + abilityInput.value;

    dateInput.value = "";
    unitInput.value = "";
    topicInput.value = "";
    supervisorInput.value = "";
    raportInput.value = "";
    doneInput.value = "";
    hoursInput.value = "";
    abilityInput.value = "";
}

function clearEntry(){
    const dateInput = document.querySelector("#date");
    const unitInput = document.querySelector("#unit");
    const topicInput = document.querySelector("#topic");
    const supervisorInput = document.querySelector(".supervisor");
    const raportInput = document.querySelector("#raport");
    const doneInput = document.querySelector("#done");
    const hoursInput = document.querySelector("#hours");
    const abilityInput = document.querySelector("#ability");
    
    dateInput.value = "";
    unitInput.value = "";
    topicInput.value = "";
    supervisorInput.value = "";
    raportInput.value = "";
    doneInput.value = "";
    hoursInput.value = "";
    abilityInput.value = "";
}

function showEntry() {
    const mySummary = document.getElementById("journal-summary");
    const myJournal = document.getElementById("journal");
    const displaySetting = mySummary.style.display;
    const summaryButton = document.getElementsByClassName("submit-buttons");

    if(displaySetting == 'block'){
        mySummary.style.display = 'none';
        myJournal.style.display = 'block';
        summaryButton.innerHTML = 'Zatwierdź';
    }else{
        mySummary.style.display = 'block';
        myJournal.style.display = 'none';
    }
}

function showHome() {
  const home = document.getElementById("forms");
  const journal = document.getElementById("journal");
  const summary = document.getElementById("summary");
  const studentsummary = document.getElementById("student-summary");
  const journalsummary = document.getElementById("journal-summary");

  home.style.display = "block";
  journal.style.display = "none";
  summary.style.display = "none";
  studentsummary.style.display = "none";
  journalsummary.style.display = "none";
}

function showJournal() {
  const home = document.getElementById("forms");
  const journal = document.getElementById("journal");
  const summary = document.getElementById("summary");
  const studentsummary = document.getElementById("student-summary");
  const journalsummary = document.getElementById("journal-summary");

  journal.style.display = "block";
  home.style.display = "none";
  summary.style.display = "none";
  studentsummary.style.display = "none";
  journalsummary.style.display = "none";
}

function showSummary() {
  const home = document.getElementById("forms");
  const journal = document.getElementById("journal");
  const summary = document.getElementById("summary");
  const studentsummary = document.getElementById("student-summary");
  const journalsummary = document.getElementById("journal-summary");

  summary.style.display = "block";
  home.style.display = "none";
  journal.style.display = "none";
  studentsummary.style.display = "none";
  journalsummary.style.display = "none";
}

submitButton.addEventListener("click", addStudent);
entryButton.addEventListener("click", addEntry);