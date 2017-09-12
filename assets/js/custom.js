jQuery(document).ready(function($){

  // sidebar animate
    var hasChildren= $('.has-children');
    hasChildren.each(function(){
        $(this).on('change', 'input[type="checkbox"]', function(){
            var checkbox = $(this);
            console.log(checkbox.prop('checked'));
            ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
        });
    });

});