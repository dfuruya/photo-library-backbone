var PhotoEntryModel = Backbone.Model.extend({
  defaults: {
    title: 'NO IMAGE',
    url: 'http://brixmor.propertycapsule.com/property/images/No_Image.png',
    rating: 0
  },

  // initialize: function() {
  // },

  showPhoto: function() {
    this.trigger('showPhoto', this);
  },

  changeRating: function() {
    this.trigger('changeRating', this)
  }

  // addURL: function(url) {
  //   this.set('url', url);
  // },

});