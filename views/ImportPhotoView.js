var ImportPhotoView = Backbone.View.extend({
  events: {
    'submit': function(e) {
      e.preventDefault();
      
      var urlInput = this.$('#photo-url');
      var titleInput = this.$('#photo-title');
      
      this.collection.addPhoto(urlInput, titleInput);

      urlInput.val('');
      titleInput.val('');
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(
      '<form>' + 
      'Photo URL:<input type="text" id="photo-url" value="http://mw2.google.com/mw-panoramio/photos/medium/11144931.jpg">' + 
      'Photo name:<input type="text" id="photo-title" value="">' + 
      '<input type="submit" value="Submit">' + 
      '</form>'
    );
  }

});
