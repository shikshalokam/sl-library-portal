// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { KeycloakConfig } from 'keycloak-angular';
const keycloakBaseUrl = 'https://dev.shikshalokam.org'; //keycloak base url
const portal_url = 'https://devhome.shikshalokam.org/' // website  base url
const base_url = portal_url + 'admin-service/api/';  // api base url
let keycloakConfig: KeycloakConfig = {  //no change required
  url: keycloakBaseUrl + '/auth',
  realm: 'sunbird',
  clientId: 'sl-ionic-connect',
};
export const environment = {
  production: false,
  keycloak: keycloakConfig,
  base_url: base_url,
  keycloakBaseUrl: keycloakBaseUrl,
  portal_url: portal_url
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

