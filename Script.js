function myfunc() {
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	console.log('b1:', b1);
    console.log('b2:', b2);
    console.log('b3:', b3);
    console.log('b4:', b4);
    console.log('b5:', b5);
    console.log('b6:', b6);
    console.log('b7:', b7);
    console.log('b8:', b8);
    console.log('b9:', b9);

	if ((b1 == 'X' && b2 == 'X' && b3 == 'X') ||
		(b4 == 'X' && b5 == 'X' && b6 == 'X') ||
		(b7 == 'X' && b8 == 'X' && b9 == 'X') ||
		(b1 == 'X' && b4 == 'X' && b7 == 'X') ||
		(b2 == 'X' && b5 == 'X' && b8 == 'X') ||
		(b3 == 'X' && b6 == 'X' && b9 == 'X') ||
		(b1 == 'X' && b5 == 'X' && b9 == 'X') ||
		(b3 == 'X' && b5 == 'X' && b7 == 'X')) {
		console.log("winner");
		document.getElementById("winner").innerHTML = "Player X won";
	} else if ((b1 == 'O' && b2 == 'O' && b3 == 'O') ||
		(b4 == 'O' && b5 == 'O' && b6 == 'O') ||
		(b7 == 'O' && b8 == 'O' && b9 == 'O') ||
		(b1 == 'O' && b4 == 'O' && b7 == 'O') ||
		(b2 == 'O' && b5 == 'O' && b8 == 'O') ||
		(b3 == 'O' && b6 == 'O' && b9 == 'O') ||
		(b1 == 'O' && b5 == 'O' && b9 == 'O') ||
		(b3 == 'O' && b5 == 'O' && b7 == 'O')) {
		document.getElementById("winner").innerHTML = "Player O won";
	} else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
		document.getElementById("winner").innerHTML = "Match Tie";
	} else {
		if (flag == 1) {
			document.getElementById("winner").innerHTML = "Player X turn";
		} else {
			document.getElementById("winner").innerHTML = "Player O turn";
		}
	}

}
flag = 1

function func1() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "O";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}
function func2() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "O";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}
function func3() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "O";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}
function func4() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "O";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}
function func5() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "O";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}
function func6() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "O";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}
function func7() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "O";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}
function func8() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "O";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}
function func9() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "O";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}