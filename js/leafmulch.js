$(document).ready(function(){

    var characters = {
        tommy: {
            healthPoints: 100,
            attackPow: 100,
            counterPow: 100                   
        },
        sister: {
            healthPoints: 100,
            attackPow: 300,
            counterPow: 100           
        },
        wrapper: {
            healthPoints: 100,
            attackPow: 200,
            counterPow: 100           
        },
        mushroom: {
            healthPoints: 100,
            attackPow: 150,
            counterPow: 100          
        }
    };

    var playerCount = 0;
    var message = "Choose Your Player!";
    var tommyString = "Tommy Reiner and his Friends";
    function findPlayer ( theId){


        switch (theId){    
            case 'tommy': 
            
            $(theId).removeClass("player-up");
            console.log("tommy's id is " + theId);
            //$(theId).addClass("player-down");
            //$(theId).addClass("player-down");
            $(theId).appendTo("player-down");
            return theId;

            case 'sister': 
            console.log("got sister");
            return theId;
            case 'mushroom': 
            console.log("got mushroom");
            return theId;
            case 'wrapper': 
            console.log("got wrapper");
            return theId;

    };//switch
}

$('.players-message').text(message);

$('.theGroup').on('click', function(e) {
    console.log(this.id); //the id of element that was clicked on
  //but also the property name of the chars object.
  
  $("#char-info").html(characters[this.id].href);
  console.log(this);
  if (playerCount === 0) {
      firstPlayPlayer = findPlayer(this.id);
      console.log("in play player 1 " + firstPlayPlayer);
      playerCount = 1;
      message = "Choose your Mulching Opponent!"
      $('.players-message').text(message);
      console.log("tommy's id is " + this.id);
      console.log("tommy's id is " + this.id);
  }
  else if (playerCount === 1) {
    secondPlayPlayer = findPlayer(this.id);
      console.log("in play player 2 " + secondPlayPlayer);
      playerCount = 55;
      message = "Get Mulching!"
      $('.players-message').text(message);
  }
});
$('.btn').on('click', function() {

});

/*

$('#player').on('click', function() {    
        var characterBoxId = this.id;
        console.log("characterBoxId " + characterBoxId);
        console.log("characterBoxId with power " + players[characterBoxId]);
        console.log("this with $ " + $(this));
        console.log("this alone " + (this));
$('.status-message').text(message);
$('#player').on('click', function() {    
        var characterBoxId = this.id;
        console.log("charbox alone " + players);
        console.log("the this " + $(this));
        console.log(" this " + (this));
        console.log("charbox from players " + players[characterBoxId]);
        console.log(this);            
    if ( playerCount === 0) {                    
        playerCount = 1;
        console.log("player set to " + playerCount);
        message = "Choose your Mulching Foe!";
        $('.status-message').text(message);
        $(".player-up").animate({top:"-=200px"}, "normal");
    }
    else if ( playerCount === 1) {
        message = "Get Ready to Mulch!";
        $('.status-message').text(message);
    }
}) */

   // $('#tommy').on('click', function() {    
    //    var characterBoxId = this.id;
    //    console.log(players[characterBoxId].attackPow)        
   // })


//$('.btn').on('click', function() {
    //console.log($(this).attr("value"));   
//});



});



