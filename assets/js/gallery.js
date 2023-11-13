import 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min.js'

var app = angular.module('app', ['ngAnimate'])

app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.boxes = [
	{
		name: 'Friends',
		image: 'https://www.designboom.com/cms/images/anita04/carsten13.jpg'
	},
	{
		name: 'Free',
		image: 'https://static.designboom.com/cms/images/anita04/carsten25.jpg'
	},
	{
		name: 'Explore',
		image: 'https://static.designboom.com/cms/images/anita04/carsten24.jpg'
	},
	// {
	// 	name: 'Vast',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten19.jpg'
	// },
	{
		name: 'Playful',
		image: 'https://static.designboom.com/cms/images/anita04/carsten02.jpg'
	},
	{
		name: 'Grand',
		image: 'https://static.designboom.com/cms/images/anita04/carsten05.jpg'
	},
	{
		name: 'Mist',
		image: 'https://static.designboom.com/cms/images/anita04/carsten08.jpg'
	},
	// {
	// 	name: 'Sea',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten12.jpg'
	// },
	// {
	// 	name: 'Reach',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten15.jpg'
	// },
	{
		name: 'Awe',
		image: 'https://static.designboom.com/cms/images/anita04/carsten03.jpg'
	},
	{
		name: 'Surf',
		image: 'https://static.designboom.com/cms/images/anita04/carsten21.jpg'
	},
	{
		name: 'Thrill',
		image: 'https://static.designboom.com/cms/images/anita04/carsten20.jpg'
	},
 ];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
}])

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
		}
	}
})

app.directive('bigBox', ['$timeout', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
}])