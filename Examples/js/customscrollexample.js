(function(){

  var init = function(){
    var scrollDiv = document.querySelector('#content');
    var custScroll = new CustomScroll(scrollDiv, {ease:true, thumbClass:'scrollbar-thumb', trackClass:'scrollbar-track'});
  };

  window.addEventListener('load', init, false);
  
})();
