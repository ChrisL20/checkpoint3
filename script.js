'use strict';

$(document).ready(function() {

// Variables
  var data = {
    totalHash:0,
    totalCurrent:0,
    totalCoins: 0
  };

// The time it takes to raise the BTC count
  setInterval(mine,500);

// Updates clicks and the title
  function mine() {
    data.totalHash += data.totalCoins;
    data.totalCurrent += data.totalCoins;
    document.title = ('BTC - ' + data.totalCurrent);
    updateReport();
  };

// This updates hash rate
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#hash").text((data.totalCoins/50).toFixed(1));
  };

  $("#coin").click(function (){
    data.totalHash ++;
    data.totalCurrent ++;
    updateReport();
  });

// The shop's buttons
  $(".button").click(function (){
    var addVal = $(this).data("cost");
    if ($(this).data("cost") < data.totalCurrent) {
      data.totalCurrent -=  parseFloat($(this).data("cost").toPrecision(2));
      data.totalCoins += parseFloat($(this).data("val"));
      $(this).children("span").html( parseInt($(this).children("span").html()*1.3));
      $(this).data("cost", parseInt($(this).data("cost") * 1.3));
    }

  updateReport();
  });

});
