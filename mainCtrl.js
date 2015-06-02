var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	// GET THE QUOTES! ////////////////////////////////////////
	$scope.quotes = dataService.getData();



	// ADD A QUOTE! ///////////////////////////////////////////
	$scope.addQuote = function () {
		dataService.addData($scope.inputField);
	}

	// DELETE A QUOTE! ////////////////////////////////////////
	$scope.deleteQuote = function () {
		dataService.removeData($scope.inputField);
	}


	$scope.filterQuotes = function () {
		$scope.filterBy = $scope.inputField;
	}



});