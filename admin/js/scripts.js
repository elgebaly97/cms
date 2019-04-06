$(document).raedy(function(){
    
    ClassicEditor
        .create( document.querySelector( '#body' ) )
        .catch( error => {
            console.error( error );
        } );
    
    
    
});





/* jQuery.noConflict()(function ($) { // this was missing for me
    $(document).ready(function() { 

      alert('hello');

    });
});
*/





$(document).ready(function(){
    
     alert('hello');
    
});
