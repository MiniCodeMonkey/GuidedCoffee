import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { StyleProvider, Container, Content, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Button, Row, Col, H3 } from 'native-base';
import getTheme from '../../native-base-theme/components';

export class GuideContainer extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			waterRatio: 14
		}
	}

	render() {
		const items = this.getOptions();

		return (
			<StyleProvider style={getTheme()}>
				<Container>
					<Content>
						<View style={{height: 350 }}>
							<DeckSwiper
								dataSource={this.getOptions()}
								renderItem={item =>
									<Card style={{ elevation: 3 }}>
										<CardItem cardBody>
											<Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 200 }} source={item.image} />
										</CardItem>
										<CardItem header>
											<H3>{item.name}</H3>
										</CardItem>
										<CardItem style={{ justifyContent: 'space-between' }}>
											<Button transparent>
												<Icon active name="md-water" />
												<Text>{item.brewsCount} Brews</Text>
											</Button>
											<Text>{item.type}</Text>
										</CardItem>
									</Card>
								}
							/>
						</View>

						<View style={{ marginTop: 20 }}>
							<Row>
								<Col>
									<Button block transparent onPress={() => this.setState({waterRatio: this.state.waterRatio - 1})}>
										<Icon name="md-remove" />
									</Button>
								</Col>
								<Col style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<Text>1:{this.state.waterRatio}</Text>
								</Col>
								<Col>
									<Button block transparent onPress={() => this.setState({waterRatio: this.state.waterRatio + 1})}>
										<Icon name="md-add" />
									</Button>
								</Col>
							</Row>
							<Row style={{ justifyContent: 'center', marginTop: 20 }}>
								<Button>
									<Text>Brew</Text>
								</Button>
							</Row>
						</View>
					</Content>
				</Container>
			</StyleProvider>
		);
	}

	getOptions() {
		return [
			{
				image: require('../../resources/samples/coffee-bag1.jpg'),
				name: 'Highway 1 Blend',
				type: 'Medium Roast',
				brewsCount: 5,
			},
			{
				image: require('../../resources/samples/coffee-bag1.jpg'),
				name: 'Barrie House',
				type: 'Dark Roast',
				brewsCount: 12,
			},
			{
				image: require('../../resources/samples/coffee-bag1.jpg'),
				name: 'Mitalena',
				type: 'French Roast',
				brewsCount: 8,
			}
		];
	}

	handlePress = () => {
		console.log('You selected one');
	}
}

function select(state, props) {
	return {};
}

export default connect(select)(GuideContainer);
