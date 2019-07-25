import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
    render() {
        return(
            <Text>Hello {this.props.name} </Text>
        )
    }
}

class T1 extends Component {
    render() {
       
        return(
            <View style={{alignItems:'center',marginTop:200}}>
                <Greeting name="asdsad"></Greeting>
            </View>
        )
    }
}
export default T1;