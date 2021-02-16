       var ok=0;
function num(i)
{
    var x=i;
    if(x=='=')
    {
        document.getElementById('input').value=eval(getElementById('input').value)
    }
    else if(x=='+'||x=='-'||x=='*'||x=='/')
    {
         if(ok==0)
         {
            document.getElementById('input').value+=i;
         }
    }
    else if(x=='c')
    {
        document.getElementById('input').value='';
    }
    else
    {
        document.getElementById('input').value+=i;
        ok=0;
    }

}


function clearDisplay(){
	var displayText=document.getElementById("display");
	displayText.value="";
}

function displayResults(){
	
	var expression=document.calculator.display.value;
	var result=eval(expression);
	document.calculator.display.value=result;
}

function deleteNumbers(){
	var expression=document.calculator.display.value;
	var newResult=expression.substr(0, expression.length - 1);
	document.calculator.display.value=newResult;
}

function addToScreen(x){
	var displayText=document.getElementById("display")
	displayText.value+=x;
}



var displayText=document.getElementById("remove");
            displayText.value="";
            
            var displayText=document.myform.txt.value;
            var res="0*displayText";
            document.myform.txt.value=res;