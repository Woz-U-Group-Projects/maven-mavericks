import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var table = [
	{nombre: "Alejandra", contraseña: "123"}
	/*{nombre: "Luis", contraseña: "123", login: "20:47:48", logout: "22:47:48"}*/
];
	var week = [
	{today: "sunday"}
];
	var logined = [
	{login: "20:47:48"}
];
	var logouted = [
	{nombre: "Alejandra", contraseña: "123", login: "20:47:48", logout: "00:00:00"}];
new function ocultar(){
	
	document.getElementById("todo2").style.display = "none";
	document.getElementById("todo3").style.display = "none";
	document.getElementById("todo4").style.display = "none";
	document.getElementById("week").style.display = "none";
	document.getElementById("show-tabla").style.display = "none";
	}
new function first(){
	alert ("go to first");
	document.getElementById("todo1").style.display = "block";
	document.getElementById("todo2").style.display = "none";
	document.getElementById("todo3").style.display = "none";
	document.getElementById("todo4").style.display = "none";
	document.getElementById("week").style.display = "none";
}
function second(){
	alert ("go to second");
	document.getElementById("todo1").style.display = "none";
	document.getElementById("todo2").style.display = "none";
	document.getElementById("todo3").style.display = "block";
	document.getElementById("todo4").style.display = "block";
	document.getElementById("week").style.display = "none";
	document.getElementById("mostrar-tabla").style.display = "none";
}
function third(){
	alert ("go to third");
	document.getElementById("todo1").style.display = "none";
	document.getElementById("todo2").style.display = "none";
	document.getElementById("todo3").style.display = "none";
	document.getElementById("todo4").style.display = "none";
	document.getElementById("week").style.display = "block";
}
function register(){
	var stringIntroduced = document.getElementById("user").value;
	var passStringIntroduced = document.getElementById("pass").value;
	var newString= {name: stringIntroduced, password: passStringIntroduced};
	table.push(newString);
	alert ("registration successful");
	alert ("login successful");
	check()
	event.preventDefault();
}
function check()
{
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	for (var c = 0; c < table.length; c++){
		if (user == table[c].name && pass == table[c].password) {
			document.getElementById("todo1").style.display = "none";
			document.getElementById("todo2").style.display = "block";
			event.preventDefault();
			//window.location="http://www.friv.com";
		}
		else{
			/*alert("username or password incorrect");*/
			event.preventDefault();
		}
	}
}
function ucaptcha()
{
	var Ucaptcha1 = document.getElementById("Ucaptcha").value;
	if (Ucaptcha1 == "morning overlooks") {
		alert ("verification completed");
		document.getElementById("todo2").style.display = "none";
		document.getElementById("todo3").style.display = "block";
		document.getElementById("todo4").style.display = "block";
		for (var i = 1; i < table.length; i++) {
					var access= document.getElementById("week").value;
					var weekly = {today: access};
					week.push(weekly);
				}
		login();
		
		event.preventDefault();
	}
	else{
		alert ("incorrect");
		event.preventDefault();
	}
}
function login(){
	logintime = logined[0].login;
	let d = new Date();
	var d1=d.getHours();
	var d2=d.getMinutes();
	var d3=d.getSeconds();
	/*alert (d1);
	alert (d2);
	alert (d3);*/
	document.getElementById("log-in").innerHTML = "<br><h1>" + d1 + ":" + d2 + ":" + d3 + "</h1>";
	counterminus1= table.length;
	for (var i = 1; i < counterminus1; i++) {
		var logger = {login: d1 + ":" + d2 + ":" + d3};
		logined.push(logger);
	}
	/*document.body.innerHTML = "<h1>Time login is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</h1>" +
	'<input type="submit" value="Log Out" id="btncheck" onclick="logout()">'*/
	}
