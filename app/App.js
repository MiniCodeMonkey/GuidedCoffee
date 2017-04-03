import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from './configureStore';
import { registerScreens } from './screens';

const store = configureStore();

registerScreens(store, Provider);

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	initialize() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'GuidedCoffee.History'
			}
		});
	}
}
