import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

class Screen3 extends Component {
   
    render() {
        return (
            <View style={styles.viewContainer}>
                <StatusBar barStyle="light-content" /> 
                <View style={{flexDirection:'row',marginTop:30,height:30,alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:16, marginLeft:165,fontWeight:'bold'}}>Home</Text>
                    <IconAwesome name={"home"} color={"white"} size={20} style={{marginLeft:120}}/>
                </View>
                {/* end top */}

                <View style={styles.viewBody}>
                    <View style={{marginLeft:20,marginTop:20}}>
                        <Text style={{color:'rgb(69,132,196)',fontSize:20,fontWeight:'bold'}}>Hello</Text>
                        <Text style={{fontWeight:'bold',fontSize:20}}>Digital Creativity,</Text>
                    </View>   
                    {/* end body1*/}

                    <View style={{flexDirection:'row',marginTop:50}}>
                        <View style={{flexDirection:'column',left:20,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"user"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:40,marginTop:20}} />
                            <Text style={{marginLeft:40,marginTop:10}}>Profile</Text>
                        </View>
                        <View style={{flexDirection:'column',left:80,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"search"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:40,marginTop:20}} />
                            <Text style={{marginLeft:45,marginTop:10}}>Search</Text>
                        </View>
                    </View>
                    {/* end body2 */}


                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{flexDirection:'column',left:20,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"tablet"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:40,marginTop:20}} />
                            <Text style={{marginLeft:10,marginTop:10}}>My Applications</Text>
                        </View>
                        <View style={{flexDirection:'column',left:80,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"phone"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:40,marginTop:20}} />
                            <Text style={{marginLeft:30,marginTop:10}}>Contact Us</Text>
                        </View>
                    </View>
                    {/* end body3 */}


                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{flexDirection:'column',left:20,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"ellipsis-h"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:40,marginTop:30}} />
                            <Text style={{marginLeft:45}}>More</Text>
                        </View>
                        <View style={{flexDirection:'column',left:80,height:130, width:130,backgroundColor:'white'}}>
                            <IconAwesome name={"thermometer"} color={"rgb(229,211,74)"} size={60} style={{marginLeft:50,marginTop:20}} />
                            <Text style={{marginLeft:35,marginTop:10}}>Mediation</Text>
                        </View>
                    </View>
                    {/* end body4 */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex:1,
        backgroundColor:'#000'
    },
    viewBody: {
        flex:1,
        backgroundColor:'rgb(247,247,247)',
    }
})

export default Screen3;