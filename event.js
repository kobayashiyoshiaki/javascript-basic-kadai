const changeText = document.getElementById('text');
const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', ()=>{
  setTimeout(()=>{
    changeText.textContent = 'クリックされました。'
  }, 2000);
});