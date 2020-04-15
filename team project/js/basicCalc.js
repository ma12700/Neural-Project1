function addTwoMatrix(arr1 , arr2){
   for (var i=0 ; i<arr1.length ; i++){
       for (var j = 0; j < arr1[0].length; j++){
           arr1[i][j] += arr2[i][j]; 
       }
   }
}

function subTwoMatrix(arr1 , arr2){
    for (var i=0 ; i<arr1.length ; i++){
       for (var j = 0; j < arr1[0].length; j++){
           arr1[i][j] -= arr2[i][j]; 
       }
   }
 }
 
 function multiplyTwoMatrix(matrixA,matrixB){
    var result = new Array();//declare an array   

    //var numColsRows=$("#matrixRC").val();
    var numRows=matrixA.length;
    //matrixA[0].length
    var numCols = matrixB[0].length;
    var kCols = matrixB.length;
    var sum = 0;

    //iterating through first matrix rows
    for (var i = 0; i < numRows; i++) 
    {    
        var matrixRow = new Array();

        //iterating through second matrix columns
        for (var j = 0; j < numCols; j++) 
        { 
            //declare an array
            sum = 0;
          
            //calculating sum of pairwise products
            for (var k = 0; k < kCols; k++) 
            {
                sum += parseInt(matrixA[i][k]) * parseInt(matrixB[k][j]);
            }//for 3

            matrixRow.push(sum);
         
        }//for 2
        //result.push(matrixRow);
        result.push(matrixRow);
    }//for 1
    return result;
 }

 function mulByConst(c , arr){
     for (var i=0 ; i<arr.length ; i++){
         arr[i] *= c;
     }
     return arr;
 }


 function tranposeMatrix(mat){
    for (var i = 0; i < mat.length; i++) { 
        for (var j = 0; j < i; j++) { 
            var tmp = mat[i][j]; 
            mat[i][j] = mat[j][i]; 
            mat[j][i] = tmp; 
        } 
    } 
 }

function transferFunction(fname,n){
    var a = new Array();
    switch(fname){
        case 'hardlim':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] >= 0){
                    a.push(1);
                }else{
                    a.push(0);
                }
            }
            break;
            
        case 'hardlims':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] >= 0){
                    a.push(1);
                }else{
                    a.push(-1);
                }
            }
            break;
            
        case 'purelin':
            a = n;
            break;
            
        case 'satlin':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] < 0){
                    a.push(1);
                }else if(n[i] > 1){
                    a.push(1);
                }else{
                    a.push(n[i]);
                }
            }
            break; 
        
        case 'satlins':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] < -1){
                    a.push(-1);
                }else if(n[i] > 1){
                    a.push(1);
                }else{
                    a.push(n[i]);
                }
            }
            break; 
        
        case 'logsig':
            for(i=0 ; i<= n.length ; i++){
                a.push(1/(1+Math.pow(Math.E,n[i])));
            }
            break; 
        
        case 'tansig':
            for(i=0 ; i<= n.length ; i++){
                a.push((Math.pow(Math.E,n[i]) - Math.pow(Math.E,-1 * n[i])) / (Math.pow(Math.E,n[i]) + Math.pow(Math.E,-1 * n[i])));
            }
            break; 
            
        case 'poslin':
            for(i=0 ; i<= n.length ; i++){
                if(n[i] < 0){
                    a.push(0);
                }else{
                    a.push(n[i]);
                }
            }
            break;
        
    }
    return a;
}