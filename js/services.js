//(function(){
//
//    var app = angular.module('crmService', []);
//
//
//    app.factory('clients', ['$http', function($http){
//
//        var _getClients = function (callback) {
//
//            callback = callback||function(){};
//
//            $http.get('/api.php/clients')
//                .then(function (data) {
//                    callback(data);111
//                });
//
//        };
//
//        var _getClient = function (clientId, success, error) {
//
//            success = success||function(){};
//            error = error||function(){};
//
//            $http.get('/api.php/client/'+clientId)
//                .then(function (data) {
//                    success(data);
//
//                })
//                .error(error);
//
//        };
//
//
//
//
//
//
//        return {
//            getClients: _getClients,
//            getClient: _getClient
//
//        };
//    }]);
//    //
//    //app.factory('users', ['$http', function($http){
//    //
//    //    var _getUsers = function (callback) {
//    //
//    //        callback = callback||function(){};
//    //
//    //        $http.get('/api.php/users')
//    //            .then(function (data) {
//    //                callback(data);
//    //            });
//    //
//    //    };
//    //
//    //    return {
//    //        getUsers: _getUsers
//    //    };
//    //}]);
//    //
//    //app.factory('sectors', ['$http', function($http){
//    //
//    //    var _getSectors = function (callback) {
//    //
//    //        callback = callback||function(){};
//    //
//    //        $http.get('/api.php/company-sectors')
//    //            .then(function (data) {
//    //                callback(data);
//    //            });
//    //
//    //    };
//    //
//    //    return {
//    //        getSectors: _getSectors
//    //    };
//    //}]);
//    //
//    //app.factory('timeline', ['$http', function($http){
//    //
//    //    var helperOptions = {
//    //        'phone': {
//    //            color: 'blue',
//    //            message: 'telefon do klienta'
//    //        },
//    //        'envelope-o': {
//    //            color: 'green',
//    //            message: 'wysyłka maila do klienta'
//    //        },
//    //        'users': {
//    //            color: 'purple',
//    //            message: 'spotkanie z kilentem'
//    //        },
//    //        'file-text-o': {
//    //            color: 'red',
//    //            message: 'podpisanie umowy z klientem'
//    //        }
//    //    };
//    //
//    //    var eventTypes = [
//    //        {
//    //            value: 'phone',
//    //            name: 'Kontakt telefoniczny'
//    //        },
//    //        {
//    //            value: 'envelope-o',
//    //            name: 'Kontakt mailowy'
//    //        },
//    //        {
//    //            value: 'users',
//    //            name: 'Spotkanie'
//    //        },
//    //        {
//    //            value: 'file-text-o',
//    //            name: 'Podpisanie umowy'
//    //        }
//    //    ];
//    //
//    //    var _timelineHelper = function (contactType, option) {
//    //
//    //        return helperOptions[contactType][option];
//    //
//    //    };
//    //
//    //    var __parseTimeline = function (timeline) {
//    //
//    //        angular.forEach(timeline, function (element, index) {
//    //            element['contact_date'] = new Date(element['contact_date']);
//    //        });
//    //
//    //        return timeline;
//    //    };
//    //
//    //    var _getClientTimeline = function (clientId, success) {
//    //
//    //        success = success||function(){};
//    //
//    //        $http.get('/api.php/client/'+clientId+'/timeline')
//    //            .then(function (timeline) {
//    //
//    //                timeline = __parseTimeline(timeline);
//    //
//    //                success(timeline);
//    //
//    //            });
//    //    };
//    //
//    //    var _addTimelineEvent = function (clientId, eventData, success) {
//    //
//    //        success = success||function(){};
//    //
//    //        $http.post('/api.php/client/'+clientId+'/timeline', eventData)
//    //            .then(function (data) {
//    //
//    //                var timeline = __parseTimeline(data.timeline);
//    //                success(timeline);
//    //
//    //            });
//    //
//    //    };
//    //
//    //    return {
//    //        getClientTimeline: _getClientTimeline,
//    //        getTimelineHelper: function () {
//    //            return _timelineHelper;
//    //        },
//    //        getEventTypes: function () {
//    //            return eventTypes;
//    //        },
//    //        addTimelineEvent: _addTimelineEvent
//    //    };
//    //}])
//
//})();