var app = angular.module("myapp", ["ngRoute"]); 
app.config(function ($routeProvider) { 
$routeProvider 
.when("/home", { 
templateUrl: "views/exercise1/home.html" 
}) 
.when("/about", { 
templateUrl: "views/exercise1/about.html" 
}) 
.when("/contact", { 
templateUrl: "views/exercise1/contact.html" 
}) 
.when("/feedback", { 
templateUrl: "views/exercise1/feedback.html" 
}) 
.when("/faq", { 
templateUrl: "views/exercise1/faq.html"
}) 
.when("/account/login", { 
    templateUrl: "views/exercise1/account/login.html" 
}) 
.when("/account/register", { 
    templateUrl: "views/exercise1/account/register.html" 
}) 
.when("/account/forgot", { 
    templateUrl: "views/exercise1/account/forgot.html" 
}) 
.when("/account/logoff", { 
    redirectTo: "/home" 
}) 
.when("/account/change", { 
    templateUrl: "views/exercise1/account/change.html" 
}) 
.when("/account/profile", { 
    templateUrl: "views/exercise1/account/profile.html" 
}) 
.when("/account/orders", { 
    templateUrl: "views/exercise1/account/orders.html" 
}) 
.when("/account/products", { 
    templateUrl: "views/exercise1/account/products.html" 
}) 
.when("/category/:id", { 
    templateUrl: "views/exercise1/ProductList.html", 
    controller:"categoryCtrl" 
}) 
.when("/supplier/:id", { 
    templateUrl: "views/exercise1/ProductList.html", 
    controller: "supplierCtrl" 
}) 
.when("/special/:id", { 
    templateUrl: "views/exercise1/ProductList.html", 
    controller: "specialCtrl" 
}) 
.otherwise({ 
    redirectTo: "/home" 
}); 
}); 
app.run(function ($rootScope) { 
$rootScope.$on('$routeChangeStart', function () { 
    $rootScope.loading = true; 
}); 
$rootScope.$on('$routeChangeSuccess', function () { 
    $rootScope.loading = false; 
}); 
$rootScope.$on('$routeChangeError', function () { 
    $rootScope.loading = false; 
    alert("Lỗi"); 
}); 
});