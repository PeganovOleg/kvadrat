const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;
let Promah=0;

function round() {


$('.target').removeClass('target');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  $(divSelector).addClass("target");
   $(divSelector).text(hits + 1)
  // TODO: помечать target текущим номером

  if (hits===1) 
  { 
    firstHitTime = getTimestamp(); 
  }
  
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  
  $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
   console.log(totalPlayedMillis);
  let totalPlayedSeconds = Number(totalPlayedMillis/1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#promah-played").text(Promah);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
 
  if ($(event.target).hasClass("target")) { 
    hits = hits + 1;
      $('.target').text('');
    round();
  }
  else { $(event.target).addClass('miss'); Promah=Promah+1;$('.target').text('');round();}

}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
