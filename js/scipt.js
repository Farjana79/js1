$(document).ready(function(){
    $( "#dragg" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
    $( "#dragg2" ).draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
    $( "#dragg3" ).draggable({ cursorAt: { bottom: 0 } });



});


$(document).ready(function(){
    
    $( "#drag, #non-dragg" ).draggable();
    $( "#dropp" ).droppable({
      accept: "#drag",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });


});



$(document).ready(function(){
    
    $( "#numberShort" ).sortable();
    $( "#numberShort" ).disableSelection();

});
$(document).ready(function(){
    
    $( "#accordion" ).accordion({
        collapsible: true
      });

});


$(document).ready(function(){
    
    var data = [ 'html', 'css', 'php', 'python', 'bootstrap', 'javascript', 'jquery', 'c++'];
    $( "#formId" ).autocomplete({
        source:data
    });

});





$(document).ready(function(){
    
   var n = new Date
    $("#datePicker").datepicker(n);
    console.log(n)
});





