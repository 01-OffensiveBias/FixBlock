var blocked = "";
var url = window.location.href;
var newurl = "http://web.archive.org/web/20140117015342/";
if ( url.search( 'http://www.youtube.com' ) = 0 || url.search( 'www.youtube.com' ) = 0 ) {
  blocked = newurl + 'http://www.youtube.com/';
} else if ( url.search( 'http://www.youtube.com/watch?v=' ) != -1 || url.search( 'www.youtube.com/watch?v=' != 1) )
  blocked = 'http://www.youtube.com/embed/' + url.substr( 31, 11 );
} else {
  blocked = redir.url;
}
console.log("redirecting to " + newPage + "...");
window.location.href = newPage;
