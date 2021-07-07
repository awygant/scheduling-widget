import Component from '@glimmer/component';
import config from 'scheduling-widget/config/environment';

export default class TopNavComponent extends Component {
  clinicName=config.clinicName;
}
