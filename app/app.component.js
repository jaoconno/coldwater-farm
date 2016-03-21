System.register(['angular2/core', './homepage.component', './puppies.component', './males.component', './females.component', './upcoming.component', './contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, homepage_component_1, puppies_component_1, males_component_1, females_component_1, upcoming_component_1, contact_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (puppies_component_1_1) {
                puppies_component_1 = puppies_component_1_1;
            },
            function (males_component_1_1) {
                males_component_1 = males_component_1_1;
            },
            function (females_component_1_1) {
                females_component_1 = females_component_1_1;
            },
            function (upcoming_component_1_1) {
                upcoming_component_1 = upcoming_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [homepage_component_1.HomepageComponent, puppies_component_1.PuppiesComponent, males_component_1.MalesComponent, females_component_1.FemalesComponent, upcoming_component_1.UpcomingComponent, contact_component_1.ContactComponent],
                        template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a id=\"header\" class=\"navbar-brand\" href=\"#\">ColdWater Farm</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n          <li role=\"presentation\" class=\"active\" ><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\n          <li role=\"presentation\"><a href=\"#puppies\" aria-controls=\"puppies\" role=\"tab\" data-toggle=\"tab\">Puppies</a></li>\n          <li role=\"presentation\"><a href=\"#upcoming\" aria-controls=\"upcoming\" role=\"tab\" data-toggle=\"tab\">Upcoming Litters</a></li>\n          <li role=\"presentation\"><a href=\"#males\" aria-controls=\"males\" role=\"tab\" data-toggle=\"tab\">Males</a></li>\n          <li role=\"presentation\"><a href=\"#females\" aria-controls=\"females\" role=\"tab\" data-toggle=\"tab\">Females</a></li>\n          <li role=\"presentation\"><a href=\"#contact\" aria-controls=\"contact\" role=\"tab\" data-toggle=\"tab\">Contact Us</a></li>\n        </ul>\n\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    <div class=\"tab-content\">\n       <div id=\"home\" role=\"tabpanel\" class=\"tab-pane active\">\n           <homepage></homepage>\n       </div>\n       <div id=\"puppies\" role=\"tabpanel\" class=\"tab-pane\">\n           <puppies></puppies>\n       </div>\n       <div id=\"upcoming\" role=\"tabpanel\" class=\"tab-pane\">\n           <upcoming></upcoming>\n       </div>\n       <div id=\"males\" role=\"tabpanel\" class=\"tab-pane\">\n           <males></males>\n       </div>\n       <div id=\"females\" role=\"tabpanel\" class=\"tab-pane\">\n           <females></females>\n       </div>\n       <div id=\"contact\" role=\"tabpanel\" class=\"tab-pane\">\n           <contact></contact>\n       </div>\n    </div>\n    <div class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container\">\n      <p class=\"navbar-text pull-left\">\u00A9 1999-2016\n      Coldwater Farm: Quality Working Line German Shepherd Puppies and Dogs <br/>\nPO Box 824 \nStokesdale NC, 27357 <br/>\nPh: 336-908-3237 \nEmail: coldwaterhorses@coldwaterhorses.com\n      </p>\n    </div>    \n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map