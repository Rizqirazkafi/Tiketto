$(document).ready(() => {
    $(document.body).on('click', '.card[data-clickable=true]', (e) => {
      var href = $(e.currentTarget).data('href');
      window.location = href;
    });
  });

$("#inc").click(function(){
  let number = getCurrentNumber();
  let newNumber = number+1;
  setNewNumber(newNumber);
});
$("#dec").click(function(){
  let number = getCurrentNumber();
  let newNumber = number-1;
  setNewNumber(newNumber);
});

function getCurrentNumber(){
 let number_str = $("#order-val").text();
 number_num = Number(number_str);
 return number_num;
}

function setNewNumber(number){
  $("#order-val").text(number);
}