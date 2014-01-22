document.onload(function(){
 
   $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
          
        }, 1000);
        return false;
      }
    }
  });
});

var container = document.querySelector('#portfolio');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: 'img'
});

$('#intro').waypoint(function() {
  $("#link_intro").css("color: white");
});

});

