var photoData = [
  {
    title: 'Early to Rise',
    url: 'http://proof.nationalgeographic.com/files/2016/02/160301-best-of-pod-01.jpg',
    rating: 4
  },
  {
    title: 'Sacred Swim',
    url: 'http://proof.nationalgeographic.com/files/2016/02/160301-best-of-pod-02.jpg',
    rating: 5
  },
  {
    title: 'Balancing Act',
    url: 'http://proof.nationalgeographic.com/files/2016/02/160301-best-of-pod-03.jpg',
    rating: 2
  },
  {
    title: 'Eagle Hunter',
    url: 'http://proof.nationalgeographic.com/files/2016/02/160301-best-of-pod-04.jpg',
    rating: 3
  }
];

var library = new Photos(photoData);

var app = new AppModel({
  library: library
});

var appView = new AppView({
  model: app
});

// $('body').append(appView.render());