$(document).ready( function () {
    $('#personnel_table').DataTable();

    $('#del_personnel').click(function() {
    	console.log('delete personnel button clicked');
	    $('#deletePersonnel').modal('hide');
	});

});
