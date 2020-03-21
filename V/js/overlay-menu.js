var open = false;

function menu() {
	if (open) {
		document.getElementById('left-side-menu').style.marginLeft = '-17rem';
		document.getElementById('main').style.marginLeft = '0';
		document.getElementById('animated-arrow').style.cssText = "margin-left: 0; transform: rotate(0)";
		open = false;
	}
	else {
		document.getElementById('left-side-menu').style.marginLeft = '0';
		document.getElementById('main').style.marginLeft = '17rem';
		document.getElementById('animated-arrow').style.cssText = "margin-left: 17rem; transform: rotate(-180deg); animation: loading2 2.25s ease-in-out infinite";
		open = true;
	}
}
