function updateHTML() {
  const divElem = document.querySelector('div');
  const buttonElem = document.querySelector('.js-roll-button');

  let history = JSON.parse(localStorage.getItem('history')) || [];

  buttonElem.addEventListener('click', () => {
    divElem.classList.add('animation');

    let totalHistory = '';

    setTimeout(() => {
      divElem.classList.remove('animation');
      
      const result = totalResult();
      divElem.innerHTML = result;
      
      history.push(result);

      history.forEach((history, index) => {
        totalHistory += `<li>Roll ${index + 1}: <span>${history}</span></li>`;
      });

      const ulElem = document.querySelector('ul').innerHTML = totalHistory;
    }, 1000);

    localStorage.setItem('history', JSON.stringify(history));
  });

  function totalResult() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const section = document.querySelector('main section');
    console.log(section);
    let result;
    if (randomNumber === 1) {
      result  = '&#9856;';
    } else if (randomNumber === 2) {
      result  = '&#9857'; 
    } else if (randomNumber === 3) {
      result  = '&#9858';
    } else if (randomNumber === 4) {
      result  = '&#9859';
    } else if (randomNumber === 5) {
      result  = '&#9860';
    } else if (randomNumber === 6) {
      result  = '&#9861';
      section.style.transition = 'all 1s';
      section.style.transform = 'translateY(645px)';
    }

    return result;
  }

  document.querySelector('.js-clear-history-button')
    .addEventListener('click', () => {
      history = []
      localStorage.removeItem('history');
      const ulElem = document.querySelector('ul')
        .innerHTML = '';
    });
}

updateHTML();