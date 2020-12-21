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
    });

    //handle the empty number field or invalid phone number and recharge amount

    let phoneNumber = document.getElementById('phone_number');
    let amount = document.getElementById('amount');
    let amountError = document.getElementById('amount_error');
    let phoneNumberError = document.getElementById("phone_number_error");
    let accNumber = document.getElementById("acc_number");
    let pinNumber = document.getElementById("pin_number");
    let accNumberError = document.getElementById("acc_number_error");
    let pinNumberError = document.getElementById("pin_number_error");

    $("#phone_number").on('input',e=>{
        e.preventDefault();
        if((phoneNumber.value).length === null){
            phoneNumberError.innerHTML = 'This field can not be empty';
        }
        else if((phoneNumber.value).length > 11 || (phoneNumber.value).length < 11 ){
            phoneNumberError.innerHTML = 'Invalid phone number';
        }else{
            phoneNumberError.innerHTML = '';
        }
        
    });

    $("#amount").on('input',e=>{
        e.preventDefault();

        if(Number(amount.value) === 0 || Number(amount.value) < 10){
            amountError.innerHTML = 'Amount can not be below 10';
        }else{
            amountError.innerHTML = '';
        }
    });

    $("#acc_number").on('input',e=>{
        e.preventDefault();
        if((accNumber.value).length === null){
            accNumberError.innerHTML = 'This field can not be empty';
        }
        else if((accNumber.value).length > 11 || (accNumber.value).length < 11 ){
            accNumberError.innerHTML = 'Invalid Account number';
        }else{
            accNumberError.innerHTML = '';
        }
    });

    $("#pin_number").on('input',e=>{
        e.preventDefault();
        if((pinNumber.value).length === null){
            pinNumberError.innerHTML = 'This field can not be empty';
        }
        else{
            pinNumberError.innerHTML = '';
        }
    });
    
    //on input the phone number the operator logo will be shown and operator name will be selected from the option select
    $('#phone_number').on("input",e=>{
        e.preventDefault();

        if((($('#phone_number').val()).toString()).startsWith('017') || (($('#phone_number').val()).toString()).startsWith('013')){
            $("select option[value='gp']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Grameephone_Logo.png");
            $("#skitto").removeClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if((($('#phone_number').val()).toString()).startsWith('018')){
            $("select option[value='robi']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/robilogo.png")
            $("#skitto").addClass('uk-hidden');
            $("#gstore").removeClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if((($('#phone_number').val()).toString()).startsWith('016')){
            $("select option[value='airtel']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Airtel_logo.svg")
            $("#skitto").addClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").removeClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if((($('#phone_number').val()).toString()).startsWith('019')){
            $("select option[value='banglalink']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Banglalink_logo.png")
            $("#skitto").addClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").removeClass('uk-hidden');
        }
        else if((($('#phone_number').val()).toString()).startsWith('015')){
            $("select option[value='teletalk']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/teletalk_logo.svg");
        }else{
            $("#operator_image").attr("src"," ");
            phoneNumberError.innerHTML = 'Invalid phone number';
        }
    });

    //function for showing the options on cliking the chevron-down icon in phone Number input
    $('#operator-select').hide();
    $('#dropDown').on('click',e =>{
        e.preventDefault();
        $('#operator-select').show();
        setTimeout(()=>{
            $('#operator-select').hide();
        },4000)
    });

    $("#operator-selection").on('change',e=>{
        e.preventDefault();

        if($("#operator-selection").val() === 'gp' ){
            $("#operator_image").attr("src","./assets/images/Grameephone_Logo.png");
            $("#skitto").removeClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if($("#operator-selection").val() ==='airtel'){
            $("#operator_image").attr("src","./assets/images/Airtel_logo.svg");
            $("#skitto").addClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").removeClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if($("#operator-selection").val() ==='banglalink'){
            $("#operator_image").attr("src","./assets/images/Banglalink_logo.png");
            $("#skitto").addClass('uk-hidden');
            $("#gstore").addClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").removeClass('uk-hidden');
        }
        else if($("#operator-selection").val() ==='robi'){
            $("#operator_image").attr("src","./assets/images/robilogo.png");
            $("#skitto").addClass('uk-hidden');
            $("#gstore").removeClass('uk-hidden');
            $("#tong").addClass('uk-hidden');
            $("#amarOffer").addClass('uk-hidden');
        }
        else if($("#operator-selection").val() ==='teletalk'){
            $("#operator_image").attr("src","./assets/images/teletalk_logo.svg");
        }
    });

    // animation for welcome page
    setTimeout(()=>{
        $('#welcome-part').hide();
        $('.login-part').removeClass('uk-hidden');
    },1000)
});