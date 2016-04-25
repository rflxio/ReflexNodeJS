(function(angular, undefined) {
  angular.module("reflexNodeJsApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);