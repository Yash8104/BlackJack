
const cards = [

    "A♠","2♠", "3♠" , "4♠", "5♠", "6♠" , "7♠", "8♠","9♠","10♠","J♠","Q♠","K♠",
    "A♣","2♣", "3♣" , "4♣", "5♣", "6♣" , "7♣", "8♣","9♣","10♣","J♣","Q♣","K♣",
    "A♥","2♥","3♥"  , "4♥", "5♥", "6♥",  "7♥", "8♥","9♥","10♥","J♥","Q♥","K♥",
    "A♦","2♦", "3♦" , "4♦", "5♦", "6♦" , "7♦", "8♦","9♦","10♦","J♦","Q♦","K♦",

]

const cards_pixels = {
    "A♠":[0,-95],"2♠":[-69,-95], "3♠":[-138,-95] , "4♠":[-207,-95], "5♠":[-276,-95], "6♠":[-345,-95] , "7♠":[-414,-95], "8♠":[-483,-95],"9♠":[-552,-95],"10♠":[-621,-95],"J♠":[-690,-95],"Q♠":[-759,-95],"K♠":[-828,-95],
    "A♣":[0,-290],"2♣":[-69,-192], "3♣" :[-138,-192], "4♣":[-207,-192], "5♣":[-276,-192], "6♣" :[-345,-192], "7♣":[-414,-192], "8♣":[-483,-192],"9♣":[-552,-192],"10♣":[-621,-192],"J♣":[-690,-192],"Q♣":[-759,-192],"K♣":[-828,-192],
    "A♥":[0,0],"2♥":[-69 , 0],"3♥"  :[-138,0], "4♥":[-207,0], "5♥":[-276,0], "6♥":[-345 , 0],  "7♥":[-414, 0], "8♥":[-483,0],"9♥":[-552,0],"10♥":[-621,0],"J♥":[-690,0],"Q♥":[-759,0],"K♥":[-828,0],
    "A♦":[0,-192],"2♦":[-69,-192], "3♦" :[-138,-192], "4♦":[-207,-192], "5♦":[-276,-192], "6♦" :[-345,-192], "7♦":[-414,-192], "8♦":[-483,-192],"9♦":[-552,-192],"10♦":[-621,-192],"J♦":[-690,-192],"Q♦":[-759,-192],"K♦":[-828,-192],
}

const cards_id = {

    "A♥":"heart-a","2♥":"heart-2","3♥": "heart-3"  , "4♥":"heart-4", "5♥":"heart-5", "6♥":"heart-6",  "7♥":"heart-7", "8♥":"heart-8","9♥":"heart-9","10♥":"heart-10","J♥":"heart-j","Q♥":"heart-q","K♥":"heart-k",
    "A♠":"spade-a","2♠":"spade-2", "3♠":"spade-3" , "4♠":"spade-4", "5♠":"spade-5", "6♠":"spade-6" , "7♠":"spade-7", "8♠":"spade-8","9♠":"spade-9","10♠":"spade-10","J♠":"spade-j","Q♠":"spade-q","K♠":"spade-k",
    "A♦":"diamond-a","2♦":"diamond-2", "3♦":"diamond-3" , "4♦":"diamond-4", "5♦":"diamond-5", "6♦":"diamond-6" , "7♦":"diamond-7", "8♦":"diamond-8","9♦":"diamond-9","10♦":"diamond-10","J♦":"diamond-j","Q♦":"diamond-q","K♦":"diamond-k",
    "A♣":"leaf-a","2♣":"leaf-2", "3♣":"leaf-3" , "4♣":"leaf-4", "5♣":"leaf-5", "6♣":"leaf-6" , "7♣":"leaf-7", "8♣":"leaf-8","9♣":"leaf-9","10♣":"leaf-10","J♣":"leaf-j","Q♣":"leaf-q","K♣":"leaf-k"
}


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
    document.getElementById("restart").style.visibility = "visible";

    console.log("lose lose");
    clear_card_dealer();


    dealer_cards.forEach(element => {

        document.getElementById("dealer-cards-images").appendChild(update_card(element));

    });
    
    // document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_total}`;
    return;
}

function win(){
    document.getElementsByClassName("buttons")[0].disabled = "true";
    document.getElementsByClassName("buttons")[1].disabled = "true";
    document.getElementById("conclusion").innerHTML = "You won!!! WOW YOU'RE THE BEST UWU";
    document.getElementById("conclusion").style.visibility = "visible";
    document.getElementById("restart").style.visibility = "visible";

    console.log("win win");

    clear_card_dealer();


    // document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    dealer_cards.forEach(element => {

        document.getElementById("dealer-cards-images").appendChild(update_card(element));

    });
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
    
    
    // document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards[0]}, ▮`;
    // document.getElementById("your-cards-info").innerHTML = `${player_cards}`;

   document.getElementById("your-cards-images").appendChild(update_card(player_cards[0]));
   document.getElementById("your-cards-images").appendChild(update_card(player_cards[1]));

   document.getElementById("dealer-cards-images").appendChild(update_card(dealer_cards[0]));
//    document.getElementById("dealer-cards-images").appendChild(update_card(dealer_cards[1]));



    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_cards[0][0]}`;
    document.getElementById("your-cards-total").innerHTML = `Your cards: ${player_total}`;



    

}


function return_card_pixels(string){
    var num = cards_pixels[string];
    var return_string = "";
    num.forEach(element => {
        return_string = return_string +element+ "px" + " ";
    });
    console.log(return_string);
    return return_string;
}

function update_card(string){


    // players cards

    var image_elem = document.createElement("img");
    image_elem.setAttribute("src","transparent.png")
    image_elem.setAttribute("height", "1");
    image_elem.setAttribute("width", "1");
    image_elem.style.width = "69px";
//     height: 97px;
    image_elem.style.height = "97px";
    image_elem.style.background = "url(cards.png)" + return_card_pixels(string);
  
    return image_elem;

}

function clear_card_dealer(){
    document.getElementById("dealer-cards-images").innerHTML = "";
}



function hit(){

    

    player_cards.push(pick_random_cards());
    player_total = get_total(player_cards);
    console.log(player_total);
    document.getElementById("your-cards-images").appendChild(update_card(player_cards.slice(-1)));

    // document.getElementById("your-cards-info").innerHTML = `${player_cards}`;

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

        if(dealer_total == 21){
            lose();
            return;
        }else if(dealer_total > 21){
            win();
            return;
        }

        if(dealer_total < player_total){
             win();
            return;
        }else if(player_total < dealer_total){
            lose();
            return;
        }else{
            document.getElementById("conclusion").innerHTML = "Its a draw!";
            document.getElementById("conclusion").style.visibility = "visible";
            document.getElementById("restart").style.visibility = "visible";
            return;
        }

        return;


    } else {
        // draw
        document.getElementById("conclusion").innerHTML = "Its a draw!";
        document.getElementById("conclusion").style.visibility = "visible";
        document.getElementById("restart").style.visibility = "visible";

    }

    
    return;
}


function dealer_hit(){

    dealer_cards.push(pick_random_cards());
    dealer_total = get_total(dealer_cards);

    // document.getElementById("dealer-cards-info").innerHTML = `${dealer_cards}`;
    clear_card_dealer();

    dealer_cards.forEach(element => {

        document.getElementById("dealer-cards-images").appendChild(update_card(element));

    });

    

    document.getElementById("dealer-cards-total").innerHTML = `Dealer's cards: ${dealer_total}`;


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


function reset(){


    location.reload();


}