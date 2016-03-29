var PhotoEntryModel = Backbone.Model.extend({
  defaults: {
    title: 'NO IMAGE',
    url: 'http://brixmor.propertycapsule.com/property/images/No_Image.png',
    rating: 0
  },

  showPhoto: function() {
    this.trigger('showPhoto', this);
  },

  setRating: function(rating) {
    this.set('rating', rating);
  }

});