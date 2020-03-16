$(document).ready(function() {
	const lockModal = $("#lock-modal");
	const loadingCircle = $(".lds-ring");
	const form = $("#identification");

	form.on('submit', function(e) {
		e.preventDefault();
		var time = 3000;
		var self = this;
		
		const firstname = $("input[name=login]").val();
		const lastname = $("input[name=password]").val();

		lockModal.css("display", "block");
		loadingCircle.css("display", "inline-block");

		form.children("input").each(function() {
			$(this).attr("readonly", true);
		});

		window.setTimeout(function() {
			self.submit();
		}, time);
	});
});