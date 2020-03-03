
var str="Create Stunning Visual Media"
var arrLang = {
    'en' : {
        'videos' : 'VIDEOS',
        'tables' : 'TABLES',
        'form' : 'FORM',
        'xml' : 'XML',
        'gallery' : 'GALLERY',
        'list' : 'LIST',
        'signin' : 'SIGN IN',
        'signup' : 'SIGN UP',
        'username' :'Username',
        'password' : 'Password',
        'p' : "Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.",
        'h1' : str
    },
    'lt' : {
        'videos' : 'VAIZDO IRAŠAI',
        'tables' : 'LENTELĖS',
        'form' : 'ANKETA',
        'xml' : 'XML',
        'gallery' : 'GALERIJA',
        'list' : 'SĄRRAŠAS',
        'h1' : 'Sukurkite stulbinančią vizualią mediją',
        'signin' : 'PRISIJUNGTI',
        'signup' : 'UŽSIREGISTRUOTI',
        'username' :'Prisijungimo vardas',
        'password' : 'Slaptažodis',
        'modalsignin':'Prisijungti',
        'modalsignup':'Susikurti paskyrą',
        'p' : "Paprastas įrankis skirtas kurti vaizdo įrašus ir nuotraukas reklamoms, socialiniams tinklams, blogams ir tinklapiams.",
        'p1' : "Sukurkite išskirtinį projektą!"
    }
};
$(function(){
    $('.dropdown-item').click(function(){
        var lang = $(this).attr('id');

        $('.nav-link').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.modal-footer button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.modal-footer button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.group h1 span').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.group p span').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('placeholder').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
