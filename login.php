<!DOCTYPE html>
<html lang="en">
<head>

    <title>Login</title>
</head>
<body>


    <span>User Name</span>
    <input type="text" name="username" id="username" placeholder="User Name"><br><br>

    <span>Password</span>
    <input type="password" name="pw" id="password" placeholder="Password"><br><br>

    <input id="btnLogin" type="submit">


</body>
<script src="js/jquery-1.11.3.min.js"></script>
<script>
    $(function () {

        $("#btnLogin").click(function () {
            let username = $("#username").val();
            let password = $("#password").val();

            $.ajax({
                url : "http://localhost/live-cricket-updates/api/v1/login",
                type : "post",
                dataType : "json",
                data : {
                    "username": username,
                    "password": password
                },
                success: function (data) {
                    if(data.logged == true){
                        window.location = 'admin.php'
                    }else{
                        alert("wrong password")
                    }
                }
            })
        })



    })
</script>
</html>