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
function perceptron (P) {
    var W1 = P,
        R = P[0].length,
        B = new Array(),
        e = (1 / (P.length - 1)) / 2,
        W2 = new Array(),
        newRow,
        i,j;
    for (i = 1; i <= P.length; i++){
        B.push(R);
    }
    for (i = 1; i <= P.length; i++){
        newRow = new Array();
        for (j = 1; j <= R; j++){
            if (i === j) {
                newRow.push(1);
            } else {
                newRow.push(-1 * e);
            }
        }
    }
    
    /*
    ***
    ***start learning from here
    ***
    */
}