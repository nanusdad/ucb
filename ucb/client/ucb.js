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

Template.slider.rendered = function() {
	$(document).ready(function() {
		$(".carousel").carousel();
	});
}

Template.modal.helpers({
	app_name: function() {
		return Session.get('app_name');
	},
	alerts: function() {
		var a = [];
		if (Session.get('app_name') != null) {
			var a = Metrics.findOne({
				"sub_items.sub_item_name": Session.get('app_name')
			}, {
				fields: {
					"sub_items.alerts": 1
				}
			});
			a.sub_items.forEach(function(element, index, array) {
				if (element.sub_item_name == Session.get('app_name')) {
					a = element.alerts;
				} else {
					return false;
				}
			});
		}
		return a;
	},
	formatDstamp: function(dstamp) {
		return moment(dstamp, "YYYY/MM/DD HH:mm:ss").format("MM/DD HH:mm");
	},
	formatMsgtext: function(mtext) {
		var re = new RegExp('\"', 'g');
		return mtext.replace(re, '');
	},
	formatPopover: function(alert) {
		var ret_html = '<small>';
		if (alert.node) {
			ret_html = ret_html + '<b>Node: </b>' + alert.node + '<br />';
		}
		if (alert.msggrp) {
			ret_html = ret_html + '<b>MsgGrp: </b>' + alert.msggrp + '<br />';
		}
		if (alert.env) {
			ret_html = ret_html + '<b>Env: </b>' + alert.env + '<br />';
		}
		if (alert.source) {
			ret_html = ret_html + '<b>Source: </b>' + alert.source + '<br />';
		}
		if (alert.ticketnumber) {
			ret_html = ret_html + '<b>Ticket Number: </b>' + alert.ticketnumber + '<br />';
		}
		if (alert.text) {
			var re = new RegExp('\"', 'g');
			var clean_text = (alert.text).replace(re, '');
			ret_html = ret_html + '<b>Text: </b>' + clean_text + '<br />';
		}
		ret_html = ret_html + '</small>';
		return ret_html;
	}

})

Template.modal.rendered = function() {
	$(".a_details").popover({
		trigger: "hover",
		width: "auto",
		html: true
	});
}