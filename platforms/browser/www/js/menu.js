     function getParameterByName(name, url) {
         if (!url) url = window.location.href;
         name = name.replace(/[\[\]]/g, "\\$&");
         var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
             results = regex.exec(url);
         if (!results) return null;
         if (!results[2]) return '';
         return decodeURIComponent(results[2].replace(/\+/g, " "));
     }
     var name = getParameterByName('name');
     var user_id = getParameterByName('user');
     var email = getParameterByName('email');
     var fbpic = getParameterByName('fbpic');
     var fname = getParameterByName('fname');
     var pass = getParameterByName('password');
     var img = getParameterByName('image');
     var address = getParameterByName('address');
     var country = getParameterByName('country');
     var contact = getParameterByName('contact');
     var code = getParameterByName('code');

     function back() {
         window.history.go(-1);

     }

     function op() {

         $("#loadertxt").hide();
         $("#loader").hide();

         document.getElementById('emailid').innerHTML = email;
         document.getElementById("userPic").src = fbpic;

     }

     function regshow() {
         $('#register').show();

     }

     function reghide() {
         $('#register').hide();

     }

     function loadhide() {

         $("#loadertxt").hide();
         $("#loader").hide();
         $('#register').hide();
     }

     function loadshow() {
         $("#loadertxt").show();
         $("#loader").show();
     }

     function showreview(id) { window.location = "showreview.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "&name=" + id + ""; }

     function category() { window.location = "categories.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + ""; }

     function supermarketpage() {
         window.location = "innersupermarket.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function barpage() {
         window.location = "bar.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function restaurantpage() {
         window.location = "restaurant.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function nightclubspage() {
         window.location = "nightclub.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function carspage() {
         window.location = "cars.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function hospitalpage() {
         window.location = "hospital.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function hotelpage() {
         window.location = "hotelsearch.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function clothingpage() {
         window.location = "clothing.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function moviepage() {
         window.location = "movie.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function pharmacypage() {
         window.location = "pharmacy.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function massagepage() {
         window.location = "massage.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function hairsalonpage() {
         window.location = "hairsalon.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function casinopage() {
         window.location = "casino.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function drycleanpage() {
         window.location = "dryclean.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function tailorpage() {
         window.location = "tailor.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function airlinepage() {
         window.location = "flightSearch.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
         // window.location="airline.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
     }

     function logout() {
         disconnectUser();
         window.location = "login.html";
     }

     function paidproduct() {

         window.location = "paidproduct.html?user=" + user_id + "&email=" + email + "&fbpic=" + fbpic + "";
     }

     function progress() { alert("Sorry! Page is in progress!"); }



     function sidemenu() {
         $($($($("#sidemenu").children()).children())).css("font-family", "Microsoft NeoGothic");
         $("#sidemenu").append("<ul  data-role='listview' data-inset='false' data-theme='b'><li><a id='go_logout' onclick='supermarketpage()' >Supermarkets</a></li><li><a id='go_logout' onclick='restaurantpage()' style='font-family:'Microsoft NeoGothic';'>Restaurants</a></li> <li><a id='go_logout' onclick='barpage()' style='font-family:'Microsoft NeoGothic';'>Bars</a></li> <li><a id='go_logout' onclick='nightclubspage()' style='font-family:'Microsoft NeoGothic';'>Night Clubs</a></li> <li><a id='go_logout' onclick='carspage()' style='font-family:'Microsoft NeoGothic';'>Cars</a></li> <li><a id='go_logout' onclick='hospitalpage()' style='font-family:'Microsoft NeoGothic';'>Hospitals</a></li> <li><a id='go_logout' onclick='hotelpage()' style='font-family:'Microsoft NeoGothic';'>Hotels</a></li><li><a id='go_logout' onclick='clothingpage()' style='font-family:'Microsoft NeoGothic';'>Clothing</a></li> <li><a id='go_logout' onclick='moviepage()' style='font-family:'Microsoft NeoGothic';'>Movies</a></li> <li><a id='go_logout' onclick='pharmacypage()' style='font-family:'Microsoft NeoGothic';'>Pharmacies</a></li> <li><a id='go_logout' onclick='massagepage()' style='font-family:'Microsoft NeoGothic';'>Massage</a></li> <li><a id='go_logout' onclick='hairsalonpage()' style='font-family:'Microsoft NeoGothic';'>Hair Salon</a></li> <li><a id='go_logout' onclick='casinopage()' style='font-family:'Microsoft NeoGothic';'>Casinos</a></li> <li><a id='go_logout' onclick='drycleanpage()' style='font-family:'Microsoft NeoGothic';'>Dry Cleaning</a></li> <li><a id='go_logout' onclick='tailorpage()' style='font-family:'Microsoft NeoGothic';'>Tailoring</a></li> <li><a id='go_logout' onclick='airlinepage()' style='font-family:'Microsoft NeoGothic';'>Airlines</a></li> <li><a id='go_logout' onclick='logout()' style='font-family:'Microsoft NeoGothic';'>Logout</a></li></ul>");
     }


     // capture image or from gallery upload to server       


     function takephoto() {
         navigator.camera.getPicture(uploadPhoto, onFail, {
             quality: 40,
             correctOrientation: true,
             saveToPhotoAlbum: true,
             destinationType: Camera.DestinationType.FILE_URL
         });
     }

     function uploadFromGallery() {

         // Retrieve image file location from specified source
         navigator.camera.getPicture(uploadPhoto,
             function(message) { alert('get picture failed'); }, {
                 quality: 40,
                 correctOrientation: true,
                 destinationType: navigator.camera.DestinationType.FILE_URI,
                 sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
             }
         );

     }

     function onFail(message) {
         alert('Failed because: ' + message);
     }

     function uploadPhoto(imageURI) {
         loadshow();
         var options = new FileUploadOptions();
         options.fileKey = "file";
         // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
         mystring = imageURI.substr(imageURI.lastIndexOf('/') + 1);
         var newchar = '1';
         mystring = mystring.split('?').join(newchar);
         options.fileName = mystring;
         options.mimeType = "image/jpeg";
         imagesrc = imageURI;
         document.getElementById("userimg").src = imagesrc;
         // alert("save "+imagesrc);
         var email = getParameterByName('email');

         var params = new Object();
         options.params = params;
         options.chunkedMode = false;
         var ft = new FileTransfer();
         // alert(imageURI);
         ft.upload(imageURI, encodeURI("http://govirtualstore.com/app/iOS/imageuploadSignup.php?email=" + email + ""), win, fail, options);
     }

     function win(r) {
         loadhide();
         regshow();
         //alert("An upload: Code = " + r.response);
         // alert("Code = " + r.responseCode);
         // alert("Response = " + r.response);
         // alert("Sent = " + r.bytesSent);
     }

     function fail(error) {
         loadhide();
         // alert("Check Internet connection = " + error.code);
         alert("Check Internet connection");
         // alert("upload error source " + error.source);
         // alert("upload error target " + error.target);
     }
     // end uploading

     //gmail

     var googleapi = {
         authorize: function(options) {
             var deferred = $.Deferred();
             //Build the OAuth consent page URL
             var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + $.param({
                 client_id: options.client_id,
                 redirect_uri: options.redirect_uri,
                 response_type: 'code',
                 scope: options.scope
             });

             //Open the OAuth consent page in the InAppBrowser
             var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');

             //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
             //which sets the authorization code in the browser's title. However, we can't
             //access the title of the InAppBrowser.
             //
             //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
             //authorization code will get set in the url. We can access the url in the
             //loadstart and loadstop events. So if we bind the loadstart event, we can
             //find the authorization code and close the InAppBrowser after the user
             //has granted us access to their data.
             $(authWindow).on('loadstart', function(e) {
                 var url = e.originalEvent.url;
                 var code = /\?code=(.+)$/.exec(url);
                 var error = /\?error=(.+)$/.exec(url);

                 if (code || error) {
                     //Always close the browser when match is found
                     authWindow.close();
                 }

                 if (code) {
                     //Exchange the authorization code for an access token
                     $.post('https://accounts.google.com/o/oauth2/token', {
                         code: code[1],
                         client_id: options.client_id,
                         client_secret: options.client_secret,
                         redirect_uri: options.redirect_uri,
                         grant_type: 'authorization_code'
                     }).done(function(data) {
                         deferred.resolve(data);

                         $("#loginStatus").html('Name: ' + data.given_name);
                     }).fail(function(response) {
                         deferred.reject(response.responseJSON);
                     });
                 } else if (error) {
                     //The user denied access to the app
                     deferred.reject({
                         error: error[1]
                     });
                 }
             });

             return deferred.promise();
         }
     };
     var accessToken;
     var UserData = null;

     function callGoogle() {

         //  alert('starting');
         googleapi.authorize({
             client_id: '365314528621-5kugsfau3sseau9vhghp8ommh0kaq5sq.apps.googleusercontent.com',
             client_secret: 'AJtToGkKhswkAgG00zrrymAR',
             redirect_uri: 'http://localhost',
             scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
         }).done(function(data) {
             accessToken = data.access_token;
             // alert(accessToken);
             // $loginStatus.html('Access Token: ' + data.access_token);
             console.log(data.access_token);
             console.log(JSON.stringify(data));
             getDataProfile();

         });

     }

     // This function gets data of user.
     function getDataProfile() {
         // loadshow();

         var options = { dimBackground: true };
         SpinnerPlugin.activityStart("Signing in...", options);
         var term = null;
         //  alert("getting user data="+accessToken);
         $.ajax({
             url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + accessToken,
             type: 'GET',
             data: term,
             dataType: 'json',
             error: function(jqXHR, text_status, strError) {},
             success: function(data) {
                 var item;
                 // loadhide();
                 console.log(JSON.stringify(data));
                 // Save the userprofile data in your localStorage.
                 // localStorage.gmailLogin = "true";
                 // localStorage.gmailID = data.id;
                 fbid = data.id;
                 // localStorage.gmailEmail = data.email;
                 fbname = data.email;
                 // localStorage.gmailFirstName = data.given_name;
                 // localStorage.gmailLastName = data.family_name;
                 // localStorage.gmailProfilePicture = data.picture;
                 fbpic = data.picture;
                 // localStorage.gmailGender = data.gender;
                 // alert("id" + data.id + "email"+ data.email);
                 $.ajax({
                     url: "http://govirtualstore.com/app/iOS/loginfb.php",
                     type: "POST",
                     data: { fbname: fbname, fbid: fbid },
                     success: function(data) {
                         var str = data;
                         SpinnerPlugin.activityStop();
                         if (str.Status == "success") {


                             SpinnerPlugin.activityStop();
                             // alert("Welcome, " + str.username );
                             window.location = "categories.html?user=" + str.id + "&email=" + fbname + "&fbpic=" + fbpic + "";
                         }
                         if (str.Status == "exist") {
                             alert("Email already Exist, Try again");
                         }


                     }
                 });

             }
         });



         disconnectUser();
     }

     function disconnectUser() {
         var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' + accessToken;

         // Perform an asynchronous GET request.
         $.ajax({
             type: 'GET',
             url: revokeUrl,
             async: false,
             contentType: "application/json",
             dataType: 'jsonp',
             success: function(nullResponse) {
                 // Do something now that user is disconnected
                 // The response is always undefined.
                 accessToken = null;
                 console.log(JSON.stringify(nullResponse));
                 console.log("-----signed out..!!----" + accessToken);
             },
             error: function(e) {
                 // Handle the error
                 // console.log(e);
                 // You could point users to manually disconnect if unsuccessful
                 // https://plus.google.com/apps
             }
         });
     }

     //backbutton for ios
     function directionmap(id, address, city, country) {

         window.location = "getdirection.html?user=" + user_id + "&name=" + id + "&email=" + email + "&fbpic=" + fbpic + "&address=" + address + "&city=" + city + "&country=" + country + "";
     }