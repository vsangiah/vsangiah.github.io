
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
$('a[id=jmp]'          ).attr('href','pdfs/research/JMP_petit.pdf');
$('a[id=jmp_slides]'   ).attr('href','pdfs/research/JMP_petit_slides.pdf');
$('a[id=lpw_cepr]'     ).attr('href','https://cepr.org/active/publications/discussion_papers/dp.php?dpno=13398');
$('a[id=lpw_wp]'       ).attr('href','pdfs/research/CostainNakovPetit_draft.pdf');
$('a[id=lpw_slides]'   ).attr('href','pdfs/research/CostainNakovPetit_slides.pdf');

/* Courses ******************************************************************/
$('a[id=macro1]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101118');
$('a[id=macro1w16]'    ).attr('href','pdfs/teaching/teaching_evaluation_macroI_15-16.pdf');
$('a[id=macro1w17]'    ).attr('href','pdfs/teaching/teaching_evaluation_macroI_16-17.pdf');
$('a[id=macro2]'       ).attr('href','https://www.cemfi.es/studies/master/course.asp?c=101114');
$('a[id=quant]'        ).attr('href','https://www.cemfi.es/studies/dsb/index.asp');
$('a[id=quanteval]'    ).attr('href','pdfs/teaching/PETIT_certificado_MSB.pdf');

function ShowHide(elementId){
    var element = document.getElementById(elementId);
    if(element.style.display != "block"){element.style.display = "block";}
    else{element.style.display = "none";}};
    
function UpdateText(element){
    if(element.innerHTML.indexOf("show abstract") != -1){element.innerHTML = "hide abstract";}
    else{element.innerHTML = "show abstract";}};
