Meteor.startup(function() {
  // code to run on server at startup
  console.log('Started');
});

Meteor.publish('orgs', function(){
  return Orgs.find({});
});
