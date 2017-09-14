<script>
     // Defaults to sessionStorage for storing the Facebook token
     openFB.init({appId: '1631000013585116'});
    //  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
    //  openFB.init({appId: 'YOUR_FB_APP_ID', tokenStore: window.localStorage});
    function login() {
        openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
    }
    function getInfo() {
        openFB.api({
            path: '/me',
            success: function(data) {
                console.log(JSON.stringify(data));
                document.getElementById("userName").innerHTML = data.name;
                document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
            },
            error: errorHandler});
    }
    <!-- function share() { -->
        <!-- openFB.api({ -->
            <!-- method: 'POST', -->
            <!-- path: '/me/feed', -->
            <!-- params: { -->
                <!-- message: document.getElementById('Message').value || 'Testing Facebook APIs' -->
            <!-- }, -->
            <!-- success: function() { -->
                <!-- alert('the item was posted on Facebook'); -->
            <!-- }, -->
            <!-- error: errorHandler}); -->
    <!-- } -->
    <!-- function readPermissions() { -->
        <!-- openFB.api({ -->
            <!-- method: 'GET', -->
            <!-- path: '/me/permissions', -->
            <!-- success: function(result) { -->
                <!-- alert(JSON.stringify(result.data)); -->
            <!-- }, -->
            <!-- error: errorHandler -->
        <!-- }); -->
    <!-- } -->
    <!-- function revoke() { -->
        <!-- openFB.revokePermissions( -->
                <!-- function() { -->
                    <!-- alert('Permissions revoked'); -->
                <!-- }, -->
                <!-- errorHandler); -->
    <!-- } -->
    function logout() {
        openFB.logout(
                function() {
                    alert('Logout successful');
                },
                errorHandler);
    }
    function errorHandler(error) {
        alert(error.message);
    }
</script>

        </section>                      

        <script>
		function signin(){
              
             var email = $("#sign_email").val();
             var pass = $("#sign_pass").val();
			 
			
			 var dataString = "&email=" + email + "&pass=" + pass;
			  if ($.trim(email).length > 0 && $.trim(pass).length > 0) {
                    $.ajax({
                    url: "http://govirtualstore.com/app/iOS/iOSlogin.php",
                    type: "POST",
                    data: {email: email,pass:pass},
                    success: function(data){
					var str= data;	
			if(data.Status == "success"){
			   alert("Welcome, "+ str.username);
			   window.location.href = "categories.html?user="+str.id+"&email="+email+"";
			}
			else{
				alert("Email or Password Incorrect : Please Retry");
				window.location.href = "login.html";
			    }
                        
                    }
                    });   
                
         }
		 else { alert("Please Fill in all fields");}		 
        };
		</script>