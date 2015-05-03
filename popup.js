var videoId = [];
var videoImg = [];
var videoTitle = [];

function getYoutubeData(){
  $.getJSON( "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7VsXvNd0gBetxo2ruDjZ7qnMwV_TeEYo&channelId=UCy1Ms_5qBTawC-k7PVjHXKQ&part=snippet,id&order=date&maxResults=4", function(data){
    for (i = 0; i < 4; i++) {
      videoId.push(data.items[i].id.videoId);
      videoImg.push(data.items[i].snippet.thumbnails.high.url);
      videoTitle.push(data.items[i].snippet.title);
    }
    setYoutubeData();

  })
}

function setYoutubeData(){
  for (i = 0; i < 4; i++){
    $('#video-link-' + (i+1)).attr('href', 'https://www.youtube.com/watch?v=' + videoId[i]);
    $('.video-img')[i].src = videoImg[i];
    $('.video-title')[i].innerHTML = videoTitle[i];
  }
}

getYoutubeData();
