'use strict';


$(document).ready(init);

function init() {

 

//modal controls:
  var modalContainer = $('#modal-container'); //modal container in doc
    
    var hideModal = function() {  //function to hide the modal
      modalContainer.hide();
    };
     
    var showModal = function() { //function to show the modal
      modalContainer.show();
    };

    var showModalButton = $('#modal-show');//gets modal button element
    (showModalButton).on('click', showModal) //event listener to open button on click

    var closeModalButton = $('#modal-hide'); //gets the modal button to close
     closeModalButton.on('click', hideModal); //event of clicking to close modal on button

//change note to a thank you
    var submitEmail = function(evt){
      evt.preventDefault();


     var thankYouNote = $('#email-header'); //get the form field to replace text
    
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

    //******ADD WHEN THE X IS CLIcKED TO change back the note. use jquery

//setting the clock
  // setInterval(function(){
  //   var currentTime = new Date();
  //   var hours = currentTime.getHours();
  //   var minutes = currentTime.getMinutes();
  //   var seconds = currentTime.getSeconds();

  //   if (hours < 12) {
  //     hours = hours - 12;
  //   }

  //   if (minutes < 10) {
  //     minutes = "0" + String(minutes);
  //   } 

  //   if (seconds < 10) {
  //   seconds = "0" + String(seconds);
  // }

  //   if (hours <= 11) {
  //     var timePeriod = " AM"
  //   } else {
  //     var timePeriod = " PM"
  //   }

  //   var clockTime = hours + ":" + minutes + ':' + seconds + timePeriod;

  //   var time = $("#clock");


  //   time.text(clockTime);
  // }, 1000);

}





