/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Vivian Chiu     Student ID: 133088187         Date: September 30th 2019
*
********************************************************************************/ 
// view model for Employees views
let employeesModel;

function initializeEmployeesModel(){
  $.ajax({
    url: "https://teams-api-data.herokuapp.com/employees", 
    type: "GET", 
    contentType: "application/json"
  }).done(function(employees){
    employeesModel = _.take(employees, 300);
    refreshEmployeeRows(employeesModel);
  })
  .fail(function(err){
    showGenericModal('Error', 'Unable to get Employees');
  });
}

// shows generic modal using employee ID 
function showGenericModal(title, message){
  $(".modal-title").empty();
  $(".model-body").empty();
  $(".modal-title").html(title);
  $(".modal-body").html(message);
  $("#genericModal").modal({});
}

// adds employees using Lodash template
function refreshEmployeeRows(employees){
  const rowTemplate = _.template(`
      <div class="row body-row" data-id="<%- employee._id %>">
        <div class="col-xs-4 body-column"><%- employee.FirstName %></div>
        <div class="col-xs-4 body-column"><%- employee.LastName %></div>
        <div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>
      </div>
  `);
  const rowHTML = employees.reduce(function(accHTML, employee){
    return accHTML + rowTemplate({employee});
  }, '');
  $('#employees-table').empty();
  $('#employees-table').append(rowHTML);
}

// returns a filtered list of employees
function getFilteredEmployeesModel(filterString){
  let filteredEmployees =  _.filter(employeesModel, function(employee){
    if (employee.FirstName.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.LastName.toLowerCase().includes(filterString.toLowerCase()) ||
        employee.Position.PositionName.toLowerCase().includes(filterString.toLowerCase())) {
          return true;
    }
    else {
      return false;
    }
  });
  return filteredEmployees;
}

function getEmployeeModelById(id){
  let findEmployee= null;
  $.grep(employeesModel, function (employee){
    if (employee._id === id){
      findEmployee = _.cloneDeep(employee);
    }
  });
  return findEmployee;
}

$(document).ready(function() {
  initializeEmployeesModel();

  $('#employee-search').on("keyup", function(){
    let searchText = getFilteredEmployeesModel(this.value)
    refreshEmployeeRows(searchText);
  });

  $(".bootstrap-header-table").on("click", ".body-row", function(){
    let empID = $(this).attr("data-id");
    let employee = getEmployeeModelById(empID);

    employee.HireDate = moment(employee.HireDate).format('LL');

    let modalTemplate = _.template(
      '<strong> Address: </strong> <%- employee.AddressStreet %> <%- employee.AddressCity %> <%- employee.AddressState %> <%- employee.AddressZip %><br>' +
      '<strong> Phone Number: </strong> <%- employee.PhoneNum %> <br>' +
      '<strong> Hire Date: </strong> <%- employee.HireDate %>'
    );

    let modalContent = modalTemplate({'employee': employee});

    showGenericModal(employee.FirstName + " " + employee.LastName, modalContent);

  });

});
