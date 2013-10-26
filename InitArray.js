function initializeArray() {
	// array is ordered list of data
	// they can hold any type of data in each slot
	var colors = new Array();
	alert(colors.length);

	colors = new Array(20);
	alert(colors.length);

	colors = new Array("red", "yellow", "blue", "green");
	alert(colors.length);

	colors = ["red", "blue"];
	alert(colors.length + " " + colors[0] + " " + colors[1]);

	colors = ["black", 2, 3, "hello", new Object()];
	alert(colors.length + " " + colors[0] + " " + colors[1] + " " + colors[2] + " " + colors[3]);
}

function changeArray() {
	var colors = ["red", "blue", "green"];
	// read
	alert("colors[0]=" + colors[0]);
	alert("colors[1]=" + colors[1]);
	alert("colors[2]=" + colors[2]);
	alert("colors[3]=" + colors[3]);//undefined

	// modify
	colors[0] = "black";
	alert("colors[0]=" + colors[0]);

	// append
	colors[3] = "white";
	alert("colors.length=" + colors.length);
	alert("colors[3]=" + colors[3]);

	// shrink size
	colors.length = 3;
	alert("shrinking size...");
	alert("colors.length=" + colors.length);//3
	alert("colors[3]=" + colors[3]);//undefined


}

function testToString() {
	var person = {
		toString : 
			function() {
				return "toString person";	   
			},
		toLocaleString : 
			function() {
				return "toLocaleString person";
			}

	};
	
	alert("person=" + person);
	alert("person.toString()=" + person.toString());
	alert("person.toLocaleString()=" + person.toLocaleString());
}

function testJoinArray() {
	var colors = ["red", "blue", "black", "white"];
	alert("colors.join()=" + colors.join());
	alert("colors.join(\",\")=" + colors.join(","));
	alert("colors.join(\"||\")=" + colors.join("||"));
}

initializeArray();
changeArray();
testToString();
testJoinArray();
