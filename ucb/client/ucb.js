// Get Metrics collection
Meteor.subscribe("orgs");

// Send metrics on to HTML
Template.orgs_table.orgs = function() {
	return Orgs.find({}, {
		sort: {
			item: 1
		}
	});
};

Template.orgs_table.showTable = function() {
	return Session.get("currentPage") == 'orgs_table';
}


Template.gallery.rendered = function() {
	// TODO : Change this to jQuery 
	if (document.getElementById('links')) {
		document.getElementById('links').onclick = function(event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {
					index: link,
					event: event
				},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		}
	}
}


Template.about.showAbout = function() {
	return Session.get("currentPage") == 'about';
}

Template.main.showMain = function() {
	return Session.get("currentPage") == 'homePage';
}

Template.history.showHistory = function() {
	return Session.get("currentPage") == 'history';
}

Template.volunteer.showVol = function() {
	return Session.get("currentPage") == 'volunteer';
}

Template.gallery.showGallery = function() {
	return Session.get("currentPage") == 'gallery';
}

Template.slider.rendered = function() {
	$(document).ready(function() {
		$(".carousel").carousel();
	});
}