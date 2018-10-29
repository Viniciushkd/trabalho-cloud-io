$( document ).ready(function() {
    
    $("#customerForm").submit(function(event) {
		event.preventDefault();
		ajaxPost();
	});
    
    function ajaxPost(){

    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://young-peak-35339.herokuapp.com/twitter?tweet=" + $("#pesquisa").val(),
            dataType : 'json',
            timeout: 150000,
			success : function(customer) {
                console.log(customer);
                $('.list-group-item').remove();
                $.each(customer, function(index, value){
                    $('#listaTwitter').append('<li class="list-group-item">'+value+'</li>');
                });
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: Verifique se o servidor REST esta no ar");
			}
        });
    	reset();
    }
    
    function reset(){
    	$("#pesquisa").val("");
    }
});