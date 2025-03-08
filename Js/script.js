let array = [1,2,"X",8,"XII"]
 

function returnRomanNR(lat romanNR){
    if(romanNR == "I"){
    return 1}
    if(romanNR == "X"){
        return 10 }
        if(romanNR == "L"){
            return 50 }  
            
            return 8888888
}

for(var i = 0; i<=array.length;i++)
    { var test=0
               if(!Number(array[i])){

                for(var j =0;j<=array[i].length;j++){
              test +=  returnRomanNR(array[i][j]);
                }
               if(test == 8888888){
                console.log("Numer i pa kthyeshem")
               }
               }
}