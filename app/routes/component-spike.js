import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ComponentSpikeRoute extends Route {
  @service store;
  model() {
    this.store.pushPayload({
      settings: [
        {
          id: 1,
          identifier: 'a',
        },
        {
          id: 2,
          identifier: 'b',
        },
        {
          id: 5,
          identifier: 'e',
        },
      ],
    });
    return this.store.peekAll('setting');
  }
}
