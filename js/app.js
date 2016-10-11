(function(){

	var app = angular.module('duty',['ngAnimate', 'ngTouch', 'ngFader']);
	app.controller('DutyController', function(){
		this.duties=duties;
	}); 

	var duties=[
		{
			venue:'RDS',
			report: '1 hr before kickoff',
			parking: 'Simmoscourt',
			public_transport: 'Bus: #4, 7, 18 Dart: Landsdowne Rd or Sandyford stop',
		},
		{
			venue:'Aviva',
			report: '3 hr before kickoff',
			parking: 'N/A',
			public_transport: 'Bus: #4, 7, 18 Dart: Landsdowne Rd',
		}
	];
})();