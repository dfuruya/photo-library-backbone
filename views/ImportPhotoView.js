var ImportPhotoView = Backbone.View.extend({
  events: {
    'submit': function(e) {
      e.preventDefault();

      var urlInput = this.$('#photo-url').val();
      var titleInput = this.$('#photo-title').val();

      this.collection.addPhoto(urlInput, titleInput);
      
      this.render();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(
      '<form>' + 
      'Photo URL:<input type="text" id="photo-url" value="">' + 
      'Photo name:<input type="text" id="photo-title" value="">' + 
      '<input type="submit" value="Submit">' + 
      '</form>'
    );
  }
});
