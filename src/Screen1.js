import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import IconAwsome from 'react-native-vector-icons/FontAwesome';


class Screen1 extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
            <StatusBar barStyle="dark-content" />
                <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10 }}>
                    <TouchableOpacity onPress={this.onBack.bind(this)}>
                        <IconAwsome name={"arrow-left"} color={"rgb(41,41,41)"} size={15} style={{marginLeft:16}} />
                    </TouchableOpacity>
                    <Text style={{ left: 100, fontSize: 15 }}>La Brioche Dorée</Text>
                    <IconAwsome name={"search"} color={"rgb(41,41,41)"} size={15} style={{marginLeft:200}} />
                </View>
                {/* nav end */}

                <View style={{ height: 1, backgroundColor: '#dcdcdc', marginBottom: 10, left: 16, width: width - 32 }} />
                <Text style={{ left: 16, marginBottom: 10, fontWeight: 'bold' }}>PASTRIES</Text>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                {/* title end */}

                <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Croissants</Text>
                        <Text style={{ marginBottom: 5 }}>3 different types of croissants</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 100 }}
                        source={require('./image/a.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Croissants</Text>
                        <Text style={{ marginBottom: 5 }}>3 different types of croissants</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 100 }}
                        source={require('./image/f.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Donuts</Text>
                        <Text style={{ marginBottom: 5 }}>7 different types of donuts</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 2,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 120 }}
                        source={require('./image/b.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Cheesecake</Text>
                        <Text style={{ marginBottom: 5 }}>Cheesecake with fress strawberries </Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 60 }}
                        source={require('./image/c.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Muffins</Text>
                        <Text style={{ marginBottom: 5 }}>Chocolate muffins</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 7,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 175 }}
                        source={require('./image/d.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Strawberry Cake</Text>
                        <Text style={{ marginBottom: 5 }}>Fresh creamy cake with strawberries</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 55 }}
                        source={require('./image/e.jpeg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Croissants</Text>
                        <Text style={{ marginBottom: 5 }}>3 different types of croissants</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 100 }}
                        source={require('./image/a.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />

                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Muffins</Text>
                        <Text style={{ marginBottom: 5 }}>Chocolate muffins</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 7,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 175 }}
                        source={require('./image/d.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Croissants</Text>
                        <Text style={{ marginBottom: 5 }}>3 different types of croissants</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 12,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 100 }}
                        source={require('./image/f.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                 <View style={{ flexDirection: 'row', marginTop: 15, width: width - 32, marginBottom: 5 }}>
                    <View style={{ flexDirection: 'column', left: 16 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Donuts</Text>
                        <Text style={{ marginBottom: 5 }}>7 different types of donuts</Text>
                        <Text style={{ color: 'rgb(243,192,112)' }}>from 2,99€</Text>
                    </View>
                    <Image
                        style={{ height: 60, width: 60, left: 120 }}
                        source={require('./image/b.jpg')}
                    />
                </View>
                <View style={{ height: 1, left: 16, width: width - 32, backgroundColor: '#dcdcdc' }} />
                {/* end body */}
                </ScrollView>

                <View style={{
                    flexDirection: 'row', height: 40, width: width - 32, left: 16, marginTop: 15, marginBottom:10,
                    borderRadius: 5, backgroundColor: 'rgb(255,167,0)'
                }}>

                    <View style={{
                        height: 30, width: 30, backgroundColor: 'rgb(238,148,0)',
                        borderRadius: 5, top: 5, left: 5
                    }}>
                        <Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }}>4</Text>
                    </View>
                    <Text style={{ left:80, lineHeight:40, color:'white', fontWeight:'bold', fontSize:15, textAlign: 'center' }}>CHECK OUT</Text>
                    <Text style={{ left:160, lineHeight:40, color:'white', textAlign: 'center'}}>12,99€</Text>
                </View>
            </View>
        )
    }
    onBack() {
        Actions.Screen5();
    }
}
 

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        fontFamily: 'segoeui'
    }
});

export default Screen1;