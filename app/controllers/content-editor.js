import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked messageType = 'chat';

  @action
  setMessageType(type) {
    this.messageType = type;
  }
}
