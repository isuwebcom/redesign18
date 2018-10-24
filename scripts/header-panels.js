$(document).ready(function() {
    $('.quicklinks').click(function() {
            $('#quick-panel').slideToggle("fast");
            $('#search-panel').hide();
    });

    $('.isusearch').click(function() {
            $('#search-panel').slideToggle("fast");
            $('#quick-panel').hide();
    });
    $('body').click(function(event){
        let jqueryEle = $(event.target);
        
        // if we clicked outside panels and not on button
        if(! (jqueryEle.parents('#quick-panel').length > 0 ||
              jqueryEle.parents('#search-panel').length > 0) &&
             !jqueryEle.hasClass('panel-trigger'))
        {
            if($('#quick-panel').is(':visible')){
                $('#quick-panel').slideToggle("fast");
            }
            if($('#search-panel').is(':visible')){
                $('#search-panel').slideToggle("fast");
            }
        }
    
    });
});