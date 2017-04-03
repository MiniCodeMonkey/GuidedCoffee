import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Footer } from 'native-base';

export class HistoryContainer extends Component {
    render() {
        return (
            <Container>
                <Content>
                     <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../resources/background.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image/>
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                           </CardItem>
                           <CardItem>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>
                   </Card>
                </Content>
                <Footer>
                    <Button bordered danger style={{alignSelf: 'center'}} onPress={this.handleStartClicked}>
                        <Icon name="md-add-circle" />
                        <Text>Start Brew</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }

    handleStartClicked = () => {
        console.log('Clicked!');

        this.props.navigator.push({
            screen: 'GuidedCoffee.Guide',
            title: 'How much?'
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