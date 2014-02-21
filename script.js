var blocked = "";
var url = window.location.href;
if ( url.search( 'www.youtube.com' ) >= 0 && url.search( 'watch' ) != -1 ) {
  blocked = 'http://www.youtube.com/' + url.substr( url.search( 'watch' ), 19 );
} else {
  blocked = redir.url;
}
var newurl = "http://web.archive.org/web/20140117015342/";
var newPage = newurl + blocked;
console.log("redirecting to " + newPage + "...");
window.location.href = newPage;