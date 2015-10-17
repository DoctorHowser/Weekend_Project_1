var employeeArray = [];
var salaries = 0;
var numSubmissions = 0;

$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();


		var values = {};

		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);
		
		//add only most recent salary via click counter for Array index, only if number
			
			var numCheck = parseInt(employeeArray[numSubmissions].employeeSalary);
			console.log(numCheck, salaries);

			if (isNaN(numCheck)) {
				numCheck = 0;
			}

			salaries += numCheck;
			//increment clicks for next submission
			console.log(numCheck, salaries)
			numSubmissions++;
			var monthlySalaries = (salaries/12).toFixed(2);
			console.log(numCheck, salaries, monthlySalaries);
		
		addInfo(values);
		addSalary(monthlySalaries);
	});
});

function addInfo(employee){
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p> Name: " + employee.employeeFirst + " " + employee.employeeLast + "</p>");
	$el.append("<p> Number: " + employee.employeeNumber + "</p>");
	$el.append("<p> Title: " + employee.employeeTitle + "</p>");
	$el.append("<p> Salary: " + employee.employeeSalary + "</p>");
}
function addSalary(dollar){
		$("#lastSubmit").text(dollar + " dollars per month");
}