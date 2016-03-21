import {Component} from 'angular2/core';
import {HomepageComponent} from './homepage.component';
import {PuppiesComponent} from './puppies.component';
import {MalesComponent} from './males.component';
import {FemalesComponent} from './females.component';
import {UpcomingComponent} from './upcoming.component';
import {ContactComponent} from './contact.component';
@Component({
    selector: 'my-app',
    directives: [HomepageComponent, PuppiesComponent, MalesComponent, FemalesComponent, UpcomingComponent, ContactComponent],
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a id="header" class="navbar-brand" href="#">ColdWater Farm</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          <li role="presentation" class="active" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
          <li role="presentation"><a href="#puppies" aria-controls="puppies" role="tab" data-toggle="tab">Puppies</a></li>
          <li role="presentation"><a href="#upcoming" aria-controls="upcoming" role="tab" data-toggle="tab">Upcoming Litters</a></li>
          <li role="presentation"><a href="#males" aria-controls="males" role="tab" data-toggle="tab">Males</a></li>
          <li role="presentation"><a href="#females" aria-controls="females" role="tab" data-toggle="tab">Females</a></li>
          <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab">Contact Us</a></li>
        </ul>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="tab-content">
       <div id="home" role="tabpanel" class="tab-pane active">
           <homepage></homepage>
       </div>
       <div id="puppies" role="tabpanel" class="tab-pane">
           <puppies></puppies>
       </div>
       <div id="upcoming" role="tabpanel" class="tab-pane">
           <upcoming></upcoming>
       </div>
       <div id="males" role="tabpanel" class="tab-pane">
           <males></males>
       </div>
       <div id="females" role="tabpanel" class="tab-pane">
           <females></females>
       </div>
       <div id="contact" role="tabpanel" class="tab-pane">
           <contact></contact>
       </div>
    </div>
    <div class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
      <p class="navbar-text pull-left">© 1999-2016
      Coldwater Farm: Quality Working Line German Shepherd Puppies and Dogs <br/>
PO Box 824 
Stokesdale NC, 27357 <br/>
Ph: 336-908-3237 
Email: coldwaterhorses@coldwaterhorses.com
      </p>
    </div>    
  </div>`
    })
export class AppComponent { }
