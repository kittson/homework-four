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
var message = "Choose Your Player";

function findPlayer ( theId){
    switch (theId){    
    case 'tommy': 
    console.log("got tommy");
    return theId;
    break;
    case 'sister': 
    console.log("got sister");
    return theId;
    break;
    case 'mushroom': 
    console.log("got mushroom");
    return theId;
    break;
    case 'wrapper': 
    console.log("got wrapper");
    return theId;
    break;
}
}
$('.theGroup').on('click', function(e) {
    console.log(this.id); //the id of element that was clicked on
  //but also the property name of the chars object.
  
  $("#char-info").html(characters[this.id].href);
  console.log(this);

  inPlayPlayer = findPlayer(this.id);
  console.log("in play player " + inPlayPlayer);
  
});
$('.btn').on('click', function() {
});
/*
switch (this.id){    
    case 'tommy': 
    console.log("got tommy");
    break;
    case 'sister': 
    console.log("got sister");
    break;
    case 'mushroom': 
    console.log("got mushroom");
    break;
    case 'wrapper': 
    console.log("got wrapper");
    break;
}
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



