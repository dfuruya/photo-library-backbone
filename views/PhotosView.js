var PhotosView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.append('<th>Images</th>');

    var entries = this.collection.map(function(model) {
      return new PhotoEntryView({model: model});
    });

    var $els = entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);
    return this;
  }
});
