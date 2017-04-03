import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export class GuideContainer extends Component {
    render() {
        const items = this.getOptions();

        return (
            <Container>
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem onPress={this.handlePress}>
                                <Image source={item.icon} />
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.size}ml</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }

    getOptions() {
        return [
            {
                icon: require('../../resources/1cup.png'),
                name: '1 cup',
                size: 270
            },
            {
                icon: require('../../resources/2cups.png'),
                name: '2 cups',
                size: 540
            },
            {
                icon: require('../../resources/cup.png'),
                name: 'Travel Mug',
                size: 472
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