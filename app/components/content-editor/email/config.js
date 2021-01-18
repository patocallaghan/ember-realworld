import HeaderComponent from './header';
import BodyComponent from './body';
import FooterComponent from './footer';
import { ensureSafeComponent } from '@embroider/util';

export default class EmailConfig {
  constructor(owner) {
    this.Header = ensureSafeComponent(HeaderComponent, owner);
    this.Body = ensureSafeComponent(BodyComponent, owner);
    this.Footer = ensureSafeComponent(FooterComponent, owner);
  }
}
