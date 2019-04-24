
/* Code *********************************************************************/
$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=tocactive]' ).attr('target','_self');

/* Institutions *************************************************************/
$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=nhh]'          ).attr('href','https://www.nhh.no/en/departments/economics/');

/* Profiles ******************************************************************/
$('a[id=ssrn]'         ).attr('href','https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3308699');
$('a[id=google]'       ).attr('href','https://scholar.google.es/citations?user=ySzuvdUAAAAJ&hl=en');
$('a[id=ideas]'        ).attr('href','https://ideas.repec.org/f/ppe880.html');
$('a[id=linkedin]'     ).attr('href','https://www.linkedin.com/in/borjapetit/');

/* People *******************************************************************/
$('a[id=jim]'          ).attr('href','https://sites.google.com/site/jimcostain/');
$('a[id=anton]'        ).attr('href','https://sites.google.com/site/antonnakov/');
$('a[id=josep]'        ).attr('href','https://www.cemfi.es/~pijoan/Welcome.html');
$('a[id=nezih]'        ).attr('href','https://www.cemfi.es/~guner/');
$('a[id=jc]'           ).attr('href','https://www.cemfi.es/studies/phd/ruiz.asp');
$('a[id=javi]'         ).attr('href','https://www.cemfi.es/studies/phd/lopez.asp');

/* Papers *******************************************************************/
$('a[id=childtax]'        ).attr('href','files/pdfs/research/petit_childtax.pdf');
$('a[id=childtax_slides]' ).attr('href','files/pdfs/research/petit_childtax_slides.pdf');
$('a[id=childtax_bib]'    ).attr('href','files/bib/jmp.bib');
$('a[id=lpw_cepr]'        ).attr('href','https://cepr.org/active/publications/discussion_papers/dp.php?dpno=13398');
$('a[id=lpw_bde]'         ).attr('href','https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosTrabajo/19/Fich/dt1910e.pdf');
$('a[id=lpw_wp]'          ).attr('href','files/pdfs/research/CostainNakovPetit_draft.pdf');
$('a[id=lpw_slides]'      ).attr('href','files/pdfs/research/CostainNakovPetit_slides.pdf');
$('a[id=lpw_bib]'         ).attr('href','files/bib/costainnakovpetit2018.bib');
$('a[id=firings]'         ).attr('href','files/pdfs/research/petit_firing.pdf');

/* Courses ******************************************************************/
$('a[id=macro1]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101118');
$('a[id=macro1w16]'    ).attr('href','files/pdfs/teaching/teaching_evaluation_macroI_15-16.pdf');
$('a[id=macro1w17]'    ).attr('href','files/pdfs/teaching/teaching_evaluation_macroI_16-17.pdf');
$('a[id=macro2]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101114');
$('a[id=quant]'        ).attr('href','https://www.cemfi.es/studies/dsb/index.asp');
$('a[id=quanteval]'    ).attr('href','files/pdfs/teaching/PETIT_certificado_MSB.pdf');

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

/*function ShowHide(elementId,element2){
    var element = document.getElementById(elementId);
    if(element.style.display != "block"){element.style.display = "block";}
        else{element.style.display = "none";};
    if(element2.className != "plus"){element2.className = "plus";}
        else{element2.className = "minus";}};*/
