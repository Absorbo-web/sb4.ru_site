document.body.onload = function() {

    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        var main = document.getElementById('main__conteiner');
        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done')
            main.classList.add('doneMain')
        }
    }, 500);

}