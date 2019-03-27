

var quest = {
	question : "what is the sum of these A,B where A=10 and B=12",
	ans1:'22',
	ans2:'11',
	ans3:'33',
	ans4:'44',
}

var linebreak = "</br>"

function testStart() {
	// document.write("Question : ")
	// document.write(quest['question'])
	// document.write(linebreak)
	// document.write("Option 1 : ")
	// document.write(quest['ans1'])
	// document.write(linebreak)
	// document.write("Option 2 : ")
	// document.write(quest['ans2'])
	// document.write(linebreak)
	// document.write("Option 3 : ")
	// document.write(quest['ans3'])
	// document.write(linebreak)
	// document.write("Option 4 : ")
	// document.write(quest['ans4'])
	// document.write(linebreak)
	document.getElementById("form_change").innerHTML = "<h1>Your test begin Now....!</h1>";

	// if we are using document.write than we are not able to perform in same page anymore

	// document.write(Date());

	// document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");
}

function myFunction() {
  alert('Your Test has been completed');
}

function Question_print(i,Solution_data,Question_description) {
	var text = "";
	text += "Question : " + Question_description[i.toString()] + linebreak;
	for (var j = 0; j < 4; j++){
		text += "<input type='radio' name='solution"+i.toString()+"'>"+"Question : " + Solution_data[i.toString()][j.toString()] + linebreak;
	}
	
	text += "<input type='button' value='next' />";
	text += "<input type='submit' onclick='myFunction()' />";

	i += 1;

	document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";
}

function submit_option() {
	  var txt;
	  var person = prompt("Do you want tosubmit test than enter your email and press ok:", "abc@gmail.com");
	  if (person == null || person == "") {
	    txt = "User continue the quiz.";
	    test_func()
	  } else {
	    txt = "Hello " + person + " you result submitted to your email address";
	  }
	  document.getElementById("page_context").innerHTML = txt;
}

function test_func() {
	var mydata = JSON.parse(Solution_data);
	var mydata1 = JSON.parse(Question_description);
	var question_Id = ['q1','q2','q3','q4','q5'];
	var rand = question_Id[(Math.random() * question_Id.length) | 0];
	// alert(mydata.q1[0]);
	// alert(mydata.q1);
	// alert(mydata1[rand]);
	// alert(mydata[rand]);
	// alert(mydata1.q1);
	
	var text = "";
	text += "Question : " + mydata1[rand] + linebreak;
	for (var j = 0; j < 4; j++){
		text += "<input type='radio' name='solution"+rand+"'>"+"Question : " + mydata[rand][j.toString()] + linebreak;
	}
	
	text += "<input type='button' value='next' onclick='test_func()' />";
	text += "<input type='submit' onclick='submit_option()' />";

	document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";


}

var start = {}

function testContent(start) {
	// var Solution_data = {
	// 	    "1":[10,20,22,30],
	// 		"2":[12,20,23,31],
	// 		"3":[14,20,21,32],
	// 		"4":[16,20,26,33],
	// 		"5":[19,20,22,34],
	// 	};

	// var Question_description = {
	// 		"1":"what is the sum of the set A and B where A=10 and B=20",
	// 		"2":"what is the sum of the set A and B where A=11 and B=20",
	// 		"3":"what is the sum of the set A and B where A=12 and B=20",
	// 		"4":"what is the sum of the set A and B where A=13 and B=20",
	// 		"5":"what is the sum of the set A and B where A=14 and B=20",
	// 	}
	
	var i;

	if (i == null) {
		i = 1;
	}

	else {
		i += 1;
	}
	test_func()
	// Question_print(++i,Solution_data,Question_description)
	// for (i = 1; i < 6; i++) { 
	// 	text += "Question : " + Question_description[i.toString()] + linebreak;
	// 	for (var j = 0; j < 4; j++)
	// 	text += "<input type='radio' name='solution"+i.toString()+"'>"+"Question : " + Solution_data[i.toString()][j.toString()] + linebreak;
	// }
	// text += "<input type='button' value='next' />";
	// text += "<input type='submit' onclick='myFunction()' />";

	// document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";


	// var Solution_data = {
	// 	    "1":"what is the sum of the set A and B where A=10 and B=20",
	// 		"2":"what is the sum of the set A and B where A=11 and B=20",
	// 		"3":"what is the sum of the set A and B where A=12 and B=20",
	// 		"4":"what is the sum of the set A and B where A=13 and B=20",
	// 		"5":"what is the sum of the set A and B where A=14 and B=20",
	// 	};

	// for x in range(1,len(Question_description)+1):
	// 	Question_data = {
	// 		'question_id':str(x),
	// 		'question_desc':Question_description[str(x)][0],
	// 		'solution_value':Solution_data[str(x)]
	// 	}
	// 	document.write(Question_data['question_id'])
	// 	document.write(Question_data['question_desc'])
	// 	document.write(Question_data['solution_value'])
	
	// for (i=1;i<5;i++){
	// 	var text = "";
	// 	text += "Question : " + quest['question'] + linebreak;
	// 	text += "<input type='radio' name='solution'>"+"Question : " + quest['ans1'] + linebreak;
	// 	text += "<input type='radio' name='solution'>"+"Question : " + quest['ans2'] + linebreak;
	// 	text += "<input type='radio' name='solution'>"+"Question : " + quest['ans3'] + linebreak;
	// 	text += "<input type='radio' name='solution'>"+"Question : " + quest['ans4'] + linebreak;

	// 	text += "<input type='button' value='next' />";
	// 	text += "<input type='submit' onclick='myFunction()' />";
	// }
	// document.getElementById("page_context").innerHTML = "<form> "+text+" </form>";
}