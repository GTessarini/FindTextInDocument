const findTextInDocument = (function() {

  const _classTxtFoundInSearch = 'txt-found-in-search';
  const _idQueryField = 'query';

  let _foundTxtPosition = 0;

  function _clearHighlights() {
    document
      .querySelectorAll('.' + _classTxtFoundInSearch)
      .forEach(el =>
        el.classList.remove(_classTxtFoundInSearch);
      );
  }

  function _handleFind({ position }) {
    const query = document.getElementById(_idQueryField).value;

    if(!query || !query.length) {
      return false;
    }

    let elFound = [];

    document.body
      .querySelectorAll('*:not(script)')
      .forEach(el => {
        if(el.textContent.includes(query)) {
          elFound.push(el);
        }
      })

    _foundTxtPosition = _foundTxtPosition + position;

    if(!elFound.length
      || elFound[_foundTxtPosition - 1] >= elFound.length) {
      return false;
    }

    elFound = elFound[_foundTxtPosition];

    if(!elFound) {
      _foundTxtPosition = _foundTxtPosition - position;

    } else {
      _clearHighlights();
      if(elFound) {
        elFound.classList.add(_classTxtFoundInSearch);
        window.scrollTo(0, elFound.offsetTop);
      }
    }

    return true;
  }

  function find(settings) {
    if(!_handleFind(settings)) {
      _clearHighlights();
    }
  }

  return {
    find
  };

}());
