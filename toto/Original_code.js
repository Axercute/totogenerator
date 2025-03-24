let max_toto = 49;
let min_toto = 1;
let input_toto;
let input_quantity;;


let final = [];


function generateToto(input_toto){
    let new_number_toto = []; //creating a new array for toto
    while(new_number_toto.length<input_toto){ //keep generating until toto.length
    let random=Math.floor((Math.random()*max_toto)+min_toto); //generate a random number between 1-49
    if(!new_number_toto.includes(random)){ //if toto generated repeated number
    new_number_toto.push(random) //adding the new number in the toto array
}
}
return new_number_toto.sort((elementA,elementB)=>{return elementA-elementB})
}

for(let i=0;i<input_quantity;i++){
final.push(generateToto(input_toto))
}
console.log(final)
