/* global console */
function tranposeMatrix(mat){
     var newRow,
         result = new Array();
    for (var i = 0; i < mat[0].length; i++) { 
        newRow = new Array();
        for (var j = 0; j < mat.length; j++) { 
            newRow.push(mat[j][i]);
        } 
        result.push(newRow);
    }
    return result;
 }

function addTwoMatrix(arr1 , arr2){
    var result = new Array(),
        newRow,i,j;
    
    for (i=0 ; i<arr1.length ; i++){
        newRow = new Array();
       for (j = 0; j < arr1[0].length; j++){
           newRow.push(arr1[i][j] + arr2[i][j]);
       }
        result.push(newRow);
    }
    return result;
}

function subTwoMatrix(arr1 , arr2){
    var result = new Array(),
        newRow,i,j;
    
    for (i=0 ; i<arr2.length ; i++){
        newRow = new Array();
       for (j = 0; j < arr2[0].length; j++){
           newRow.push(arr1[i][j] - arr2[i][j]);
       }
        result.push(newRow);
    }
    return result;
 }
 
 function multiplyTwoMatrix(matrixA,matrixB,z){
    var result = new Array(),
        numRows=matrixA.length,
        numCols = matrixB[0].length,
        kCols = matrixB.length,
        sum = 0,
        j,k;

    for (i = 0; i < numRows; i++) 
    {    
        var matrixRow = new Array();
        if (z !== -1){
             numCols = z+1;
             j = z;
         }else{
             j = 0;
         }
        for (; j < numCols; j++) 
        { 
            sum = 0;
            for (k = 0; k < kCols; k++) 
            {
                sum += parseFloat(matrixA[i][k]) * parseFloat(matrixB[k][j]);
            }
            matrixRow.push(sum);
        }
        result.push(matrixRow);
    }
    return result;
 }


function compare(mat1, mat2 , k) {
    for (var i = 0; i < mat1.length; i++) {
        if (mat1[i][0] != mat2[i][k]) {
            return false;
        }
    }
    return true;
}

function multByConst(e,P,j){
    var result = new Array();
    for(var i=0; i < P.length; i++){
        result.push(e * P[i][j]); 
    }
    return result;
}



function transferFunction(mat1, fname){
    var a = new Array(),i;
   
    switch(fname){
        case 'hardlim':
            for (i = 0; i < mat1.length; i++) {
                if(mat1[i][0] >= 0){
                    a.push([1]);
                }else{
                    a.push([0]);
                }
            }
            break;

        case 'hardlims':
            for(i = 0 ; i < mat1.length ; i++){
                if(mat1[i][0] >= 0){
                    a.push([1]);
                }else{
                    a.push([-1]);
                }
            }
                break;

        case 'purelin':
            for(i = 0 ; i < mat1.length ; i++){
               a.push(mat1[i]); 
            }
            break;

        case 'satlin':
            for(i = 0 ; i < mat1.length ; i++){
                if(mat1[i][0] < 0){
                    a.push([0]);
                }else if(mat1[i][0] > 1){
                    a.push([1]);
                }else{
                    a.push([mat1[i][0]]);
                }
            }
            break; 

        case 'satlins':
            for(i = 0 ; i < mat1.length ; i++){
                if(mat1[i][0] < -1){
                    a.push([-1]);
                }else if(mat1[i][0] > 1){
                    a.push([1]);
                }else{
                    a.push([mat1[i][0]]);
                }
            }
                    
            break; 

        case 'logsig':
            for(i = 0 ; i < mat1.length ; i++){
                a.push([1/(1+Math.pow(Math.E,mat1[i][0]))]);
            }
            break; 

        case 'tansig':
            for(i = 0 ; i < mat1.length ; i++){
                a.push([(Math.pow(Math.E,mat1[i][0]) - Math.pow(Math.E,-1 * mat1[i][0])) / (Math.pow(Math.E,mat1[i][0]) + Math.pow(Math.E,-1 * mat1[i][0]))]);
            }
            break; 

        case 'poslin':
            for(i = 0 ; i < mat1.length ; i++){
                if(mat1[i][0] < 0){
                    a.push([0]);
                }else{
                    a.push([mat1[i][0]]);
                }
            }
                break;

        }

    return a;
}