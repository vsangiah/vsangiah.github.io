
/* Code ***********************************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');

/* Institutions ***************************************************************/

$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=nhh]'          ).attr('href','https://www.nhh.no/en/departments/economics/');

/* Profiles *******************************************************************/

$('a[id=ssrn]'         ).attr('href','https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3308699');
$('a[id=google]'       ).attr('href','https://scholar.google.es/citations?user=ySzuvdUAAAAJ&hl=en');
$('a[id=ideas]'        ).attr('href','https://ideas.repec.org/f/ppe880.html');
$('a[id=linkedin]'     ).attr('href','https://www.linkedin.com/in/borjapetit/');

/* People *********************************************************************/

$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=anton]'        ).attr('href','https://sites.google.com/site/antonnakov/');
$('a[id=josep]'        ).attr('href','https://www.cemfi.es/~pijoan/Welcome.html');
$('a[id=nezih]'        ).attr('href','https://www.cemfi.es/~guner/');
$('a[id=jc]'           ).attr('href','https://www.cemfi.es/studies/phd/ruiz.asp');
$('a[id=javi]'         ).attr('href','https://www.cemfi.es/studies/phd/lopez.asp');

/* Code ***********************************************************************/

$(document).on("click", "a.plus", function(event){
    event.preventDefault();
    $(this).parent('div,p,li').next('.hidden').slideDown();
    $(this).attr('class', 'minus');
});

$(document).on("click", "a.minus", function(event){
    event.preventDefault();
    $(this).parent('div,p,li').next('.hidden').slideUp();
    $(this).attr('class', 'plus');
});

/*function ShowHide(elementId){
  var element = document.getElementById(elementId);
  if(element.style.display != "block"){element.style.display = "block";}
    else{element.style.display = "none";};}
  if(element2.className != "plus"){element2.className = "plus";}
    else{element2.className = "minus";}
  };*/








/******************************************************************************/
