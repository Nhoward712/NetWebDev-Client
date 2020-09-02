$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();

        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#code').html($(this).data('code'))
        $('#product').html($(this).data('item'))
        $('#toast').toast({ autohide: false }).toast('show');
    })
});

$(document).on('keyup', (e)=> {
    //console.log(e)
    if (e.key === "Escape") {
        $('#toast').toast('hide');
    }

});