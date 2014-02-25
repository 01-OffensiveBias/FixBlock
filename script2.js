document.getElementById('wm-ipp').style.display='none';

console.log( window.location.href + ' asdfasdfasfasdfasdfasdfasdfasdfasdfasdfa' );
if ( window.location.href.search( 'http://www.youtube.com/watch' ) != -1 ) {
  window.location.href = 'http://www.youtube.com/embed/' + window.location.href.substr( 73, 11 );
}