$('#login').on("click", function(){
    window.location.replace("login.html")
})

$('#register').on("click", function(){
    window.location.replace("register.html")
})

$('.logout').on("click", function(){
    window.location.replace('logout.php')
})

$.ajax({
    type: 'POST',
    url: 'role.json',
    success: function(data){
        if(data.role === "Customer"){
            $('#guest').css('display', 'none')
            $('#customer').css('display', 'inherit')
            $('#staff').css('display', 'none')
            $('#admin').css('display', 'none')
        }
        else if(data.role === "Staff"){
            $('#guest').css('display', 'none')
            $('#customer').css('display', 'none')
            $('#staff').css('display', 'inherit')
            $('#admin').css('display', 'none')
        }
        else if(data.role === "Admin"){
            $('#guest').css('display', 'none')
            $('#customer').css('display', 'none')
            $('#staff').css('display', 'none')
            $('#admin').css('display', 'inherit')
        }
        else{
            $('#guest').css('display', 'inherit')
            $('#customer').css('display', 'none')
            $('#staff').css('display', 'none')
            $('#admin').css('display', 'none')
        }
    }
})

$.ajax({
    type: 'GET',
    url: 'profile.json',
    success: function(data){
        $('.name').text(data.name)
        document.getElementsByClassName('profilePicture')[0].src = data.profile_picture
        document.getElementsByClassName('profilePicture')[1].src = data.profile_picture
        document.getElementsByClassName('profilePicture')[2].src = data.profile_picture
    }
})