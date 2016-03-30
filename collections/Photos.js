var Photos = Backbone.Collection.extend({

  model: PhotoEntryModel,

  addPhoto: function(url, title) {
    var photoToImport = new PhotoEntryModel();
    
    photoToImport.set({'title': title, 'url': url, 'rating': 0});

    this.add(photoToImport);
  }
});