
/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');

/* Show/Hide functions *********************************************************/

$(document).on("click", "a.plus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideDown('slow');
    $(this).attr('class', 'minus');
});

$(document).on("click", "a.minus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideUp('slow');
    $(this).attr('class', 'plus');
});

$(document).on("click", "a.showmore", function(event){
    event.preventDefault();
    $(this).parent('p').attr('class','abstract2');
    $(this).attr('class','showless');
});

$(document).on("click", "a.showless", function(event){
    event.preventDefault();
    $(this).parent('p').attr('class','abstract');
    $(this).attr('class','showmore');
});

/* Make hide/show elements visible when using a mobile device *****************/

/*
var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    $('.plus').css('display', 'none'); }
    $('.hidden').css('display', 'block'); }
  else{  };
*/

/******************************************************************************/
