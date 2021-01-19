import Component from '@glimmer/component';
import { executePrecompiledHandlebarsTemplate } from 'ember-realworld/lib/precompiled-handlebars-helpers';

export default class RenderComponentComponent extends Component {
  someContent = executePrecompiledHandlebarsTemplate(['email-templates/partials/social'], {});
}
