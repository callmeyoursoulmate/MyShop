import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import FL1 from '../data/FL1';

class BasicFlatList extends Component {
    render() {
        return(
            <View style={{flex:1,marginTop:22}}>
                <FlatList
                    // data={FL1}
                    // renderItem={({item,index}) => {
                    //     console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    // }}

                    data={[{key:'a'},{key:'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}
export default BasicFlatList;