$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const listaTarefa = $('#lista-tarefa');
        const item = $(`<li style="display:none;">${novaTarefa}</li>`)
        
        listaTarefa.append(item);
        item.slideDown(250);

        $('#tarefa').val(' ');
    });

    $("#lista-tarefa").on('click', 'li', function() {
        $(this).animate(
            {opacity: 0.5},
            300,
            function(){
                $(this).toggleClass('completa').animate({opacity: 1}, 300);
            }
        );
    });

    $('#deletar-todas').click(function(){
        $('#lista-tarefa').slideUp(500, function() {
            $(this).empty().slideDown(500)
        });
    });
});