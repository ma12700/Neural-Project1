/*global window,document,alert */
//P, W, T, B, N, A

window.onload = function () {
    'use strict';
    var initW, requB, initB, type, flag, i, j, val,
        basicNext = document.getElementById("basicNext"),
        perceptron = document.getElementById("perc"),
        basic = document.getElementById("basic"),
        bias = document.querySelectorAll('input[name="thereBias"]'),
        thereInitBias = document.getElementById("thereInitBias"),
        backToBasic = document.getElementById("backToBasic"),
        NextInput = document.getElementById("NextInput"),
        backToPrec = document.getElementById("backToPrec"),
        percInput = document.getElementById("percInput"),
        numP = document.getElementById("numP"),
        R = document.getElementById("R"),
        putPercInput = document.getElementById("putPercInput"),
        numT = document.getElementById("numT"),
        hammingInput = document.getElementById("hammingInput"),
        putHammingInput = document.getElementById("putHammingInput"),
        hammTobasic = document.getElementById("hammTobasic"),
        hebb = document.getElementById("hebb"),
        thereTargetHebb = document.querySelectorAll('input[name="thereTargetHebb"]'),
        TargetHebb = document.getElementById("TargetHebb"),
        hebbTobasic = document.getElementById("hebbTobasic"),
        nexthHebb = document.getElementById("nexthHebb"),
        hebbInput = document.getElementById("hebbInput"),
        putHebbInput = document.getElementById("putHebbInput"),
        numTHebb = document.getElementById("numTHebb"),
        backToHebb = document.getElementById("backToHebb"),
        finishPer = document.getElementById("finish"),
        finishHamming = document.getElementById("finishHamming"),
        finishHebb = document.getElementById("finishHebb");
    
/************************* Next Buttons ************************************/
    
    basicNext.onclick = function () {
        flag = 0;
        type = document.querySelector('input[name="type"]:checked');
        var numPerror = document.getElementById("numPerror"),
            Rerror = document.getElementById("Rerror");
        numPerror.className = "hide";
        Rerror.className = "hide";
        
        if (numP.value === "" || numP.value < 2 || numP.value > 10) {
            flag = 1;
            numPerror.className = "error";
        }
        if (R.value === "" || R.value < 2 || R.value > 10) {
            flag = 1;
            Rerror.className = "error";
        }
        if (flag === 0) {
            if (type.value === "Perceptron") {
                basic.className = "none";
                perceptron.className = "";
            } else if (type.value === "Hamming") {
                basic.className = "none";
                hammingInput.className = "";
                var html = "<label>Inputs</label>\n";
                for (i = 1; i <= numP.value; i = i + 1) {
                    html += "<article>\n <span>P" + i + "</span>\n";
                    for (j = 1; j <= R.value; j = j + 1) {
                        html += "<input type='number' id='HamP" + i + "" + j + "' value='0'>\n";
                    }
                    html += "</article>\n";
                }
                putHammingInput.innerHTML = html;
            } else {
                basic.className = "none";
                hebb.className = "";
            }
        }
        
    };
    
    
    NextInput.onclick = function () {
        initW = document.querySelector('input[name="thereWeight"]:checked').value;
        requB = document.querySelector('input[name="thereBias"]:checked').value;
        initB = document.querySelector('input[name="thereInitBias"]:checked').value;
        var numTerror = document.getElementById("numTerror");
        
        numTerror.className = "hide";
        if (numT.value === "" || numT.value < 1 || numT.value > 4) {
            numTerror.className = "error";
        } else {
            var html = "<label>Inputs &amp; Targets</label>\n";
            for (i = 1; i <= numP.value; i++) {
                html += "<article>\n <span>P" + i + "</span>\n";
                for (j = 1; j <= R.value; j++) {
                    html += "<input type='number' id='PerP" + i + "" + j + "' value='0'>\n";
                }
                html += "<span class='target'>T" + i + "</span>\n";
                for (j = 1; j <= numT.value; j++) {
                    html += "<input type='number' id='PerT" + i + "" + j + "' value='0'>\n";
                }
                html += "</article>\n";
            }
            if (initW === "Yes") {
                html += "<label>Initial Weight</label>\n";
                for (i = 1; i <= numT.value; i++) {
                    html += "<article>\n <span>W" + i + "</span>\n";
                    for (j = 1; j <= R.value; j++) {
                        html += "<input type='number' id='PerW" + i + "" + j + "' value='0'>\n";
                    }
                    html += "</article>\n";
                }
            }
            if (requB === "Yes") {
                if (initB === "Yes") {
                    html += "<label>Initial Bias</label>\n";
                    html += "<article>\n <span>B</span>\n";
                    for (j = 1; j <= numT.value; j++) {
                        html += "<input type='number' id='PerB" + j + "' value='0'>\n";
                    }
                    html += "</article>\n";
                }
            }
            putPercInput.innerHTML = html;
            perceptron.className = "none";
            percInput.className = "";
        }
    };
    
    nexthHebb.onclick = function () {
        var numTHebberror = document.getElementById("numTHebberror");
        numTHebberror.textContent = "It must be between 1 and " + R.value;
        numTHebberror.className = "hide";
        
        if (numTHebb.value === "" || numTHebb.value < 1 || parseInt(numTHebb.value) > parseInt(R.value)) {
            numTHebberror.className = "error";
        } else {
            hebb.className = "none";
            hebbInput.className = "";
            var thereTargetHebb = document.querySelector('input[name="thereTargetHebb"]:checked').value,
                html = "<label>Inputs &amp; Targets</label>\n";
            for (i = 1; i <= numP.value; i++) {
                html += "<article>\n <span>P" + i + "</span>\n";
                for (j = 1; j <= R.value; j++) {
                    html += "<input type='number' id='HebP" + i + "" + j + "' value='0'>\n";
                }
                if (thereTargetHebb === "Yes") {
                    html += "<span class='target'>T" + i + "</span>\n";
                    for (j = 1; j <= numTHebb.value; j++) {
                        html += "<input type='number' id='HebT" + i + "" + j + "' value='0'>\n";
                    }
                }
                html += "</article>\n";
            }
            putHebbInput.innerHTML = html;
        }
        
    };
    
/************************* Back Buttons ************************************/
    
    backToBasic.onclick = function () {
        basic.className = "";
        perceptron.className = "none";
    };
    
    hammTobasic.onclick = function () {
        basic.className = "";
        hammingInput.className = "none";
    };
    
    backToPrec.onclick = function () {
        percInput.className = "none";
        perceptron.className = "";
    };
    
    hebbTobasic.onclick = function () {
        hebb.className = "none";
        basic.className = "";
    };
    
    backToHebb.onclick = function () {
        hebb.className = "";
        hebbInput.className = "none";
    };


/************************* finish Buttons ************************************/
    
    finishPer.onclick = function () {
        var P = new Array(),
            T = new Array(),
            W = new Array(),
            B = new Array(),
            tranfer = document.querySelector("select[name='Transfer']").value,
            errorPer = document.getElementById("errorPer"),
            newRow;
        
        errorPer.className = "hide";
        flag = 0;
        
        for (i = 1; i <= numP.value; i++) {
            newRow = new Array();
            for (j = 1; j<= R.value; j++) {
                val = document.getElementById("PerP" + i + "" + j).value;
                if (val  === "") {
                    flag = 1;
                    break;
                } else {
                    newRow.push(parseFloat(val));
                }
            }
            if (flag === 1){
                break;
            }
            P.push(newRow);
        }
        if (flag === 0) {
            for (i = 1; i <= numP.value; i++) {
                newRow = new Array();
                for (j = 1; j<= numT.value; j++) {
                    val = document.getElementById("PerT" + i + "" + j).value;
                    if (val === "") {
                        flag = 1;
                        break;
                    } else {
                        newRow.push(parseInt(val));
                    }
                }
                if (flag === 1){
                    break;
                }
                T.push(newRow);
            }
        }
        if (flag === 0){
            if (initW === "Yes") {
                for (i = 1; i <= numT.value; i++) {
                    newRow = new Array();
                    for (j = 1; j <= R.value; j++) {
                        val = document.getElementById("PerW" + i + "" + j).value;
                        if (val === "") {
                            flag = 1;
                            break;
                        } else {
                            newRow.push(parseFloat(val));
                        }
                    }
                    if (flag === 1){
                        break;
                    }
                    W.push(newRow);
                }
            }
        }
        if (flag === 0){
            if (requB === "Yes") {
                if (initB === "Yes") {
                    newRow = new Array();
                    for (j = 1; j <= numT.value; j++) {
                        val = document.getElementById("PerB" + j).value;
                        if (val === "") {
                            flag = 1;
                            break;
                        } else {
                            newRow.push(parseFloat(val));
                        }
                    }
                    if (flag === 0){
                        B.push(newRow);
                    }
                }
            }
        } 
        if (flag === 0){
            Perceptron(P, T, W, B, tranfer);
        } else {
            errorPer.className = "error";
        }
    };
    
    finishHamming.onclick = function () {
        var P = new Array(),
            errorHam = document.getElementById("errorHam"),
            newRow;
        
        errorHam.className = "hide";
        flag = 0;
        for (i = 1; i <= numP.value; i++) {
            newRow = new Array();
            for (j = 1; j<= R.value; j++) {
                val = document.getElementById("HamP" + i + "" + j).value;
                if (val === "") {
                    flag = 1;
                    break;
                } else {
                    newRow.push(parseFloat(val));
                }
            }
            if (flag === 1) {
                break;
            }
            P.push(newRow);
        }
        if (flag === 0) {
            Hamming(P);
        } else {
            errorHam.className = "error";
        }
        
    };
    
    finishHebb.onclick = function () {
        var P = new Array(),
            T = new Array(),
            //tranfer = document.querySelector("select[name='TransferHebb']").value,
            errorHeb = document.getElementById("errorHeb"),
            newRow;
        
        errorHeb.className = "hide";
        flag = 0;
        for (i = 1; i <= numP.value; i++) {
            newRow = new Array();
            for (j = 1; j<= R.value; j++) {
                val = document.getElementById("HebP" + i + "" + j).value;
                if (val  === "") {
                    flag = 1;
                    break;
                } else {
                    newRow.push(parseFloat(val));
                }
            }
            if (flag === 1){
                break;
            }
            P.push(newRow);
        }
        if (flag === 0) {
            if (thereTargetHebb === "Yes") {
                for (i = 1; i <= numP.value; i++) {
                    newRow = new Array();
                    for (j = 1; j<= numTHebb.value; j++) {
                        val = document.getElementById("HebT" + i + "" + j).value;
                        if (val === "") {
                            flag = 1;
                            break;
                        } else {
                            newRow.push(parseInt(val));
                        }
                    }
                    T.push(newRow);
                }
            }
        }
        if (flag === 0) {
            //var thereBiasHebb = document.querySelector('input[name="thereBiasHebb"]:checked').value;
            if(type.value === "Hebbian"){
                //Hebbian(P , T, thereBiasHebb, tranfer);
            } else {
                //Pseudoinverse(P, T , thereBiasHebb, tranfer);
            }
        } else {
            errorHeb.className = "error";
        }
    };
    
/************************* show/hide radio Buttons ************************************/
    
    if (bias[0].checked) {
        thereInitBias.className = "";
    }
    bias[0].onclick = function () {
        thereInitBias.className = "";
    };
    bias[1].onclick = function () {
        thereInitBias.className = "hide";
    };
    
    if (thereTargetHebb[0].checked) {
        TargetHebb.className = "";
    }
    thereTargetHebb[0].onclick = function () {
        TargetHebb.className = "";
    };
    thereTargetHebb[1].onclick = function () {
        TargetHebb.className = "hide";
    };
};