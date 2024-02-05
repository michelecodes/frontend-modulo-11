$(document).ready(function(){
    $('#carrosel-imagens').slick({
        autoplay: true,
    });
    
    $('.menu-mangiare').click(function(){
        $('nav').slideToggle();
    })
    
    $('form').validate({
        
        rules:{
            nome:{
                required: true
            },
            
            telefone:{
                required: true
            },
            
            email:{
                required: true,
                email: true
            }
        },
        
        mensagem:{
            nome: 'Por favor, insira seu nome'
        },
        
        submitHandler: function(form){
            console.log(form)
        },
        
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numerOfInvalids();
            
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)}
            },
    })
    
    $('.lista-menu button').click(function(){
        const destino = $('#id-contatto');
        
        const nomeRicetta = $(this).parent().find("h3").text();
        
        $('#').val(nomeRicetta)
        
        $('html').animate({
            scrollTo: destino.offset().top
        }, 1000)
    })
})