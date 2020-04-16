/*
***
***first check if the inputs is orthogonals
***then get the Weight frim eq W = T*P be care P is really transpose
***then if T.length is 0 that mean the user didn`t enter the target and the target wiil be T = PTranspose
***then if isBReq(is the bias require) === "Yes" the add 1 at the end of each row in P
***then make testing
*/
function Hebbian(P, T, isBReq, transfer) {
    var test = 0,
        i = 0,
        j = 0,
        e = 0,
        loop = 0,
        PT = [],
        a;
    for(i = 0; i < P.length; i++){
        PT.push(P[i]);
    }
    if(T.length === 0){
        for(i = 0; i < P.length; i++){
            T.push(P[i]);
        }
    }else{
        T = tranposeMatrix(T);
    }
    if(isBReq === "Yes"){
        for(i = 0; i < P.length; i++){
            P[i].push(1);
        }
    }
    P = tranposeMatrix(P);
    
    var W = multiplyTwoMatrix(T,PT,-1),
        B = [];
    if(isBReq === "Yes"){
        var l;
        P = tranposeMatrix(P);
        for(i = 0; i < W.length; i++){
            l = W[0].length - 1;
            B.push([W[i][l]]);
            W[i].pop(l);
            P[i].pop(l);
        }
        P = tranposeMatrix(P);
    }

    i = 0;
    while(loop < 15){
        
        for (j = 0 ; j < PT.length ; j++) {
            if(i == PT.length){
                i = 0;
            }
            if(isBReq === "Yes"){
                a = transferFunction(addTwoMatrix(multiplyTwoMatrix(W,P,i),B), transfer);
            }else{
                a = transferFunction(multiplyTwoMatrix(W,P,i), transfer);
            }
                       
            if (compare(a,T,i)) {
                i++;
                test++;
            }else{
                break;
            }
        }
        
        if(test == PT.length){
            console.log("Done W: " + W + "  B:" + B);
            break;
        }else{
            test = 0;
            console.log("Before W of "+ i+" : " + W + "  B:" + B + "  a:"+a);
            for(var z=0; z < T.length; z++){
                e = T[z][i] - a[z][0];
                W[z] = addTwoMatrix([W[z]],[multByConst(e,P,i)])[0];
                if(isBReq === "Yes"){
                    B[z][0] = B[z][0] + e;
                }
            }
            console.log("after W: " + W + "  B:" + B + "  e:" + e);
        }
        loop++;
    }
}