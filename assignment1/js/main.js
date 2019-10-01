/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Vivian Chiu     Student ID: 133088187         Date: September 16th 2019
*
********************************************************************************/ 

$(document).ready(function() {
  console.log("jQuery working");

  $( "#teams-menu" ).on( "click", function(){
    event.preventDefault(); // Cancel the default action (navigation) of the click
    $.ajax({
      url:"https://teams-api-data.herokuapp.com/teams",
      type: "GET", 
      contentType: "application/json"
    })
    .done(function( data ){
      $( "#data" ).empty();
      $( "#data" ).append("<h3>Teams</h3>");
      $( "#data" ).append("<pre>" + JSON.stringify(data, null, 2) + "</pre>" );
    })
  });

  $( "#employees-menu" ).on( "click", function(){
    event.preventDefault(); // Cancel the default action (navigation) of the click
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/employees", 
      type: "GET", 
      contentType: "application/json"
    })
    .done(function( data ){
      $( "#data" ).empty();
      $( "#data" ).append("<h3>Employees</h3>");
      $( "#data" ).append("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
    })
  });

  $( "#projects-menu" ).on( "click", function(){
    event.preventDefault(); // Cancel the default action (navigation) of the click
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/projects", 
      type: "GET",
      contentType: "application/json"
    })
    .done(function( data ){
      $( "#data" ).empty();
      $( "#data" ).append("<h3>Projects</h3>");
      $( "#data" ).append("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
    })
  });

  $( "#positions-menu" ).on( "click", function(){
    event.preventDefault(); // Cancel the default action (navigation) of the click
    $.ajax({
      url: "https://teams-api-data.herokuapp.com/positions", 
      type: "GET", 
      contentType: "application/json"
    })
    .done(function( data ){
      $( "#data" ).empty();
      $( "#data" ).append("<h3>Positions</h3>");
      $( "#data" ).append("<pre>" + JSON.stringify(data, null, 2) + "</prev>");
    })
  });
})