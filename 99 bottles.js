// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// ...
// ...
// ...
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
function NinetynineBottles(){
    for(let i = 99; i >= 0; i--){
        if (i <= 99 && i > 1){
          console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.")
          console.log("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.\n")
        }
        else if(i == 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        else if(i == 1){
            console.log("1 bottle of beer on the wall, 1 bottle of beer.\n Take one down and pass it around, no more bottles of beer on the wall.")
        }
    }
}