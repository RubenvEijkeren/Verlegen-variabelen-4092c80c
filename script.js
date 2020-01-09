const pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;

function calc(){
	let dia = document.querySelector("input").value;
	let omtrek = pi * 2 * dia;
	let oppervlakte = dia * dia * pi * 0.25;
	document.querySelector(".omtrek").innerText = "De omtrek van de cirkel is " +	omtrek;
	document.querySelector(".oppervlakte").innerText = "De oppervlakte van de cirkel is " +	oppervlakte;

}