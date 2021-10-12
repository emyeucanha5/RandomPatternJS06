const container = document.querySelector('#container');
const radiuss = document.querySelectorAll('.radius input');
const items = document.querySelector('#items');
const color = document.querySelector('#color');
const rand = document.querySelector('#random');

const colorsObj = {
	'purplish': ['#262486', '#CA2996', '#92208E', '#4C1981'],
	'redish': ['#f9d5bb', '#f66767', '#d35656', '#3c3d47'],
	'greenish': ['#42b883', '#347474', '#35495e', '#ff7e67'],
	'brownish': ['#46211a', '#693d3d', '#ba5536', '#a43820'],
	'blueish': ['#00487C', '#4BB3FD', '#0496FF', '#027BCE']
}



let colors = [...colorsObj.purplish];

color.addEventListener('change', (e) => {
	let tmp = color.value;
	colors= [...colorsObj[`${tmp}`]];
	createObj();
	// console.log(colors);
});



let item = 15;

items.addEventListener('change', function(e) {
	item = items.value;
	createObj();
});
let radiusList = ['100%', '0%','0%','0%'];

radiuss.forEach(function(rad, index) {
	rad.addEventListener('change', function(e) {
		if(rad.checked==true){
			radiusList[index] = '100%';
		}else{
			radiusList[index] = '0%';
		}
		createObj();
	});
});
function createObj(){
	container.innerHTML = "";
	const width = document.body.offsetWidth;
	const height = document.body.offsetHeight;
	const itemRow = item;
	const itemCol = item;
	const rowSize = width/itemRow;
	const colSize = height/itemCol;
	for(let i=0; i<itemRow;i++){
		const rowelem = document.createElement("div");
		radius = radiusList.reduce((prev, cur)=>{
			return prev += `${cur}`;
		},'');
		// console.log(radius);
		for(let j = 0;j<itemCol;j++){
			const colelem = document.createElement("div");
			colelem.classList.add('element');
			const size = Math.max(rowSize,colSize)/1.1;
			colelem.style.width = `${size}px`;
			colelem.style.height = `${size}px`;
			colelem.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
			colelem.style.borderRadius = radius;
			colelem.style.transform = `rotate(${Math.floor(Math.random()*4) *90}deg)`;
			rowelem.appendChild(colelem);
		}
		container.appendChild(rowelem);
	}

}
rand.addEventListener('click', function(e) {
		createObj();
});
createObj();