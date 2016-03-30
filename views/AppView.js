var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    this.title = new TitleView();

    this.importPhotoView = new ImportPhotoView({
      collection: this.model.get('library')
    });

    this.photosView = new PhotosView({
      collection: this.model.get('library')
    });

    this.displayView = new DisplayView({
      model: this.model.get('currentPhoto')
    });


    this.model.on('change:currentPhoto', function(model) {
      this.displayView.getPhoto(model.get('currentPhoto'));
    }, this);

    this.render();
  },

  render: function() {
    this.$el.append([
      this.title.$el,
      this.importPhotoView.$el,
      this.photosView.$el,
      this.displayView.$el
    ]);
    return this;
  }
});
