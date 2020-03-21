$(document).ready(function() {
	const blocklocker = $("#block-lock");
	const loadingCircle = $(".lds-ring");
	const form = $("#identification");

	form.on('submit', function(e) {
		e.preventDefault();
		var time = 3000;
		var self = this;
		
		const login = $("input[name=login]").val();
		const pwd = $("input[name=password]").val();

		blocklocker.css("display", "block");
		loadingCircle.css("display", "inline-block");

		form.children("input").each(function() {
			$(this).attr("readonly", true);
		});

		window.setTimeout(function() {
			self.submit();
		}, time);
	});
});