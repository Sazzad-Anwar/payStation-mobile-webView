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
    document.getElementById('recharge').addEventListener('click',e=>{
        e.preventDefault();
        let phoneNumber = document.getElementById('phone_number');
        let amount = document.getElementById('amount');
        let amountError = document.getElementById('amount_error');
        let phoneNumberError = document.getElementById("phone_number_error")
        console.log(Number(amount.value));

        if((phoneNumber.value).length === 0 ){
            phoneNumberError.innerHTML = 'Phone number can not be null';
        }else{
            phoneNumberError.innerHTML = '';
        }
        if((phoneNumber.value).length > 11 || (phoneNumber.value).length < 11){
            phoneNumberError.innerHTML = 'Invalid phone number';
        }else{
            phoneNumberError.innerHTML = '';
        }
        if(Number(amount.value) === 0 || Number(amount.value) < 10){
            amountError.innerHTML = 'Amount can not be below 10';
        }else{
            amountError.innerHTML = '';
        }
    });
    
    //on input the phone number the operator logo will be shown and operator name will be selected from the option select
    $('#phone_number').change(e=>{
        e.preventDefault();

        

        if((($('#phone_number').val()).toString()).startsWith('017') || (($('#phone_number').val()).toString()).startsWith('013')){
            $("select option[value='gp']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Grameephone_Logo.png")
            let opition = new Option("Skitto", "skitto");
            $("#package").append(opition);
        }
        if((($('#phone_number').val()).toString()).startsWith('018')){
            $("select option[value='robi']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/robilogo.png")
            let opition = new Option("G-store", "gstore");
            $("#package").append(opition);
        }
        if((($('#phone_number').val()).toString()).startsWith('016')){
            $("select option[value='airtel']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Airtel_logo.svg")
            let opition = new Option("Tong", "tong");
            $("#package").append(opition);
        }
        if((($('#phone_number').val()).toString()).startsWith('019')){
            $("select option[value='banglalink']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/Banglalink_logo.png")
            let opition = new Option("Amar Offer", "amarOffer");
            $("#package").append(opition);
        }
        if((($('#phone_number').val()).toString()).startsWith('015')){
            $("select option[value='teletalk']").attr('selected',"selected");
            $("#operator_image").attr("src","./assets/images/teletalk_logo.svg");
        }
    });
    
    $('#alert').click(e=>{
        e.preventDefault();
        alert('Add Balance');
    })
});