const disp=document.querySelector ('.disp');
let res=0;
const calc=document.querySelector ('.calc');
let isExt=false; //нажата ли EXT если да то true иначе false
let valOfBut=0;   // в переменной значение нажатой кнопки


calc.addEventListener("click", function(event) {
    doExtFunc();
    if(!event.target.classList.contains('but')) return; //нажаты только кнопки, если нет на выход.
    valOfBut=event.target.innerText; //иначе значение нажатой кнопки в valOfBut
    switch (valOfBut){
        case 'C':
            disp.value='';
            break;
        case '=':
            if(disp.value.includes('!')) factorial();
            if(eval(disp.value)%1===0) disp.value=eval(disp.value);// если целое число то выводим как есть
			 else {
				 disp.value=eval(disp.value).toFixed(2); // иначе оставляем 2 знака после запятой
			 }
            break;
        case 'EXT':
            doExtClick ();
            break;
        default:
            disp.value+=valOfBut;
            
               
    }
    });

function doExtClick (){
        if(isExt){
			document.querySelector('.keyb2').style.display="none";
            document.querySelector('.calc').style.width="300px";
            isExt=false;
        }
        else{
			document.querySelector('.keyb2').style.display="block";
            document.querySelector('.calc').style.width="530px";
            isExt=true;  
        }
}

function doExtFunc(){
	switch(event.target.innerText){
		case 'x^y':
			disp.value+="**";
			break;
		case 'x!':
			disp.value+="!(";
			break;
		case 'ln':
			disp.value+="Math.log(";
			break;
		case 'sin':
			disp.value+="Math.sin(";
			break;
		case 'cos':
			disp.value+="Math.cos(";
			break;
		case '√':
			disp.value+="Math.sqrt(";
			break;
		case 'tan':
			disp.value+="Math.tan(";
			break;
		case 'acos':
			disp.value+="Math.acos(";
			break;
		case 'asin':
			disp.value+="Math.asin(";
			break;
		case 'atan':
			disp.value+="Math.atan(";
			break;
		case 'exp':
			disp.value+="Math.exp(";
			break;
		case 'log10':
			disp.value+="Math.log10(";
			break;
		case 'log2':
			disp.value+="Math.log2(";
			break;
		case '|a|':
			disp.value+="Math.abs(";
			break;
		case 'mod':
			disp.value+="%";
			break;    

	}

}
// factorial() вычисляет выражение в скобках под знаком факториала и сам факториал
function factorial() {
    //alert ("надо доделать, пока лень");
	let startFact ="!("; // индекс начала факториала
	let endFact = ')'; // индекс конца
	let factExpres; // здесь будет зраниться выражение под знаком факториала
	let fact=1;// здесь будет храниться факториал
	startFact = disp.value.indexOf(startFact); // вычисляем индекс начала
	endFact = disp.value.lastIndexOf(endFact);  // и конца факториала
	factExpres=disp.value.slice(startFact+2, endFact) // достаем выражение из скобок под знаком факториала
	factExpres=eval(factExpres);// вычисляем выражение под знаком факториала
	for (var i=1; i<=factExpres; i++){ // вычисление факториала
		fact*=i;
	}
	disp.value=fact;
}

