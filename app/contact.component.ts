import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
    <div class="col-sm-6 map">
      <div class="google-map-canvas" id="map-canvas">
      </div>
    </div>`
})
export class ContactComponent { }