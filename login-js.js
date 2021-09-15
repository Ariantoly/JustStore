$('#form').submit(function (e) {
    e.preventDefault();

    const email = $('#txtEmail').val();
    const password = $('#txtPassword').val();
    let remember, status;

    if($('#chxRemember').attr('checked') == 'true') remember = true;
    else remember = false;

    $.ajax({
        type: 'POST',
        url: 'login-php.php',
        data: {
            email: email,
            password: password
        },
        success: function (data) {
            data = JSON.parse(data);
            if(data[0] === "success"){
                window.location.replace('home.html')
            }
            else{
                alert('Please make sure your email and password are correct')
            }
        },
    });

    $.ajax({
        type: 'POST',
        url: 'cookie-login.php',
        data: {
            email: email,
            password: password,
            remember: remember
        },
        success: function (data) {
            data = JSON.parse(data);
        }
    });
});

$('#btnView').click(function(){
    if($('#txtPassword').attr('type') === "password"){
        $('#eye').removeClass('fa-eye')
        $('#eye').addClass('fa-eye-slash')
        document.getElementById('txtPassword').type = 'text'
    }
    else{
        $('#eye').removeClass('fa-eye-slash')
        $('#eye').addClass('fa-eye')
        document.getElementById('txtPassword').type = 'password'
    }
})
