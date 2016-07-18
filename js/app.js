angular.module("miniRouting",["ui.router"])
.config(function($stateProvider,$urlRouterProvider){



    $stateProvider
    .state("state",{
      url: "/",
      templateUrl:"js/home/homeTmpl.html",
      controller: "homeCtrl"
    })
    .state("settings",{
    url: "/settings",
    templateUrl:"js/settings/settingsTmpl.html",
    controller: "settingsCtrl"
  })
    .state("products",{
      url: "/products/:id",
      templateUrl:"js/products/productTmpl.html",
      controller:"productCtrl"
    });

    $urlRouterProvider
    .otherwise("/");

});
