import 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min.js'
const galleryPage = document.querySelector('#gallery')

galleryPage.innerHTML = 
 `
 <section class="slice" data-offset="10">
 <div class="slice-item" data-offset="20" onclick>
   Take A Closer Look
   <span class="Mask"><span>Take A Closer Look</span></span>
   <span class="Mask"><span>Take A Closer Look</span></span>
 </div>
</section>
	 
<div class="container" ng-class="{'no-scroll': selected.length}" ng-app="app" ng-controller="galleryCtrl">
 <div class="page">
   <div class="grid">
	 <div class="grid-item" ng-repeat="item in boxes">
	   <box class="box" item="item" on-select="selectBox" ng-class="{'selected': selected[0].item.name == item.name}"></box>
	 </div>
   </div>
 </div>
 <div class="fullscreen-background top-up" ng-show="selected.length" ng-style="{'background-image': 'url(' + selected[0].item.image + ')'}"></div>
 <div class="scroller" ng-show="selected.length">
   <a class="close-button" ng-click="clearSelection()">
	 <i class="material-icons">&times;</i>
   </a>
   <h1>{{selected[0].item.name}}</h1>
   <div big-box ng-repeat="item in selected" class="box on-top" position="item.position" selected="item.item">
	 <img ng-src="{{item.item.image}}" alt="" />
	 <div class="content">
	   <p>{{selected[0].item.data}}</p>
	 </div>
   </div>
   
 </div>
</div>
 `

const app = angular.module('app', ['ngAnimate'])

app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.boxes = [
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://www.designboom.com/cms/images/anita04/carsten13.jpg',
		data: 'Twelve male castrated reindeer'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten25.jpg',
		data: 'View from the bed'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten24.jpg',
		data: 'Elevator bed'
	},
	// {
	// 	name: 'Soma \u00A9 Designboom',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten19.jpg',
	// 	data: ''
	// },
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten02.jpg',
		data: 'Reindeer resting near the clock'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten05.jpg',
		data: 'Dried and Fresh mushrooms stored within the fridge'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten08.jpg',
		data: 'Reindeer urine is also stored within the fridge'
	},
	// {
	// 	name: 'Soma \u00A9 Designboom',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten12.jpg',
	// 	data: ''
	// },
	// {
	// 	name: 'Soma \u00A9 Designboom',
	// 	image: 'https://static.designboom.com/cms/images/anita04/carsten15.jpg',
	// 	data: ''
	// },
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten03.jpg',
		data: 'Eight freezer cubes are found within a laboratory setting'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten21.jpg',
		data: 'Details in mushrooms'
	},
	{
		name: 'Soma \u00A9 Designboom',
		image: 'https://static.designboom.com/cms/images/anita04/carsten20.jpg',
		data: 'Double mushroom clock'
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