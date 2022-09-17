// let elem = document.getElementById('boton');
// alert(boton.id);

$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data) {            
        let lista = document.getElementById('lista');
        while (lista.firstChild) {
          lista.removeChild(lista.firstChild);      
        }
        data.forEach(element => $(
             `<li id=${element.id}>
                <p>${element.id}</p>
                <p>${element.name}</p>
                <p>${element.age}</p>
                <p>${element.email}</p>
            </li>`).appendTo('#lista'));
        })
    });
    

$('#search').click(function(){
    let amigo = document.getElementById('amigo');
    while (amigo.firstChild)
        amigo.removeChild(amigo.firstChild);

    let input = $('#input');
    if (input[0].value === '') {
        $('<p>ingrese un valor !!!</p>').appendTo('#amigo');
    }
    else {
        $.get(`http://localhost:5000/amigos/${input[0].value}`, function(data){
            $(`<p>${data.id}</p><p>${data.name}</p><p>${data.age}</p><p>${data.email}</p>`).appendTo('#amigo'); 
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
                console.log(data);
                $('<p>delete success</p>').appendTo('#success');
            },
        });        
    }
})
