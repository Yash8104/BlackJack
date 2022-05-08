
var cards = [

    "A♠","2♠", "3♠" , "4♠", "5♠", "6♠" , "7♠", "8♠","9♠","10♠","J♠","Q♠","K♠",
    "A♣","2♣", "3♣" , "4♣", "5♣", "6♣" , "7♣", "8♣","9♣","10♣","J♣","Q♣","K♣",
    "A♥","2♥","3♥"  , "4♥", "5♥", "6♥",  "7♥", "8♥","9♥","10♥","J♥","Q♥","K♥",
    "A♦","2♦", "3♦" , "4♦", "5♦", "6♦" , "7♦", "8♦","9♦","10♦","J♦","Q♦","K♦",

]

var player_cards = [];
var dealer_cards = [];

var player_total = 0;
var dealer_total = 0;

function play(){

    document.getElementById("main-content").style.display="block";
    document.getElementById("play-button").style.display="none";
    gamee();
}

function lose(){

    document.getElementsByClassName("buttons")[0].disabled = "true";
    document.getElementsByClassName("buttons")[1].disabled = "true";
    document.getElementById("conclusion").innerHTML = "You lost! LMAO YOU SUCK SO BAD AHAHHAHA";
    document.getElementById("conclusion").style.visibility = "visible";
    console.log("lose lose");

    document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_total}`;
    return;
}

function win(){
    document.getElementsByClassName("buttons")[0].disabled = "true";
    document.getElementsByClassName("buttons")[1].disabled = "true";
    document.getElementById("conclusion").innerHTML = "You won!!! WOW YOU'RE THE BEST UWU";
    document.getElementById("conclusion").style.visibility = "visible";
    console.log("win win");

    document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_total}`;
    return;
}

function gamee(){

    player_cards.push(pick_random_cards());
    player_cards.push(pick_random_cards());

    dealer_cards.push(pick_random_cards());
    dealer_cards.push(pick_random_cards());

    console.log(dealer_cards);

    player_total = get_total(player_cards);
    dealer_total = get_total(dealer_cards);
    
    
    document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards[0]}, ▮`;
    document.getElementById("your-cards-info").innerHTML = `${player_cards}`;

    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_cards[0][0]}`;
    document.getElementById("your-cards-total").innerHTML = `Your cards: ${player_total}`;


    

}

function hit(){

    player_cards.push(pick_random_cards());
    player_total = get_total(player_cards);
    console.log(player_total);

    document.getElementById("your-cards-info").innerHTML = `${player_cards}`;
    document.getElementById("your-cards-total").innerHTML = `Your cards: ${player_total}`;


    if(player_total == 21){
        win();
        return;
    }else if(player_total > 21){
        lose();
        return;
    }

    return;
}

function stand(){

    document.getElementsByClassName("buttons")[0].disabled = "true";
    document.getElementsByClassName("buttons")[1].disabled = "true";

    if(player_total < dealer_total){
        lose();
        return;

    }else if(player_total > dealer_total){


        while(dealer_total <= 17){
            dealer_hit();
            console.log(dealer_total);
        }

        win();
        return;


    }else{
        // draw
        document.getElementById("conclusion").innerHTML = "Its a draw!";
        document.getElementById("conclusion").style.visibility = "visible";
    }

    
    return;
}


function dealer_hit(){

    dealer_cards.push(pick_random_cards());
    dealer_total = get_total(dealer_cards);

    document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_total}`;

    if(dealer_total == 21){
        lose();
        return;
    }else if(dealer_total > 21){
        win();
        return;
    }


}





function get_total(array){

    var totalamt=0;

        for (var i=0;i< array.length;i++){

            var string = array[i];

            if(string[0] == "A"){
                totalamt = totalamt + 1;
                continue;
            }else if(string[0] == "J" || string[0] == "Q" || string[0] == "K"){
                totalamt = totalamt + 10;
                continue;
            }else{
            totalamt = totalamt + Number(string[0]);
            }
        }


        // array.forEach(string => {
            

        // });

    

    return totalamt;

}


function pick_random_cards(){

    var random_num = Math.floor(Math.random() * cards.length);

    return cards[random_num];

}