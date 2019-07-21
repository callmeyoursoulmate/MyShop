import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
    render() {
        let color = this.props.focused ? 'red' : 'gray';
        let textColor = this.props.focused ? 'red' : 'gray';
        let name = this.props.iconName;
        return(
            <View style={styles.tab}>
                <FontAwesome name={name} size={22} color={color}/>
                <Text style={[styles.textTitle, {color: textColor}]}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 11,
        color: 'gray'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabIcon;