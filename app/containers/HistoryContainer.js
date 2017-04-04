import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Footer } from 'native-base';

export class HistoryContainer extends Component {
	render() {
		return (
			<Container>
				<Content>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
					{this.getSizes().map(icon => (
						<Button bordered light key={icon.size} style={{ height: 150, margin: 15, flexDirection: 'column' }} onPress={this.handleStartClicked}>
							<Image key={icon.size} source={icon.image} style={{ width: 100, height: 100 }} />
							<Text style={{textAlign: 'center'}} note>{icon.size}ml</Text>
						</Button>
					))}
					</View>
				</Content>
			</Container>
		);
	}

	getSizes() {
		return [
			{
				image: require('../../resources/icons/sizes/noun_158502_cc.png'),
				size: 420
			},
			{
				image: require('../../resources/icons/sizes/noun_532047_cc.png'),
				size: 125
			},
			{
				image: require('../../resources/icons/sizes/noun_532049_cc.png'),
				size: 380
			},
			{
				image: require('../../resources/icons/sizes/noun_158498_cc.png'),
				size: 490
			},
			{
				image: require('../../resources/icons/sizes/noun_532046_cc.png'),
				size: 190
			},
			{
				image: require('../../resources/icons/sizes/noun_532048_cc.png'),
				size: 440
			},
			{
				image: require('../../resources/icons/sizes/noun_532050_cc.png'),
				size: 520
			},
		];
	}

	handleStartClicked = () => {
		this.props.navigator.push({
			screen: 'GuidedCoffee.Guide'
		});
	}
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		resizeMode: 'cover', // or 'stretch
	}
});

function select(state, props) {
	return {};
}

export default connect(select)(HistoryContainer);
