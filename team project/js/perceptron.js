/* global console */
function Perceptron(P, T, W, B, transfer){
    var test = 0,
        i = 0,
        j = 0,
        e = 0,
        loop = 0,
        newRow,
        a;
    
    if (W.length === 0) {
        for (i = 0; i < T.length; i++) {
            newRow = new Array();
            for (j = 0; j < P[0].length; j++){
                if((P[0][j] * T[0][j]) >= 0) {
                    newRow.push(1);
                } else {
                    newRow.push(-1);
                }
            }
            W.push(newRow);
        }
    }
    if (B.length === 0) {
        newRow = new Array();
        for (i = 0; i < T.length; i++) {
            newRow.push(0);
        }
        B.push(newRow);
    }
    
    P = tranposeMatrix(P);
    B = tranposeMatrix(B);
    T = tranposeMatrix(T);
    i = 0;
    console.log("  P:" + P );
    while(loop < 15){
        
        for (j = 0 ; j < P.length ; j++) {
            if(i == P.length){
                i = 0;
            }
            a = transferFunction(addTwoMatrix(multiplyTwoMatrix(W,P,i),B), transfer);
            
            if (compare(a,T,i)) {
                i++;
                test++;
            }else{
                break;
            }
        }
        
        if(test == P.length){
            console.log("Done W: " + W + "  B:" + B);
            break;
        }else{
            test = 0;
            console.log("Before W: " + W + "  B:" + B + "  a:"+a);
            for(var z=0; z < T.length; z++){
                e = T[z][i] - a[z][0];
                W[z] = addTwoMatrix([W[z]],[multByConst(e,P,i)])[0];
                B[z][0] = B[z][0] + e;
            }
            console.log("after W: " + W + "  B:" + B + "  e:" + e);
        }
        loop++;
    }
}