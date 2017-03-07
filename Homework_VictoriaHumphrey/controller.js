var midterm = angular.module("midterm", []);
midterm.controller("nameCtrl", function($scope) {
$scope.data = [
                    { 'name':'Victoria',
                    	'lastname': 'Humphrey',
                    	'grade': 98}
                    ];
$scope.addRow = function(){		
	$scope.data.push({ 'name':$scope.name, 'lastname': $scope.lastname, 'grade':$scope.grade });
	$scope.name='';
	$scope.lastname='';
	$scope.grade='';
};
});
