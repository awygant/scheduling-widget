import ApplicationAdapter from './application';
import config from 'scheduling-widget/config/environment';

export default class ServicesAdapter extends ApplicationAdapter {
  pathForType() {
    return `client-portal-api/offices?filter[clinicianId]=${config.clinicianID}`;
  }

  findByServiceId(id) {
    return fetch(`${this.host}/${this.pathForType()}&filter[cptCodeId]=${id}`, {
      headers: this.headers
    });
  }
}
