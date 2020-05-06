(function () {
    'use strict';

    angular
        .module('NgSortable')
        .directive('sortable', function () {
            return {
                restrict: 'A',
                transclude: true,
                template:
                    '<span ng-click="onClick_Sort();" class="sortable">' +
                        '<span ng-transclude></span>' +
                        '<i class="fa" ng-class="{\'fa-sort-desc\' : field === by && !reverse, \'fa-sort-asc\' : field === by && reverse}"></i>' +
                    '</span>',
                scope: {
                    field: '=',
                    by: '=',
                    reverse: '='
                },
                link: function (scope, element, attrs) {
                    scope.onClick_Sort = onClick_Sort;

                    function onClick_Sort() {
                        if (scope.field === scope.by) {
                            scope.reverse = !scope.reverse;
                        } else {
                            scope.by = scope.field;
                            scope.reverse = false;
                        }
                    }
                }
            };
        });
})(); 
 
