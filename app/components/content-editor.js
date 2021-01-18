import Component from '@glimmer/component';
import ChatConfig from './content-editor/chat/config';
import EmailConfig from './content-editor/email/config';
import PostConfig from './content-editor/post/config';

const CONFIGURATION = {
  chat: ChatConfig,
  email: EmailConfig,
  post: PostConfig,
};

export default class ContentEditorComponent extends Component {
  get editorComponent() {
    return new CONFIGURATION[this.args.messageType || 'chat'](this);
  }
}
