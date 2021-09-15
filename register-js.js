window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            if ($('#txtName').val().length > 0 && $('#txtName').val().length < 3) {
                $('#alertName').html('Name must be more than or equal to 3 characters')
            }
            if ($('#txtAddress').val().length > 0 && $('#txtAddress').val().length < 10) {
                $('#alertAddress').html('Address must be more than or equal to 10 characters')
            }
            if ($('#txtPhone').val().length > 0 && $('#txtPhone').val().length < 10) {
                $('#alertPhone').html('Phone must be more than or equal to 10 characters')
            }
            else if (!$('#txtPhone').val().match("[0-9+]{10, 20}")) {
                $('#alertPhone').html('Phone must be numeric')
            }
            if (!$('#txtEmail').val().match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")) {
                $('#alertEmail').html('Please use the email format')
            }
            if ($('#txtPassword').val().length > 0 && $('#txtPassword').val().length < 6) {
                $('#alertPassword').html('Password must be more than or equal to 6 characters')
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

$('#btnViewP').click(function(){
    if($('#txtPassword').attr('type') === "password"){
        $('#eyeP').removeClass('fa-eye')
        $('#eyeP').addClass('fa-eye-slash')
        document.getElementById('txtPassword').type = 'text'
    }
    else{
        $('#eyeP').removeClass('fa-eye-slash')
        $('#eyeP').addClass('fa-eye')
        document.getElementById('txtPassword').type = 'password'
    }
})

$('#btnViewRP').click(function(){
    if($('#txtRePassword').attr('type') === "password"){
        $('#eyeRP').removeClass('fa-eye')
        $('#eyeRP').addClass('fa-eye-slash')
        document.getElementById('txtRePassword').type = 'text'
    }
    else{
        $('#eyeRP').removeClass('fa-eye-slash')
        $('#eyeRP').addClass('fa-eye')
        document.getElementById('txtRePassword').type = 'password'
    }
})

function fileValidation(){
    if ($('#filePP').get(0).files.length !== 0) {
        let ext = ['png', 'jpg', 'jpeg']
        let fileExt = $('#filePP').get(0).files[0].name.split('.')
        let flag = 0;
        for(let i = 0; i < 3; i++){
            if(fileExt[fileExt.length - 1] == ext[i]){
                flag = 1;
                break;
            }
        }
        if(flag == 0) return "ext"
        else if($('#filePP').get(0).files[0].size > 1024 * 1024 * 2) return "size"
        else return ""
    }
}
