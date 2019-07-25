import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

class T3 extends Component {
    _onPressButton = () => {
        Alert.alert('You pressed the button')
    }
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={{
                    backgroundColor:'green', padding:10, borderRadius:16,
                    shadowRadius:20, shadowOpacity:0.5
                    }}>
                    <Button onPress={this._onPressButton}
                        // onPress={() => {
                        // Alert.alert('You pressed the button')}}
                        title="this is a button" //default on ios is blue
                        color="white"
                    >
                    </Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default T3;