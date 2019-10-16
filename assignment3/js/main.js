/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Vivian Chiu     Student ID: 133088187         Date: October 14th 2019
*
********************************************************************************/ 
var viewModel = {
  teams: ko.observable(), 
  employees: ko.observable([]), 
  projects: ko.observable([])
};

// shows generic modal using employee ID 
function showGenericModal(title, message){
  $(".modal-title").empty();
  $(".model-body").empty();
  $(".modal-title").html(title);
  $(".modal-body").html(message);
  $("#genericModal").modal({});
}
function initializeTeams(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/teams-raw", 
      type: "GET",
      contentType: "application/json"
    }).done(function(data){
      viewModel.teams = ko.mapping.fromJS(data);
      resolve();
    }).fail(function(){
      reject("Error loading the team data");
    })
  });
}

function initializeEmployees(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/employees", 
      type: "GET",
      contentType: "application/json"
    }).done(function(data){
      viewModel.employees = ko.mapping.fromJS(data);
      resolve();
    }).fail(function(){
      reject("Error loading the team data");
    })
  });
}

function initializeProjects(){
  return new Promise(function(resolve, reject){
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/projects", 
      type: "GET",
      contentType: "application/json"
    }).done(function(data){
      viewModel.projects = ko.mapping.fromJS(data);
      resolve();
    }).fail(function(){
      reject("Error loading the team data");
    })  
  });
}

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

function saveTeam() {
  var currentTeam = this;
  $.ajax({
    url: "https://teams-api-data.herokuapp.com/team/" + currentTeam._id(),
    type: "PUT", 
    data: JSON.stringify({
      Projects: currentTeam.Projects(), 
      Employees: currentTeam.Employees(), 
      TeamLead: currentTeam.TeamLead()
    }), 
    contentType: "application/json"
  }).done(function(data){
    showGenericModal("Success", currentTeam.TeamName() + " has been successfully updated!");
  }).fail(function(err){
    showGenericModel('Error', err);
  });
}

$(document).ready(function() {
  initializeTeams()
  .then(initializeEmployees)
  .then(initializeProjects)
  .then(function(){
    ko.applyBindings(viewModel);
    $("select.multiple").multipleSelect({filter: true});
    $("select.single").multipleSelect({single: true, filter: true});
  })
  .catch(function(err){
    showGenericModal('Error', err);
  })
})
