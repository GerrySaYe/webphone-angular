import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebphoneService {

  constructor() { }

  /**
   * loadScript
   */
  public loadScript() {
   console.log('preparando el webphoneApi :)')
   let node = document.createElement('script');
   node.src = 'assets/911/webphone_api.js?jscodeversion=340';
  node.type = 'text/javascript';
  node.async = true;
  document.getElementsByTagName('head')[0].appendChild(node);
  }

  /**
   * loadHelper
   */
  public loadHelper() {
  console.log('preparando el helper :)')
  let node1 = document.createElement('script');
  node1.src = 'assets/911/js/lib/iframe_helper.js?jscodeversion=340';
 node1.type = 'text/javascript';
 node1.async = true;
 document.getElementsByTagName('head')[0].appendChild(node1);
  }
}
