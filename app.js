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
		totalSalary(monthlySalaries);
	});
	//Delete button functionality finds data, deletes value from running salary total, appends DOM with new total
	$("#employeeContainer").on('click', 'button', function() {
		var removedDollar = $(this).closest('tr').find('.database').data('salary');
		salaries -= removedDollar;
		var monthlySalaries = (salaries/12).toFixed(2);
		totalSalary(monthlySalaries);
		//removes table row of info
		$(this).closest('tr').remove();
			});
});
// Adds info to DOM, updates running total
function addInfo(employee){
	$("#employeeContainer").append("<tr class='employee'></tr>");
	var $el = $("#employeeContainer").children().find("tr").last();

	$el.append("<td>" + employee.employeeFirst + " " + employee.employeeLast + "</td>");
	$el.append("<td>" + employee.employeeNumber + "</td>");
	$el.append("<td>" + employee.employeeTitle + "</td>");
	$el.append("<td class='database'>" + employee.employeeSalary + "</td>");
	$el.find('.database').data('salary', employee.employeeSalary);
	$el.append("<td><button class='delete'>DELETE</button></td>")
}
//Changes text within #lastSubmit for running monthly salary total
function totalSalary(dollar){
		$("#lastSubmit").text(dollar + " dollars per month");
}
