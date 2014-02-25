var blocked = "";
var url = window.location.href;
var newurl = "http://web.archive.org/web/20140117015342/";

if ( url.search( 'http://www.youtube.com/channel/' ) != -1 ) {
  newPage = newurl + 'http://www.youtube.com/';
} else if ( url.search( 'http://www.youtube.com/watch' ) != -1 ) {
  newPage = 'http://www.youtube.com/embed/' + url.substr( 31, 11 );
} else {
  newPage = newurl + redir.url;
}

console.log("Redirecting to " + newPage + "...");
window.location.href = newPage;
