$(function () {
    $("input").hide();
    $(".element").hide();

    let paragrafai = document.getElementsByTagName('input');
    for (let i = 0; i < paragrafai.length; ++i){
        let paragrafas = paragrafai[i];
        paragrafas.style.display = 'none';
    }

    let uuid1 = $("#uuid");
    uuid1.hide();

    let uuid2 = document.getElementById('uuid2');
    uuid2.style.display = 'none';

    $('#lempute').attr('src', '/img/on.png');

});

$('#lempute').click(function () {

    $('#lempute').show();

})