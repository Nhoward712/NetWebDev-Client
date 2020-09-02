$(function () {
    var toast = new Audio('media/toast.wav');
    var classes = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY",
        "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
    var x = Math.floor(Math.random() * 13);
    $("h1").addClass(classes[x]);
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    $('.butn').on('click', function (e) {
        e.preventDefault();
        if ($("#formID input:checkbox:checked").length > 0) {
            // any one is checked
            $('#toast').toast({ autohide: false }).toast('hide');
        }
        else {
            // none is checked
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();

            $('#code').html($(this).data('code'))
            $('#product').html($(this).data('item'))
            $('#toast').toast({ autohide: false }).toast('show');
        }

    });
 
    $('#checkAll').on('click', function (e) {
        $('input:checkbox').prop('checked', true);
    });

    $('#uncheckAll').on('click', function (e) {
        $('input:checkbox').prop('checked', false);
    });

    $('.form-group').hover(
        function () {
            console.log("logged")
           
            $('h1').addClass('red')
        },
        function () {
            $('h1').removeClass('red');
        }
    );
    
});