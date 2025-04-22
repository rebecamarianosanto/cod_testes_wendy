var counter1 = document.getElementById('counter1');
var counter2 = document.getElementById('counter2');

function increment(i, max, element){
  if(i > max) return;
  setTimeout(function(){
    element.innerText = Math.round(i);
    increment(i+(max/100), max, element);
  },10)
}

increment(0,10, counter1 );
increment(0,2000, counter2 );
increment(0,300, counter3 );