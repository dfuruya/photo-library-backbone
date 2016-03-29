var Photos = Backbone.Collection.extend({
  model: PhotoEntryModel,

  addPhoto: function(url, title) {
    var photoToImport = new PhotoEntryModel({'title': title, 'url': url});
    // photoToImport.url = url;
    // photoToImport.title = title;
    this.add(photoToImport);
  }
});