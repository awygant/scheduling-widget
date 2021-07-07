import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { LOCATIONS_DUMMY_DATA } from '../utils/constants';

export default class LocationRoute extends Route {
  @service store;

  queryParams = {
    id: {
      refreshModel: true
    }
  };

  model(params) {
    const adapter = this.store.adapterFor('locations');
    return adapter.findByServiceId(params.id)
      .catch(e => {
        console.log(`Error retrieving locations: ${e}`);
        return LOCATIONS_DUMMY_DATA;
      });
  }
}
