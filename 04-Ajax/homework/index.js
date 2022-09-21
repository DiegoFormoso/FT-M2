// let elem = document.getElementById('boton');
// alert(boton.id);

$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data) {            
        let lista = document.getElementById('lista');
        //lista.empty();
        while (lista.firstChild) {
          lista.removeChild(lista.firstChild);      
        }
        data.forEach(element => $(
             `<li id=${element.id}>${element.name}</li>`).appendTo('#lista'));
        })
    });
    

$('#search').click(()=>{
    let amigo = document.getElementById('amigo');
    while (amigo.firstChild)
        amigo.removeChild(amigo.firstChild);

    let input = $('#input'); //$('#input').val() = input[0].value 
    if (input[0].value === '') {
        $('<p>ingrese un valor !!!</p>').appendTo('#amigo');
    }
    else {
        $.get(`http://localhost:5000/amigos/${input[0].value}`, function(data){
            $(`<p>${data.name}</p>`).appendTo('#amigo');  // $('#amigo').text(data.name);
        })
        .fail(function() {
            $(`<p>no encontrado</p>`).appendTo('#amigo');
        })
        input[0].value = '';
    }
});

$('#delete').click(function(){
    let success = document.getElementById('success');
    while (success.firstChild)
      success.removeChild(success.firstChild);

    let input = $('#inputDelete');
    if (input[0].value === '') $('<p>ingrese un valor</p').appendTo('#success');
    else{
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:5000/amigos/${input[0].value}`,
            success: function(data) {
                $('<p>delete success</p>').appendTo('#success');
            },
        });        
    }
})
