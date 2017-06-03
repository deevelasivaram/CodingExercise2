var app = angular.module('numberOrd', ['number']);

app.controller('MainCtrl', function($scope) {
  $scope.orgnum = '';
   
  $scope.order = function(num){
	console.log(num);
	var result = [];
	for(var i=0; i<num.length;i++){
		result.push(num[i])
	}
	$scope.ordernum = result;
  }
});
