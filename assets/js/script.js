$(function() {
	$('#sample').html( langs.shell );
	$('#lang').on('change', function() {
		$('#sample').html(langs[ $(this).val() ]);
	});


	$('#demoForm').on('submit', function(e) {
		e.preventDefault();
		$('#demoData').fadeIn();
		$('#demoMeta').text( 'Loading. ..' );

		$.ajax({
			url: 'https://url-meta.herokuapp.com/',
			data: $(this).serialize(),
			type: 'GET',

			success: function(r) {
				$('#demoMeta').text( JSON.stringify(r, null, 2) );
				console.log(r);
			},
			error: function(err) {
				$('#demoMeta').text( 'Some unknown error occured. Please try again.' );
				console.log(err);
			}
		});
	});
});