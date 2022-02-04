const preloader = document.getElementById( 'preloader' );
const body = document.querySelector( 'body' );

setTimeout( function() {
    preloader.classList.add( 'cerrar' );
    body.classList.remove( 'hidden' );
}, 10500 );