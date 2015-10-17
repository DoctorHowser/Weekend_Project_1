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
	

			if (isNaN(numCheck)) {
				numCheck = 0;
			}

			salaries += numCheck;
			//increment clicks for next submission
			numSubmissions++;
			var monthlySalaries = (salaries/12).toFixed(2);
			
		
		addInfo(values);
		addSalary(monthlySalaries);
	});
});

function addInfo(employee){
	$("#employeeContainer").append("<tr class='employee'></tr>");
	var $el = $("#employeeContainer").children().find("tr").last();

	$el.append("<td>" + employee.employeeFirst + " " + employee.employeeLast + "</td>");
	$el.append("<td>" + employee.employeeNumber + "</td>");
	$el.append("<td>" + employee.employeeTitle + "</td>");
	$el.append("<td>" + employee.employeeSalary + "</td>");
	$el.append("<td><button class='delete'>DELETE</button></td>")
}
function addSalary(dollar){
		$("#lastSubmit").text(dollar + " dollars per month");
}