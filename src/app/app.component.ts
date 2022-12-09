import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { VERSION, ViewChild, ElementRef } from "@angular/core"; 
import { splitNsName } from '@angular/compiler';
import { Router } from '@angular/router';
import { WebphoneService } from "./service/webphone.service";

declare var webphone_api:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  
  title = 'MapaTest';
  attributes: any;
  map: any;
  cities=["CDMX","Guadalajara","Villahermosa","Monterrey","Kotka"];
  selectedCity = "Ninguna";
  coords: any = [60.462908, 26.944273];

  /* Variables para WebPhone */
    Anumber: any;
    Bnumber: any;

  constructor(
    private router: Router,
    private webphoneService: WebphoneService
  ) {
    /* this.webphoneService.loadHelper(); */
    this.webphoneService.loadScript();
  }

  /* nuevo */
  public ngAfterViewInit(): void {
    this.loadMap();

    webphone_api.parameters['autoaction'] = 1;
    webphone_api.parameters['autostart'] = 0;
    
  }

  private loadMap(): void {
    this.map = new Map('dinamicMap').setView([22.686778, -102.331324],5);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      
  }
  


flymap(): void {
  if (this.selectedCity=="CDMX") {
    this.coords=[19.423543, -99.134777];
    this.map.flyTo(this.coords,12);
    this.Anumber="5593627314";
    this.Bnumber="030105566726424";
    webphone_api.parameters['callto'] = this.Bnumber;
  } else if (this.selectedCity=="Guadalajara") {
    this.coords=[20.665426, -103.349149];
    this.map.flyTo(this.coords,12);
    this.Anumber="4497350577";
    this.Bnumber="030105547603419";
    webphone_api.parameters['callto'] = this.Bnumber;
  } else if (this.selectedCity=="Villahermosa") {
    this.coords=[17.987628, -92.947285];
    this.map.flyTo(this.coords,12);
  } else if (this.selectedCity=="Monterrey") {
    this.coords=[25.690193, -100.318900];
    this.map.flyTo(this.coords,12);
  } else if (this.selectedCity=="Kotka") {
    this.coords=[60.462908, 26.944273];
    this.map.flyTo(this.coords,14);
  }
}


C2C911(): void {
  if (this.selectedCity=="CDMX") {
    webphone_api.setparameter('username', 'Test1');
    webphone_api.setparameter('password', '12345678');
    webphone_api.setparameter('displayname:', this.Anumber);
    webphone_api.call(webphone_api.parameters['callto']);
  } if (this.selectedCity=="Guadalajara") {
    webphone_api.setparameter('username', 'Test1');
    webphone_api.setparameter('password', '12345678');
    webphone_api.setparameter('displayname:', this.Anumber);
    webphone_api.call(webphone_api.parameters['callto']);
  } 
  else {
    window.open("https://www.google.com" , '_blank');
  }
  
}

}
