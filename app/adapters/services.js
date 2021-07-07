import ApplicationAdapter from './application';
import config from 'scheduling-widget/config/environment';

export default class ServicesAdapter extends ApplicationAdapter {
  pathForType() {
    return `client-portal-api/cpt-codes?filter[clinicianId]=${config.clinicianID}`;
  }

  findAll() {
    return fetch(`${this.host}/${this.pathForType()}`, {
      headers: this.headers
    });
  }
}
