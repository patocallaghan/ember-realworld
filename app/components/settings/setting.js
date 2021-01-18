import Component from '@glimmer/component';
import { ensureSafeComponent } from '@embroider/util';
import { task } from 'ember-concurrency-decorators';

const APP_PACKAGES_WITH_SETTINGS = ['a', 'b', 'c', 'd'];

export default class Settings extends Component {
  constructor() {
    super(...arguments);
    this.loadSettingsComponentIfAny.perform();
  }

  @task
  *loadSettingsComponentIfAny() {
    if (this.hasSettingsComponent) {
      let module = yield import(`../settings/${this.args.setting.identifier}/main`);
      this.settingsComponent = ensureSafeComponent(module.default, this);
    }
  }

  get hasSettingsComponent() {
    return APP_PACKAGES_WITH_SETTINGS.includes(this.args.setting.identifier);
  }

  get settingsComponentPath() {
    return `settings/${this.args.setting.identifier}/main`;
  }
}
