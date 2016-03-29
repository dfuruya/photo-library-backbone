var DisplayView = Backbone.View.extend({
  events: {
    'change option': this.changeRating
  },

  initialize: function() {
    this.render();
  },

  getPhoto: function(photo) {
    this.model = photo;
    this.render();
  },

  changeRating: function(e) {
    console.log('rating changed');
    this.model.setRating(e.target.value);
    this.render();
  },

  render: function() {
    this.$el.html('<p>Title: ' + this.model.get('title') + '</p>' + 
      '<p>Rating: ' + this.model.get('rating') + ' out of 5</p>' + 
      '<p>Select Rating: ' + 
      '<select>' + 
      '<option value="1">1</option>' + 
      '<option value="2">2</option>' + 
      '<option value="3">3</option>' + 
      '<option value="4">4</option>' + 
      '<option value="5">5</option>' + 
      '</select>' + 
      '</p>' + 
      '<img src=' + this.model.get('url') + ' />'
    );
    return this;
  }
});
