var regex1 = /[0-9]/g;
var regex2 = /[)],/g;
var regex3 = /[(];/g;
var regex4 = /[*][a-z]/g;
var regex5 = /;,/g;
var regex6 = /;[)]/g;
var regex7 = /,;/g;
var regex8 = /[(][)]/g;
var regex9 = /[(],/g;
var regex10 = /[)][(]/g;
var regex11 = /,[)]/g;

var dutError = "Errors:- \n";
function validateDutGroupString(inputString){
    dutError = "Errors:- \n";   
    var regex0Val = regexFun0(inputString);
    var regex1Val = regexFun1(inputString);
    var regex2Val = regexFun2(inputString);
    var regex3Val = regexFun3(inputString);
    var regex4Val = regexFun4(inputString);
    var regex5Val = regexFun5(inputString);
    var regex6Val = regexFun6(inputString);
    var regex7Val = regexFun7(inputString);
    var regex8Val = regexFun8(inputString);
    var regex9Val = regexFun9(inputString);
    var regex10Val = regexFun10(inputString);
    var regex11Val = regexFun11(inputString);
    var regex12Val = regexFun12(inputString);
    var regex13Val = regexFun13(inputString);
    //&& regex1Val
    if(regex0Val  && regex1Val && regex2Val && regex3Val && regex4Val && regex5Val && regex6Val && regex7Val && regex8Val && regex9Val && regex10Val && regex11Val && regex12Val && regex13Val)
    {
        //startFilterProcess();
        return true;
    }else
    {
        alert(dutError);
        mask();
        return false;
    }
   
}

function regexFun0(inputString){
if(checkBrackets(inputString)){
    return true;   
}else{
   dutError += "* paranthesis error in expression \n";
   return false;}
}


function regexFun1(inputString){
if(inputString.match(regex1)==null){
    return true;   
}else{
   dutError += "* "+inputString+"Not a valid selection \n";
   return false;}
}

function regexFun2(inputString){
if(inputString.match(regex2)==null){
    return true;   
}else{
   dutError +="* Found ),  \n";
   return false;}
}
function regexFun3(inputString){
if(inputString.match(regex3)==null){
    return true;   
}else{
   dutError += "* Found (;  \n";
   return false;}
}
function regexFun4(inputString){
if(inputString.match(regex4)==null){
    return true;   
}else{
   dutError += "* No , found between two dut groups \n";
   return false;}
}
function regexFun5(inputString){
if(inputString.match(regex5)==null){
    return true;   
}else{
   dutError += "* Found ;,  \n";
   return false;}
}
function regexFun6(inputString){
if(inputString.match(regex6)==null){
    return true;   
}else{
   dutError += "* Found ;)  \n";
   return false;}
}
function regexFun7(inputString){
if(inputString.match(regex7)==null){
    return true;   
}else{
   dutError += "* Found  ,;  \n";
   return false;}
}

function regexFun8(inputString){
if(inputString.match(regex8)==null){
    return true;   
}else{
   dutError += "* Nothing entered between paranthesis .";
   return false;}
}

function regexFun9(inputString){
if(inputString.match(regex9)==null){
    return true;   
}else{
   dutError += "* Found (,  \n";
   return false;}
}

function regexFun10(inputString){
if(inputString.match(regex10)==null){
    return true;   
}else{
   dutError += "* Found  )( . \n";
   return false;}
}

function regexFun11(inputString){
if(inputString.match(regex11)==null){
    return true;   
}else{
   dutError += "* Found  ,)  \n";
   return false;}
}

function regexFun12(inputString){
    var result = inputString.replace(/[^a-z]/g, ' ');
    result = (result.replace(/  +/g, ' ')).trim();
    var selectedGroupDutArray = result.split(' ');
    var returntext = true;
    selectedGroupDutArray.map(function(d,i){
        if(uniqueSlicedDutValues.indexOf(d)==-1){
            dutError += "* "+d+" is not a valid selection \n";
            returntext =  false;
        }
    })
    return returntext;
}

function regexFun13(inputString){
    
    var result = inputString.replace(/[^a-z]/g, ' ');
    result = (result.replace(/  +/g, ' ')).trim();
    var selectedGroupDutArray = result.split(' ');
    var counts = [];
    for(var i = 0; i <= selectedGroupDutArray.length; i++) {
        if(counts[selectedGroupDutArray[i]] === undefined) {
            counts[selectedGroupDutArray[i]] = 1;
        } else {
            dutError +="* Duplicate value found \n";
            return false;
        }
    }
    return true;
}




function mask(){
$("#mask").hide();
}


/*function NumberRegex(inputString){
    var expression  = /[^0-9]/g;
if(inputString.match(expression)==null){
    return true;   
}else{
   return false;}

}*/

function NumberRegex(inputString){
	var expression = /[0-9]/g;

if(inputString.match(expression)==null){
	return false;
}else{
	return true;
}

}
