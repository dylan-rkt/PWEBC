var open = false;

function menu() {
	if(open) {
		document.getElementById('sideMenu').style.marginLeft = '-17rem';
		document.getElementById('main').style.marginLeft = '0';
		document.getElementById('expandArrow').style.marginLeft = '0';
		open = false;
	}
	else {
		document.getElementById('sideMenu').style.marginLeft = '0';
		document.getElementById('main').style.marginLeft = '17rem';
		document.getElementById('expandArrow').style.marginLeft = '17rem';
		open = true;
	}
}
