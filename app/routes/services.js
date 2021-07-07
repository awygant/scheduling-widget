import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { SERVICES_DUMMY_DATA } from '../utils/constants';

export default class ServiceRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('services')
      .catch(e => {
        console.log(`Error retrieving services: ${e}`);
        return SERVICES_DUMMY_DATA;
      });
  }
}
