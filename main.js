'use strict';


$(document).ready(init);
function init() {

  $('body').addClass('revealed')
  var modalContainer = $('#modal-container'); 

  var hideModal = function() {  
    modalContainer.removeClass('show')
    // modalContainer.hide();
  };

  var showModal = function() { 
    modalContainer.addClass('show')
    // modalContainer.show();
  };

  var showModalButton = $('#modal-show');
  (showModalButton).on('click', showModal) 

  var closeModalButton = $('#modal-hide'); 
  closeModalButton.on('click', hideModal); 


  var submitEmail = function(evt){
   var thankYouNote = $('#email-header');
   var thankYouNoteForm = $('#email-signup');
   thankYouNoteForm.hide();
   thankYouNote.text("Thanks!")
   setTimeout(hideModal, 2000);
 };

 var emailForm = $('#email-signup');
 emailForm.on('submit', submitEmail)

 $(document).on('keyup', function(evt){
  evt = evt || window.event;

  if (evt.keyCode === 27) {
    hideModal();
  }
});

 $('.navLinks').click(function(evt){
  evt.preventDefault();
  var location = $(this).attr('href');
  $('body').stop().animate({
    scrollTop:$(location).offset().top
  }, 1500, "easeOutCubic");

})


   //**** scroll fade in
   var $animated = $('.animation');
   var $window = $(window);


   function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animated, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);


      var animation = $element.data('animation')
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('animated ' + animation);
    } else {
      $element.removeClass('animated ' + animation);
    }
  });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');


}





