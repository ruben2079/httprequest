//namespace pattern
var httpRequest = httpRequest || {};

httpRequest.method = function (get,url,booleanValue) {

	let xhttp,
		elTable = document.createElement('table'),
		content = document.getElementsByTagName('tbody')[0];

	if (window.XMLHttpRequest) {
		// code for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// code for old IE browsers
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.onreadystatechange = function(evt) {
		if (this.readyState == 4 && this.status == 200) {

			let data = JSON.parse(this.responseText), i = 0;

			for(let dvalue of data){
				let elTR = document.createElement('tr'),
					TDId = document.createElement('td'),
					TDUserId = document.createElement('td'),
					TDTitle = document.createElement('td'),
					TDBody = document.createElement('td'),
					textNodeId = document.createTextNode(dvalue.id),
					textNodeUserId = document.createTextNode(dvalue.userId),
					textNodeTitle = document.createTextNode(dvalue.title),
					textNodeBody = document.createTextNode(dvalue.body);

				TDId.appendChild(textNodeId);
				TDUserId.appendChild(textNodeUserId);
				TDTitle.appendChild(textNodeTitle);
				TDBody.appendChild(textNodeBody);

				elTR.appendChild(TDId);
				elTR.appendChild(TDUserId);
				elTR.appendChild(TDTitle);
				elTR.appendChild(TDBody);
				content.appendChild(elTR);
			}
		}
	};
	xhttp.open(get,url,booleanValue);
	xhttp.send();
}
httpRequest.init = function() {
	httpRequest.method("GET", "https://jsonplaceholder.typicode.com/posts/", true);
}
window.onload = httpRequest.init;
