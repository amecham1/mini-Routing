angular.module("miniRouting"["ui-router"])
.controller("homeCtrl",homeCtrl);

function homeCtrl($stateParams,productService){
  if ($stateParams.id === 'shoes') {
      $scope.productData = productService.shoeData;
  }
  else if ($stateParams.id === 'socks') {
      $scope.productData = productService.sockData;
  }
}


}
