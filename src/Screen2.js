import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

class Screen2 extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={{ marginTop: 30, marginLeft: 13, width: width - 32 }}>
                    <Image
                        style={{ height: 200, width: 350 }}
                        source={require('./image/c.jpg')}
                    />
                    <View style={{ flexDirection: 'row', marginLeft: 5, alignItems: 'center', bottom: 190 }}>
                        <TouchableOpacity onPress={this.onBack.bind(this)}>
                            <IconAwesome name={"arrow-left"} color={"white"} size={18} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconAwesome name={"upload"} color={"white"} size={18} style={{ marginLeft: 300 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* end top */}
                <ScrollView>
                    <View style={{ marginTop: 10, left: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Donuts</Text>
                        <Text style={{ fontSize: 10 }}>7 different types of donuts</Text>
                        <View style={{ height: 1, width: width - 32, marginTop: 15, backgroundColor: '#dcdcdc' }} />
                    </View>
                    {/* end product1 */}


                    <Text style={{ left: 16, marginTop: 10, fontWeight: 'bold', marginBottom: 10 }}>CHOOSE YOUR DONUT</Text>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc', marginBottom: 10 }} />


                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Ciao Strawberry</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>3,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>1</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product2 */}

                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10, marginTop: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Holy Donut</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>1,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>1</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product3 */}

                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10, marginTop: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Toffee</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>1,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>0</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product4 */}


                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Ciao Strawberry</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>3,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>2</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product2 */}

                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10, marginTop: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Holy Donut</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>1,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>3</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product3 */}


                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10, marginTop: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Toffee</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>1,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>1</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product4 */}

                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Ciao Strawberry</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>3,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>0</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product2 */}

                    <View style={{
                        flexDirection: 'row', left: 16, width: width - 32, marginBottom: 10, marginTop: 10
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>Holy Donut</Text>
                            <Text style={{ marginBottom: 5, fontSize: 10 }}>Cheesecake with fresh strawberries</Text>
                            <Text style={{ color: 'rgb(243,192,112)', fontWeight: 'bold' }}>1,99€</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 70, alignItems:'center' }}>
                            <IconAwesome name={"minus-circle"} size={20} color={"black"} style={{ marginLeft: 10 }} />
                            <Text style={{marginLeft:5}}>2</Text>
                            <IconAwesome name={"plus-circle"} color={"black"} size={20} style={{marginLeft:5}} />
                        </View>
                    </View>
                    <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                    {/* end product3 */}
                </ScrollView>

                <View style={{
                    height: 40, width: width - 32, left: 16, marginTop: 20, marginBottom: 10,
                    borderRadius: 5, backgroundColor: 'rgb(255,167,0)'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, lineHeight: 40, color: 'white', left: 120 }}>ADD TO CART</Text>
                </View>

            </View>
        )
    }
    onBack(){
        Actions.pop();
    }
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        fontFamily: 'segoeui'
    }
})



export default Screen2;