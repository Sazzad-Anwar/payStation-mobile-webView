$(document).ready(function () {
    $('#balance').hide();

    $('#showBalance').click(e=>{
        e.preventDefault();
        $('#balanceTitle').hide();
        $('#balance').show();

        setTimeout(() => {
            $('#balance').hide();
            $('#balanceTitle').show();
        }, 2000);
    })
});