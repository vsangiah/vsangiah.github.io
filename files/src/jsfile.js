
/* Institutions ***************************************************************/

$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=cunef]'        ).attr('href','https://www.cunef.edu/en/');
$('a[id=airef]'        ).attr('href','https://www.airef.es/en/');
$('a[id=ucm]'          ).attr('href','https://economicasyempresariales.ucm.es');

/* People *********************************************************************/

$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=anton]'        ).attr('href','https://sites.google.com/site/antonnakov/');
$('a[id=josep]'        ).attr('href','https://www.cemfi.es/~pijoan/Welcome.html');
$('a[id=nezih]'        ).attr('href','https://www.cemfi.es/~guner/');
$('a[id=jc]'           ).attr('href','https://jcruizgarcia.com/');
$('a[id=javi]'         ).attr('href','https://www.cemfi.es/studies/phd/lopez.asp');
$('a[id=enriquemoral]' ).attr('href','https://moralbenito.weebly.com/');
$('a[id=tonibraun]'    ).attr('href','https://www.frbatlanta.org/research/economists/braun-anton.aspx');

/* Papers *********************************************************************/

$('a[id=fertility_wp]' ).attr('href','files/papers/petit_childtax.pdf');
$('a[id=firing_wp]'    ).attr('href','files/papers/petit_firing.pdf');
$('a[id=firing_code]'  ).attr('href','files/papers/petit_firing_codes.zip');
$('a[id=lpw_wp]'       ).attr('href','files/papers/costainnakovpetit_lpw.pdf');
$('a[id=lpw_cepr]'     ).attr('href','https://cepr.org/active/publications/discussion_papers/dp.php?dpno=13398');
$('a[id=lpw_ecb]'      ).attr('href','https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2272~38362298bc.en.pdf?19821a6f04d4080adbe82c2b99c72e16');
$('a[id=lpw_bde]'      ).attr('href','https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosTrabajo/19/Fich/dt1910e.pdf');

/* Others *********************************************************************/

$('a[id=macro1]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101114');
$('a[id=macro2]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101118');
$('a[id=diplomasuper]' ).attr('href','https://www.cemfi.es/studies/dsb/index.asp');
$('a[id=mastercemfi]'  ).attr('href','https://www.cemfi.es/studies/master/index.asp');

/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=boton]'     ).attr('target','_blank');
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


/******************************************************************************/
