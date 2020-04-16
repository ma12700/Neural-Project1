/*global console */
/*
***
*** the input for that network is the input as example P = [[1,2],[3,4]]; P is capital letter and Transpose
*** your task create the weight W1 of the first layer  as W = P
*** and create the Bias B = [R R R]
*** and weight W2 of the second layer W2 = [[1,-e],[-e,1]]; 0 > e < 1/(s-1) and s = P.length
*** the first layer use pure linear and second layer use positive layer
*** train until the output have only one positive value 
*** 
*/
function Hamming(P) {
    var W1 = P,
        R = P[0].length,
        B = [],
        e = (1.0 / (P.length - 1.0)) / 2.0,
        W2 = [],
        a1 = [],
        a2 = [],
        newRow,
        i,j,k,test,z;
    
    for (i = 0; i < P.length; i++){
        B.push([R]);
    }
    for (i = 0; i < P.length; i++){
        newRow = new Array();
        for (j = 0; j < R; j++){
            if (i === j) {
                newRow.push(1.0);
            } else {
                newRow.push(-1.0 * e);
            }
        }
        W2.push(newRow);
    }
    
    P = tranposeMatrix(P);

    for (i = 0; i < P[0].length; i++) {
        a1 = addTwoMatrix(multiplyTwoMatrix(W1,P,i),B);
        z = 0;
        do{
            a2 = transferFunction(multiplyTwoMatrix(W2,a1,0),"poslin");
            a1 = a2;
            console.log("after a2 of " + i + ": " + a2);
            test = 0;
            for(k = 0; k < R; k++){
                if(a2[k][0] > 0){
                    test++;
                    j = k;
                }
            }
            z++;
        }while(test > 1 && z < 15);
        if(z !== 15){
            console.log("output of "+ i + " is: " + j);
        }
         
    }
    
    
    
}