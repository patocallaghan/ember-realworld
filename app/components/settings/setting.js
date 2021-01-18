import Component from '@glimmer/component';
import { ensureSafeComponent } from '@embroider/util';
import { importSync } from '@embroider/macros';

const APP_PACKAGES_WITH_SETTINGS = ['a', 'b', 'c', 'd'];

export default class Settings extends Component {
  get hasSettingsComponent() {
    return APP_PACKAGES_WITH_SETTINGS.includes(this.args.setting.identifier);
  }

  get settingsComponentPath() {
    return `settings/${this.args.setting.identifier}/main`;
  }

  get settingsComponent() {
    let module = importSync(`../settings/${this.args.setting.identifier}/main`);
    return ensureSafeComponent(module.default, this);
  }
}
