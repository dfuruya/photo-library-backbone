var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('currentPhoto', new PhotoEntryModel());
    this.set('rating', new Photos());

    params.library.on('showPhoto', function(photo) {
      this.set('currentPhoto', photo);
    }, this);

    params.library.on('setRating', function(photo) {
      this.set('rating', photo.model.rating);
    }, this);
  }

});