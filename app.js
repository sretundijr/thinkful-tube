// alert('linked');
var GOOGLE_YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    part: "snippet",
    type: "video",
    key: "AIzaSyCYO1fN9WfTeLA3nxKCUMsRa-R8cNNaGyY"
  }
    // console.log($.getJSON(GOOGLE_YOUTUBE_BASE_URL, query, callback));
    $.getJSON(GOOGLE_YOUTUBE_BASE_URL, query, callback);
}

function displayYouTubeSearchResults(data) {
  var resultElement = '';
  console.log(data.items[0]);
  resultElement += '<a href='+"https://www.youtube.com/watch?v=" + data.items[0].id.videoId +
  ' target=_blank><img src=' +data.items[0].snippet.thumbnails.high.url + ' alt=thumbnail></img></a>';

  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchResults);
  });
}

$(function(){watchSubmit();});

