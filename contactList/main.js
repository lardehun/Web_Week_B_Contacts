function getData(){
	var r = new XMLHttpRequest();
	r.open("GET", "http://www.filltext.com/?rows=10&fName={firstName}&lName={lastName}&city={city}&address={streetAddress}&email={email}&phone={phone|format}", true);
	r.onreadystatechange = function () {
	  if (r.readyState != 4 || r.status != 200) return;
	  var data = JSON.parse(r.responseText);
	  var content = document.querySelectorAll("#content");
	  for (i=0;i<data.length;i++){
			content[i].innerHTML =	'<li>'+data[i].fName+'</li>' + '<li>'+data[i].lName+'</li>' + '<li>'+data[i].city+'</li>'
			+ '<li>'+data[i].address+'</li>' + '<li>'+data[i].email+'</li>' + '<li>'+data[i].phone+'</li>'
	  }
	};
	r.send();
}

function createCards(number){
	var contacts = document.querySelector("#contacts");
	for (var i = 0; i < number - 1; i++) {
            contacts.innerHTML += '<div id="card"><span id="content"></span></div>';
        }
}

createCards(10);
getData();