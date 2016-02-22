(function(){
    angular
      .module('spotify', ['ngResource'])
      .factory('spotifySearch', spotifySearch)
      .factory('spotifyArtist', spotifyArtist)
      .directive('spotifyPlayer', previewPlayer);

    spotifySearch.$inject = ['$resource'];
    spotifyArtist.$inject = ['$resource'];
    spotifyController.$inject = ['spotifySearch'];

    function spotifySearch($resource){
      return $resource("https://api.spotify.com/v1/search?type=track&market=MX&q=:song");
    }

    function spotifyArtist($resource){
      return $resource("https://api.spotify.com/v1/artists/:id");
    }

    function previewPlayer(){
          var directive = {
            restrict: 'EA',
            templateUrl: '/app/partials/player.html',
            controller: spotifyController,
            controllerAs: 'spotify',
            replace : true
          };
          return directive;
    }

    function spotifyController(spotifySearch){
      var spotify = this;
      spotify.playlist = null;
      spotify.song   = null;
      spotify.audio  = new Audio;
      spotify.play   = play;
      spotify.search = search;
      spotify.milliseconds = milliseconds;

      function milliseconds(ms){
        var min = Math.floor((ms/1000/60) << 0);
        var sec = Math.floor((ms/1000) % 60);
        return min+":"+sec;

      }

      function play(song){
        spotify.song = song;
        spotify.audio.pause();
        spotify.audio.src = song.preview_url;
        spotify.audio.play();

      }

      function search(){
        spotifySearch.get({'song': spotify.song_name})
          .$promise.
            then(function(response){
              spotify.playlist = response.tracks.items;
              spotify.play(response.tracks.items[0]);
            });
      }

    }
})();