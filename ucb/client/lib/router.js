var Router = Backbone.Router.extend({
  routes: {
    "": "main",
    "about": "about",
    "history": "history",
    "volunteer": "volunteer",
    "orgs_table": "orgs_table"
  },
  main: function() {
    Session.set('currentPage', 'homePage');
    this.navigate('/');
  },
  history: function() {
    //History page
    Session.set('currentPage', 'history');
    this.navigate('history');
  },
  about: function() {
    //About page
    Session.set('currentPage', 'about');
    this.navigate('about');
  },
  volunteer: function() {
    //Volunteer page
    Session.set('currentPage', 'volunteer');
    this.navigate('volunteer');
  },
  orgs_table: function() {
    //Members page
    Session.set('currentPage', 'orgs_table');
    this.navigate('orgs_table');
  }
});

//$('').attr('src', "./img/glyphicons-halflings.png");

var app = new Router;
Meteor.startup(function() {
  Backbone.history.start({
    pushState: true
  });
});