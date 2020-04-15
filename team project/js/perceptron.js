function Perceptron(P, T, W, B){
    var test = 0;
    var i = 0,e=0,a;
    while(true){
        
        for(var j = 0 ; j < P.length ; j++){
            if(i == P.length){
                i = 0;
            }
            
            a=(multiplyMatrix(w,p[i]) + b);
            
            if( compare(a,t[i])){
                i++;
                test = test + 1;
            }else{
                break;
            }
        }
        
        if(test == p.length){
            break;
        }else{
            test = 0;
            e = subTwoArray(t[i],a);
            w = addTwoArray(w,multiplyMatrix(e,p[i]));
            b = addTwoArray(b,e);
        }
    }
}
