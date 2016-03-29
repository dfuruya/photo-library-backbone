var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('currentPhoto', new PhotoEntryModel());
    this.set('currentRating', new Photos());

    params.library.on('showPhoto', function(photo) {
      this.set('currentPhoto', photo);
    }, this);

    params.library.on('setRating', function(photo) {
      this.set('currentRating', photo.model.rating);
    }, this);

  }

  // addURL: function(url) {
  //   this.set('url', url);
  // },

});