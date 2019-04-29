const input = document.querySelector('input');

document.addEventListener('keydown', logKey);

function logKey(e) {
  
  if(e.code == 'KeyB') {
    var tag = document.querySelector('.batman');
    tag.classList.toggle('active');
    
    console.log('B clicked')
  }
  if (e.code == 'KeyS') {
    var tag = document.querySelector('.spiderman');
    tag.classList.toggle('active');
  
    console.log('S clicked')
  }
  if (e.code == 'KeyI') {
    var tag = document.querySelector('.ironman');
    tag.classList.toggle('active');
  
    console.log('I clicked')
}
  if (e.code == 'KeyT') {
    var tag = document.querySelector('.thor');
    tag.classList.toggle('active');
  
    console.log('T clicked')
}
   if (e.code == 'KeyR') {
    var tag = document.querySelector('.spiderman2');
    tag.classList.toggle('active');
  
    console.log('R clicked')
}
   if (e.code == 'KeyD') {
    var tag = document.querySelector('.thedarkknight');
    tag.classList.toggle('active');
  
    console.log('D clicked')
}
  if (e.code == 'KeyA') {
    var tag = document.querySelector('.avengers');
    tag.classList.toggle('active');
  
    console.log('A clicked')
}
   if (e.code == 'KeyW') {
    var tag = document.querySelector('.wonderwoman');
    tag.classList.toggle('active');
  
    console.log('W clicked')
}
    if (e.code == 'KeyP') {
    var tag = document.querySelector('.spiderman3');
    tag.classList.toggle('active');
  
    console.log('P clicked')
}
}