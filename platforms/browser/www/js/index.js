var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        // start to initialize PayPalMobile library
        app.initPaymentUI();
    },
    initPaymentUI : function () {
      var clientIDs = {
        "PayPalEnvironmentProduction": "AdKOBPVujaaCwWyCIKx2IYQzpm7ea7IJzQ2v_G6Hh_M1dvkH1Zkkmd_MsevlQC7vmHyQbtLzVqH7FH-5",
        "PayPalEnvironmentSandbox": "AaL6fMnsZlmkw5lqqnZ6We7iW6d1Sx6TWb-88lWoHiz3vxhpFGwq4U7wGH5x4kbrnfAdwXS2q_Gkvvp0"
      };
      PayPalMobile.init(clientIDs, app.onPayPalMobileInit);

    },
    onSuccesfulPayment : function(payment) {
      console.log("payment success: " + JSON.stringify(payment, null, 4));
	 Payment_Status = "YES";
	    var dataString ="&user_id=" + user_id + "&p_id="+ p_id  + "&price=" + price  + "&person=" + person + "&time=" + time + "&date=" + date + "&quantity=" + quantity +"&Payment_Status=" + Payment_Status +"&room=" + room +"&pickup="+ pickup + "&destination=" + destination + "&size=" + size;
			  
			 
                $.ajax({
                    type: "POST",
                    url: "http://govirtualstore.com/app/iOS/booking.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    dataType: "json",
                    complete: function (data) {
						console.log(data);
						var str= data;	
					
			
			   alert("Booking successfull" );
			  
			
                    }
					
                });
    },
    // This code is only used for independent card.io scanning abilities
    onCardIOComplete: function(card) {
      console.log("Card Scanned success: " + JSON.stringify(card, null, 4));
    },
    onAuthorizationCallback : function(authorization) {
      console.log("authorization: " + JSON.stringify(authorization, null, 4));
    },
    createPayment : function () {
      // for simplicity use predefined amount
      // optional payment details for more information check [helper js file](https://github.com/paypal/PayPal-Cordova-Plugin/blob/master/www/paypal-mobile-js-helper.js)
       var paymentDetails = new PayPalPaymentDetails("1.00", "0.00", "0.00");
       var payment = new PayPalPayment(price, "USD", p_name, "Sale", paymentDetails);
	    // var paymentDetails = new PayPalPaymentDetails("50.00", "0.00", "0.00");
      // var payment = new PayPalPayment(price, "USD", "funny bar", "Sale", paymentDetails);
      return payment;
    },
    configuration : function () {
      // for more options see `paypal-mobile-js-helper.js`
      var config = new PayPalConfiguration({merchantName: "My test shop", merchantPrivacyPolicyURL: "https://mytestshop.com/policy", merchantUserAgreementURL: "https://mytestshop.com/agreement"});
      return config;
    },
    onPrepareRender : function() {
      // buttons defined in index.html
      //  <button id="buyNowBtn"> Buy Now !</button>
      //  <button id="buyInFutureBtn"> Pay in Future !</button>
      //  <button id="profileSharingBtn"> ProfileSharing !</button>
      //  <button id="cardScanBtn">Advanced: Use card.io scan only</button>
      var buyNowBtn = document.getElementById("buyNowBtn");
      var buyInFutureBtn = document.getElementById("buyInFutureBtn");
      var profileSharingBtn = document.getElementById("profileSharingBtn");
      var cardScanBtn = document.getElementById("cardScanBtn");

      buyNowBtn.onclick = function(e) {
        // single payment
        PayPalMobile.renderSinglePaymentUI(app.createPayment(), app.onSuccesfulPayment, app.onUserCanceled);
      };

      buyInFutureBtn.onclick = function(e) {
        // future payment
        PayPalMobile.renderFuturePaymentUI(app.onAuthorizationCallback, app.onUserCanceled);
      };

      profileSharingBtn.onclick = function(e) {
        // profile sharing
        PayPalMobile.renderProfileSharingUI(["profile", "email", "phone", "address", "futurepayments", "paypalattributes"], app.onAuthorizationCallback, app.onUserCanceled);
      };
      
      cardScanBtn.onclick = function(e) {
        // card.io scanning independent of paypal payments. 
        // This is used for cases where you only need to scan credit cards and not use PayPal as funding option.
        CardIO.scan({
                     "requireExpiry": true,
                     "requireCVV": false,
                     "requirePostalCode": false,
                     "restrictPostalCodeToNumericOnly": true
                   },
                   app.onCardIOComplete,
                   app.onUserCanceled
                 );
       };
    },
    onPayPalMobileInit : function() {
      // must be called
      // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
      PayPalMobile.prepareToRender("PayPalEnvironmentProduction", app.configuration(), app.onPrepareRender);
    },
    onUserCanceled : function(result) {
       // window.location="categories.html";
	   Payment_Status = "No";
	    var dataString ="&user_id=" + user_id + "&p_id="+ p_id  + "&price=" + price  + "&person=" + person + "&time=" + time + "&date=" + date + "&quantity=" + quantity +"&Payment_Status=" + Payment_Status + "&room=" + room +"&pickup="+ pickup + "&destination=" + destination + "&size=" + size ;
			  
			 
                $.ajax({
                    type: "POST",
                    url: "http://govirtualstore.com/app/iOS/booking.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    dataType: "json",
                    complete: function (data) {
						console.log(data);
						var str= data;	
					
			
			   alert("Booking unsuccessfull" );
			  
			
                    }
					
                });
	   // alert("Payment not done");
	  console.log(result);
    }
};

app.initialize();