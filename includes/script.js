$(document).ready(function(){
    var lang;
var arrLang = {
    'en': {
        'videos': 'VIDEOS',
        'tables': 'TABLES',
        'form': 'FORM',
        'xml': 'XML',
        'gallery': 'GALLERY',
        'list': 'LIST',
        'signin': 'SIGN IN',
        'signup': 'SIGN UP',
        'modalsignin': "Sign In",
        'modalsignup': "Create Account",
        'username': 'Username',
        'password': 'Password',
        'email': "Email",
        'p': "Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.",
        'h1': "Create Stunning Visual Media",
        'reporth1': "Report your problem here",
        'reporth2': "Click on the report button to begin submitting a report form",
        'reportbtn': 'REPORT',
        'make': "Make",
        'model': "Model",
        'engine': "Engine",
        'power': "Power output",
        'tablecaption': "Table of cars",
        'create_design': "Create Design",
        'signup_label': "I agree with",
        'signup_terms': "terms and conditions",
        'report_title': "Fill a report",
        'submit': "Submit",
        'subject': "Subject",
        'message': "Your message",
        'reply_check': "Receive email as soon as you get a reply",
        'languages' : "Languages",
        'label_email' : "Enter your email adress",
        'label_password' : "Enter your password",
        'label_subject' : "Enter the subject",
        'email_help' : "We'll never share your email with anyone else.",
        'invalid_email':"Please enter a valid email address",
        'invalid_password' : "Please enter a password",
        'invalid_subject' : "Subject is required",
        'invalid_message' : "Message field is required",
        'motorcycle_list' : "List of Motorcycles",
        'plane_list' : "List of Planes",
        'car_list' : "List of Cars",
        'footpage' : "PAGES",
        'info' : "INFO",
        'contact' : "CONTACTS"
    },
    'lt': {
        'videos': 'VAIZDO IRAŠAI',
        'tables': 'LENTELĖS',
        'form': 'ANKETA',
        'xml': 'XML',
        'gallery': 'GALERIJA',
        'list': 'SĄRRAŠAS',
        'h1': 'Sukurkite stulbinančią vizualią mediją',
        'signin': 'PRISIJUNGTI',
        'signup': 'UŽSIREGISTRUOTI',
        'username': 'Prisijungimo vardas',
        'password': 'Slaptažodis',
        'email': "Elektroninis paštas",
        'modalsignin': 'Prisijungti',
        'modalsignup': 'Susikurti paskyrą',
        'p': "Paprastas įrankis skirtas kurti vaizdo įrašus ir nuotraukas reklamoms, socialiniams tinklams, blogams ir tinklapiams.",
        'p1': "Sukurkite išskirtinį projektą!",
        'reporth1': "Rašykite skundą čia",
        'reporth2': "Paspauskite ant pranešti mygtuko, kad pradėtumėte rašyti skundą",
        'reportbtn': "PRANEŠTI",
        'make': "Gamintojas",
        'model': "Modelis",
        'engine': "Variklis",
        'power': "Galia",
        'tablecaption': "Automobilių lentelė",
        'create_design': "Sukurkite dizainą",
        'signup_label': "Sutinku su ",
        'signup_terms': "taisyklėmis ir nuostatomis",
        'report_title': 'Užpildykite pranešimą',
        'submit': "Pateikti",
        'subject': "Pranešimo tema",
        'message': "Jūsų pranešimas",
        'reply_check': "Gauti pranešimą, kai į jūsų formą bus atsakyta",
        'languages' : "Kalbos",
        'label_email' : "Įveskite savo elektroninį paštą",
        'label_password' : "Įveskite slaptažodį",
        'label_subject' : "Įrašykite temą",
        'email_help' : "Jūsų elektroninio pašto nedalinsime niekam.",
        'invalid_email':"Įveskite egzistuojantį elektroninį paštą",
        'invalid_password' : "Slaptažodis yra privalomas",
        'invalid_subject' : "Pranešimo tema yra privaloma",
        'invalid_message' : "Pranešimas yra privalomas",
        'motorcycle_list' : "Motociklų sąrašas",
        'plane_list' : "Lėktuvų sąrašas",
        'car_list' : "Automobilių sąrašas",
        'footpage' : "PUSLAPIAI",
        'info' : "INFORMACIJA",
        'contact' : "KONTAKTAI"
    }
};
$(function () {
    $('.dropdown-item').click(function () {
        
        localStorage.setItem(lang, $(this).attr('id'));
        window.location.reload();
    });
    $('.nav-link').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.group h1 span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.group p span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#reportmain span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#reportmain button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#col th').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#mytable caption').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('[data-translate]').each(function (index, element) {
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.create button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-group label').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-title').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer label').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-group small').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#dropdownMenu').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.invalid-feedback').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.list-group button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#footitems h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#footitems ul li p a').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#infobar h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#contacts h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
});