function logout() {
	let o = new Date();
	var o1=o.getHours();
	var o2=o.getMinutes();
	var o3=o.getSeconds();

	/*alert (o1);
	alert (o2);
	alert (o3);*/
	/*document.getElementById("log-out").innerHTML = "<br><h1>Time logout is:  " + o1 + ":" + o2 + ":" + o3 + "</h1>";*/
	document.getElementById("log-out").innerHTML = "<br><h1>" + o1 + ":" + o2 + ":" + o3 + "</h1>";
	for (var i = 1; i < table.length; i++) {
		var logouter = {name: table[i].name, password: table[i].password, login: logined[i].login, logout: o1 + ":" + o2 + ":" + o3};
		logouted.push(logouter);
	};
	document.getElementById("show-table").style.display = "block";
	/*document.body.innerHTML = "<br><h1>Time logout is:  " + o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds() + "</h1>"*/
	//nulls=registered[1].login;
	/*if (nulls == null) {
		alert (o1);
		var newLogOut = {login: o1, logout: o2};
		table.push(newLogOut);
		
		
	else {
		alert ("no null");
	}*/
}
function loadEvents(){
	document.getElementById("show-table").addEventListener("click", showTable, false);
	document.getElementById("new-String").addEventListener("submit", newString, false);
}
function showTable(){
	var bodyTable = document.getElementById("Strings-table");
	var fullTable = "";
	for (var i = 0; i < table.length; i++) {
		//fullTable += "<tr><td>" + table[i].name + "</td><td>" + table[i].password + "</td><td>";
		fullTable += "<tr><td>" + logouted[i].name + "</td><td>" + logouted[i].password + "</td><td>" + logouted[i].login + "</td><td>" + logouted[i].logout + "</td><td>" + week[i].today  +"</td></tr>";
		// + "</td><td>" + week[i].today
		/*fullTable += "<tr><td>" + table[i].name + "</td><td>" + table[i].password + "</td><td>"  + table[i].login + "</td><td>" + table[i].logout + "</td><tr>";*/
	}
	bodyTable.innerHTML = fullTable;
	/*bodyTable.innerHTML = "<tr><td>" + table[0].name + "</td><td>" + table[0].points + "</td></tr>";*/
}
function monday()
{
	for (var i = 0; i < logouted.length; i++)
	{
		if (week[i].today == "monday" || week[i].today == "Monday")
		{
			alert (logouted[i].name + " was loged in Monday");
		}
	}
}
function tuesday(){
	for (var i = 0; i < logouted.length; i++)
	{
		if (week[i].today == "tuesday" || week[i].today == "Tuesday")
		{
			alert (logouted[i].name + " was loged in Tuesday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function wednesday(){
	for (var i = 0; i < logouted.length; i++) {
		if (week[i].today == "wednesday" || week[i].today == "Wednesday") {
			alert (logouted[i].name + " was loged in Wednesday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function thursday(){
	for (var i = 0; i < logouted.length; i++) {
		if (week[i].today == "thursday" || week[i].today == "Thursday") {
			alert (logouted[i].name + " was loged in Thursday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function friday(){
	for (var i = 0; i < logouted.length; i++) {
		if (week[i].today == "friday" || week[i].today == "Friday") {
			alert (logouted[i].name + " was loged in Friday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function saturday(){
	for (var i = 0; i < logouted.length; i++) {
		if (week[i].today == "saturday" || week[i].today == "Saturday") {
			alert (logouted[i].nombre + " was loged in Saturday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function sunday(){
	for (var i = 0; i < logouted.length; i++) {
		if (week[i].today == "sunday" || week[i].today == "Sunday") {
			alert (logouted[i].name + " was loged in Sunday");
			//tuesday.innerHTML += "<td>" + logouted[i].name + "</tr>";
		}
	}
}
function newString(event){
	/*var intro = document.getElementById('todo');
	todo.style.backgroundColor = '#FF00FF';*/
	document.getElementById("todo4").style.display = "none";
	//Prevent reload to the page
	event.preventDefault();
	var stringIntroduced = document.getElementById("string").value;
	var passStringIntroduced = document.getElementById("points").value;
	
	var newString = {name: stringIntroduced, password: passStringIntroduced};
	table.push(newString);
	alert ("added successfully");
}
