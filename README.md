#miniNotif.js

##Small JS to handle Desktop Notifications

###Only to use if you are extremely lazy

##Description
----
This simple library is designed to help you add desktop notifications to your websites. It uses the default API (Notification object) to create and display said notifications.
You can obviously use that API instead (demands a little bit more work (handling exceptions etc...)), however this library does not (yet) have support for event handlers within
notifications.

##Installation
----
Just download miniNotif.js and add it at the beginning of your projects:
```html
<script type="text/javascript" src='js/miniNotif.js'></script>
```
or use the hosted one from this project:
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/jsmrcaga/miniNotif/master/miniNotif.js"></script>
```

##Simple part

There are two simple ways of displaying the notifications, the methods `new(title, body, icon)` and `withId(tag, title, body, icon)`.
They belong to the object `miniNotif` so they're used as:
```javascript
miniNotif.new("This is some title", "AND HERE'S THE BODY", "http://bit.ly/1CYSdFQ");
```


##Creating the object

`var myNotif = new notification('title', options);`

Options is an object of settings designed to display the notification. They are optional (however `body` is recommended, as is `icon`), you will need:

```javascript
var options = {
	
	dir: '' //direction of text, values 'ltr' (left to right) or 'rtl' (right to left)

	lang: '' //language of notification

	tag: '' //an ID for your notification

	body: 'This is the text inside my notif' //the text to be displayed in your notification

	icon: 'URL' //icon to be displayed, URL to local or hosted
	
}

```
##Displaying the notification

`myNotif.show()`

##Object responses:

###CODE and MESSAGE:
	1: Notifications disabled or not existant
	2: Notification set and shown
	3: Notification set and shown (special)
	4: Permission denied

To use simply create a variable as follows:
	`var notif = myNotif.show()`
And access `code` and `message` as objet properties:
	`notif.code`
	`notif.message`