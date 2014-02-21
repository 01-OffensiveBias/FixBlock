document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('load');
    // onClick's logic below:
    link.addEventListener('click', function () {
      var web = "http://web.archive.org/web/20140114013337/";
      var url = web + document.getElementById("text").value;
      document.getEmementById("image").innerHTML = "<embed src='" + url + "'/>";
    });
});