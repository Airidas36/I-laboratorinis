var arrLang = {
    'en' : {
        'videos' : 'VIDEOS',
        'templates' : 'TEMPLATES',
        'pricing' : 'PRICING',
        'help' : 'HELP',
        'about' : 'ABOUT'

    },
    'lt' : {
        'videos' : 'VAIZDO IRAŠAI',
        'templates' : 'ŠABLONAI',
        'pricing' : 'KAINODARA',
        'help' : 'PAGALBA',
        'about' : 'APIE',
        'h1' : 'AAAAAAAAAAAAA'
    }
};
(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.nav-link').each(function(index, element){
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
