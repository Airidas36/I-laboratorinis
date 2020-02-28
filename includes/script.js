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
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.nav-link').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});