/****************************************
			miniNotif.js
		Created by Jo Colina
			@jsmrcaga

			with love
				2015
***************************************/

function notification(title, options){
	

	this.title = title;

	this.show = function(){
		var returnTemp;
		if (! ("Notification" in window)){
			returnTemp = {
				code : 001,
				message: 'Notifications unexistant or not enabled'
			};

			return returnTemp;

		}else if (Notification.permission === "granted") {
			var notif = new Notification(this.title, options);

			returnTemp = {
				code: 002,
				message: "Notification set and Shown"
			};
			return returnTemp;

		}else if(Notification.permission !== 'denied'){
			Notification.requestPermission(function (permission){
				if (permission === "granted"){

					var notif = new Notification(this.title, options);

					returnTemp = {
						code: 003,
						message: "Notification set and Shown (Chrome)"
					};
					return returnTemp;
				}else{
					returnTemp={
						code : 004,
						message: "Notifications permission denied"
					};
					return returnTemp;
				}
			});

		}else if (Notification.permission === "denied"){
			returnTemp={
				code : 004,
				message: "Notifications permission denied"
			};
			return returnTemp;
		}

	}

	


}

var miniNotif={
	new: function(title, body, icon){
		new notification(title, {body: body || null, icon: icon || null}).show();
	},

	withId: function(id, title, body, icon){
		if (typeof id == "undefined") throw new Error("Id is required when calling miniNotif.withId");
		new notification(title, {body: body || null, icon: icon ||null, tag: id}).show();
	}



};