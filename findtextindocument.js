let foundTxtPosition = 0;
const classTxtFoundInSearch = 'txt-found-in-search';
const findInDocument = (positionSelection) => {
  const positionToFind = positionSelection.position;
  let txt = document.querySelector('#txt-to-find').value;
  const cleanFind = () => {
    $("*").removeClass(classTxtFoundInSearch);
  } 
  if(txt.trim() == ""){  
    cleanFind();
    return;
  }     
  let $txtElement =  $(`p:contains('${txt}'), span:contains('${txt}')`);
  foundTxtPosition = foundTxtPosition + (positionToFind);
  if(foundTxtPosition == 0 || !$txtElement.length || $txtElement[foundTxtPosition - 1] >= $txtElement.length){
    cleanFind();
  }
  $txtElement = $txtElement[foundTxtPosition];
  if(typeof($txtElement) === "undefined"){     
    foundTxtPosition = foundTxtPosition - (positionToFind);
  }else{
    cleanFind();
    $($txtElement).addClass(classTxtFoundInSearch);
    if($($txtElement).length){
      let txtElementTopPosition = $($txtElement).offset().top;
      window.scrollTo(0, txtElementTopPosition);  
    }
  }
}
/* Gabriel Tessarini */
