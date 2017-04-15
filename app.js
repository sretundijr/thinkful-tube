// alert('linked');
var GOOGLE_YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: "AIzaSyCYO1fN9WfTeLA3nxKCUMsRa-R8cNNaGyY"
  }
    // console.log($.getJSON(GOOGLE_YOUTUBE_BASE_URL, query, callback));
    $.getJSON(GOOGLE_YOUTUBE_BASE_URL, query, callback);
}

function displayYouTubeSearchResults(data) {
//   var resultElement = '';
  var arr = [];
  console.log(data.items);
  if(data.item !== 0){
      arr = data.items.map(function(item){
        return '<div class="col-4 thumbnails">'+
                  '<div class="img-container">'+
                    '<h3>'+item.snippet.channelTitle+'</h3>'+
                    '<h4>'+item.snippet.description+'</h4>'+
                    '<a href='+"https://www.youtube.com/watch?v=" + item.id.videoId +' target=_blank>'+
                        '<img class="thumbnail-img" src=' +item.snippet.thumbnails.high.url + ' alt=thumbnail></img>'+
                    '</a>'+
                    '<a href='+"https://www.youtube.com/channel/" + item.snippet.channelId+' target=_blank>'+
                      '<p>'+item.snippet.channelTitle+'</p>'+
                    '</a>'+
                  '</div>'+
                '</div>';
      })
  }
  // console.log($('.js-search-results'));
  // $('.js-search-results').each(function(index){
    // console.log($(this));
    $('.js-search-results').html(arr.join(''));
  // })//.html(arr.join(''));  
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchResults);
  });
}

$(function(){watchSubmit();});

