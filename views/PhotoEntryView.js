var PhotoEntryView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    'click': function() {
      this.model.showPhoto();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append(this.model.get('title'));
  }
});
