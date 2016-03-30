var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('currentPhoto', new PhotoEntryModel());
    this.set('photoList', this.get('library'));

    params.library.on('showPhoto', function(model) {
      this.set('currentPhoto', model);
    }, this);
  }

});