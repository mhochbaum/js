/*********************************************************************************************************************************************/
/**/
/*********************************************************************************************************************************************/
function sumTotals() {
        var num1 = parseInt(document.getElementById('value').value);
		var num2 = parseInt(document.getElementById('value2').value);
		var num3 = parseInt(document.getElementById('value3').value);
		var num4 = parseInt(document.getElementById('value4').value);
		addThem(num1,num2,num3,num4);
 }

function addThem(a,b,c,d){
    var e=parseInt((a+b+c+d)/4);
	switch(true){
	
		case(e>100):
			
			document.body.style.backgroundColor = "orange";
			document.body.style.backgroundImage = "url(question-marks.jpg)";
			window.alert("Are you sure you entered that correctly? Go back and check!\nNote: This page will reload soon");
			AutoRefresh(3000);
			break;
		
		case(e>=90):
			document.body.style.backgroundColor = "green";
			document.body.style.backgroundImage = "url(confetti.jpg)";
			window.alert("A! Oustanding!\nNote: This page will reload soon");
			AutoRefresh(3000);
			break;
		
		case(e>=80):
			document.body.style.backgroundColor= "blue";
			document.body.style.backgroundImage = "url(balloons.jpg)";
			window.alert("B! Keep up the good work!\nNote: This page will reload soon");
			AutoRefresh(3000);
			break;
			
		case(e>=70):
			document.body.style.backgroundColor= "yellow";
			document.body.style.backgroundImage = "url(exclaim.jpg)";
			window.alert("C! Be careful!\nNote: This page will reload soon");
			AutoRefresh(3000);
			break;
		
		case(e>=60):
			document.body.style.backgroundColor= "orange";
			document.body.style.backgroundImage = "url(study.jpg)";
			window.alert("D! Hit the books!\nNote: This page will reload soon");
			AutoRefresh(3000);
			break;
		
		case(e<60):
		document.body.style.backgroundColor= "red";
		document.body.style.backgroundImage = "url(summer_school.jpg)";
		window.alert("F! See you again! Better luck next time!\nNote: This page will reload soon");
		break;
	}
	
	//document.write("hello "+ e);
}

function AutoRefresh( t ) {
               setTimeout("location.reload(true);", t);
            }
