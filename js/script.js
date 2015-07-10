var debugMode = true;

// Debug Function
var debugMsg = function(msg) {
    if (debugMode)
        console.log("<<<|DEBUG|>>> " + msg);
};

var getRawList;

if (debugMode)
    debugMsg('Debug Mode Active!')

// Global Vars

// Create Angular App
var ngApp = angular.module('spotifyApp', ['spotify']);

// Creates Controller
ngApp.controller('primary', ['$scope', '$http', 'Spotify', function($scope, $http, Spotify) {
    $scope.returnArtistId = -1;
    $scope.showDescription = false;

    //Query by Artist
    $scope.searchArtist = function() {
        if ($scope.inputArtist) {
            $scope.returnArtistId = -1;
            $scope.showDescription = false;
        }
        Spotify.search($scope.inputArtist, 'artist', {limit: 10}).then( function(data) {
            $scope.rawArtistList = data.artists.items;
            getRawList = $scope.rawArtistList;
        });
    };

    $scope.artistSelected = function(artistId) {
        $scope.returnArtistId = artistId;
        $scope.showDescription = true;
    }

}]);

// Kinda works: return (() || ($scope.formSetup.username.$touched && ));