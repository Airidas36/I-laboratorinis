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
        'password' : 'Password'
    },
    'lt' : {
        'videos' : 'VAIZDO IRAŠAI',
        'tables' : 'LENTELĖS',
        'form' : 'ANKETA',
        'xml' : 'XML',
        'gallery' : 'GALERIJA',
        'list' : 'SĄRRAŠAS',
        'h1' : 'aaaaaa',
        'signin' : 'PRISIJUNGTI',
        'signup' : 'UŽSIREGISTRUOTI',
        'username' :'Prisijungimo vardas',
        'password' : 'Slaptažodis',
        'modalsignin':'Prisijungti',
        'modalsignup':'Susikurti paskyrą'
    }
};
$(function(){
    $('.translate').click(function(){
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
