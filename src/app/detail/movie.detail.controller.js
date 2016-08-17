(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$stateParams', 'movieFactory'];

    /* @ngInject */
    function MovieDetailController($stateParams, movieFactory) {
        var vm = this;
        
        movieFactory.getMovieDetails($stateParams.movieId).then(
            //Change city to title
            function(data) {
                console.log(data);
                vm.movieData = data;
            },
            function(error) {

            }
        );
    }
})();
