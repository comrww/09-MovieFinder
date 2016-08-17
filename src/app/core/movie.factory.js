(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    function movieFactory($http, $q) {

        var service = {
            getMovie: getMovie,
            getMovieDetails: getMovieDetails,
            getMoviePoster: getMoviePoster
        };

        return service;

        ///////////

        function getMovie(movieID) {
            var deferred = $q.defer();

            $http.get('https://www.omdbapi.com/?s='+ movieID).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                }
            );

            return deferred.promise;
        }

        function getMoviePoster(movieID) {
            var deferred = $q.defer();

            $http.get('http://img.omdbapi.com/?apikey=b4e51543&'+ movieID).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                }
            );

            return deferred.promise;
        }
   
        function getMovieDetails(movieID) {
            var deferred = $q.defer();

            $http.get('https://www.omdbapi.com/?i='+ movieID).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                }

            );

            return deferred.promise;
        }
 }

})();
