$(document).ready(function(){

    function fun1() {
        var chbox;
        chbox=document.getElementById('check-menu');
        var anketa;
        anketa=document.getElementById('anketa__conteiner');
        var headtitle=document.getElementById('head__title');
        if (anketa.style.visibility=="hidden") {
            anketa.style.visibility="visible";
            anketa.style.opacity="1";
            headtitle.style.visibility="hidden";
            headtitle.style.opacity="0";
        }
        else {
            anketa.style.visibility="hidden";
            anketa.style.opacity="0";
            headtitle.style.visibility="visible";
            headtitle.style.opacity="1";
        }
    }
    fun1();
    $('#check-anketa').on( 'change', function(){ fun1(); } );

});