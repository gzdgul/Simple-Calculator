//const element_output = document.getElementById('output');
$(document).ready(() => {

        $('#one').click(() => $('#output').text($('#output').text() + '1'));
        $('#two').click(() =>  $('#output').text($('#output').text() + '2'));
        $('#three').click(() => $('#output').text($('#output').text() + '3'));
        $('#four').click(() => $('#output').text($('#output').text() + '4'));
        $('#five').click(() => $('#output').text($('#output').text() + '5'));
        $('#six').click(() => $('#output').text($('#output').text() + '6'));
        $('#seven').click(() => $('#output').text($('#output').text() + '7'));
        $('#eight').click(() => $('#output').text($('#output').text() + '8'));
        $('#nine').click(() => $('#output').text($('#output').text() + '9'));
        $('#zero').click(() => $('#output').text($('#output').text() + '0'));
        $('#dzero').click(() => $('#output').text($('#output').text() + '00'));
        $('#dot').click(() => $('#output').text($('#output').text() + '.'));

        $('#divide').click(() => $('#output').text($('#output').text() + '/'));
        $('#times').click(() => $('#output').text($('#output').text() + '*'));
        $('#minus').click(() => $('#output').text($('#output').text() + '-'));
        $('#plus').click(() => $('#output').text($('#output').text() + '+'));

    $('.button').click(() => {
        $('#output').css('display', 'block');
        $('#output2').css('display', 'none');
        const newText = $('#output').text();
        console.log(newText);

        if (newText.toString().length === 15) {
            ////////////////////////////////////
        }
    });

     $('#clear').click(() => {
         $('#output2').css('display', 'block');
         $('#output').css('display', 'none');
         $('#output').text('');
         $('#output2').text('0');

     });
     $('#equal').click(() => {
         $('#output2').text(eval($('#output').text()));
         $('#output2').css('display', 'block');
         $('#output').text('');
         $('#output').css('display', 'none');
     });

});