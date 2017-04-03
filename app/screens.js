import { Navigation } from 'react-native-navigation';
import GuideContainer from './containers/GuideContainer';
import HistoryContainer from './containers/HistoryContainer';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('GuidedCoffee.Guide', () => GuideContainer, store, Provider);
	Navigation.registerComponent('GuidedCoffee.History', () => HistoryContainer, store, Provider);
}
