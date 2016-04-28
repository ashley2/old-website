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


 $(window).scroll( function(){
  $('.box').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
      $(this).animate({'opacity':'1'},500);
    }
  }); 
});



}





