$(document).ready(function () {
    
    let i = 0;
    $('span.input').each(function() {
        i++;
        // $(this).text('_____'); //.addClass('btn btn-primary');
        $(this).attr('data-order',i);
        $('<input />', {
            'class' : 'mt-1 form-control', 
            'data-order' : $(this).data('order'),
            placeholder : $(this).data('placeholder'),
            appendTo : "#main-form"
        });
    });
    $('#main-form').append('<div class="btn btn-primary mt-2" id="main-submit">Submit</div>');
    $('#mad-lib').append('<div class="btn btn-primary mt-2" id="revise">Revise</div>');

    $("#main-submit").click(function () { 
        console.log('submitted')
        $('#main-form').hide();
        $('#mad-lib').show();
        $('#main-form input').each(function() {
            thisId = $(this).data('order');
            thisWord = $(this).val();
            thisBlank = $('#mad-lib').find("span[data-order="+thisId+"]");
            thisBlank.addClass('border-bottom border-dark bg-secondary text-light px-1')
            thisBlank.text(thisWord);
        })
    });

    $("#revise").click(function () {
        $("#main-form").show();
        $("#mad-lib").hide();
    });

});