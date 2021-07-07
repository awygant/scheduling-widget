import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'scheduling-widget/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.hostURL;
  headers = {
    'Accept': 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web'
  };

  pathForType() {
    return `client-portal-api/`;
  }
}
