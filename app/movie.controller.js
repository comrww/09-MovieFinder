(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('MovieController', MovieController);

		MovieController.$inject = ['movieFactory']

		function MovieController(movieFactory){

			var vm = this;
			
			vm.searchInput = '';

			vm.inputResults = inputResults

			function inputResults(movie) {
				//Change city to title

			movieFactory.getMovie(movie).then(
				//Change city to title
				function(data) {
					console.log(data)
					vm.movieData = data;
				},
				function(error) {

				}
			);}

		}
})();