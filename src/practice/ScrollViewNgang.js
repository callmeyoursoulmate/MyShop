import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';

class ScrollViewNgang extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}    //giu im Screen
                // showsHorizontalScrollIndicator={true} 
                //default san r: hien thanh duoi cung dang gat
            >
                <View style={{flex:1,backgroundColor:'blue', marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',alignItems:'center'
                }}>
                    <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
                        Screen 1
                    </Text>
                </View>
                <View style={{flex:1,backgroundColor:'black', marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',alignItems:'center'
                }}>
                    <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
                        Screen 1
                    </Text>
                </View>
                <View style={{flex:1,backgroundColor:'red', marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',alignItems:'center'
                }}>
                    <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
                        Screen 1
                    </Text>
                </View>
                <View style={{flex:1,backgroundColor:'yellow', marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',alignItems:'center'
                }}>
                    <Text style={{fontSize:20,padding:15,color:'white',textAlign:'center'}}>
                        Screen 1
                    </Text>
                </View>

            </ScrollView>
        )
    }
}

export default ScrollViewNgang;