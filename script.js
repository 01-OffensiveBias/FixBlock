var newPage;
var url = window.location.href;

if ( url.search( 'http://www.youtube.com/watch' ) != -1 ) {
  newPage = 'http://www.youtube.com/embed/' + url.substr( 31, 11 );
}

console.log("Redirecting to " + newPage + "...");
window.location.href = newPage;
