import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

import IconAwsome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curLine: 'th'
        }
    }
    render() {
        let curLine = this.state.curLine;
        return (
            <View style={styles.viewContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity onPress={this.onBack.bind(this)}>
                        <IconAwsome name={"arrow-left"} style={{ marginLeft: 20 }} />
                    </TouchableOpacity>
                    <IconAwsome name={"lock"} size={15} style={{ marginLeft: 100 }} />
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={[styles.textApp, { fontWeight: 'bold' }]}>_duyquangg_</Text>
                        <IconAwsome name={"arrow-down"} color={"rgb(41,41,41)"} style={{ marginLeft: 3 }} />
                    </View>
                    <IconAwsome name={"bars"} color={"rgb(41,41,41)"} size={25} style={{ marginLeft: 80 }} />
                </View>
                {/* end top */}

                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', height: 100, justifyContent: 'space-between' }}>
                        <Image
                            style={{ height: 70, width: 70, borderRadius: 35 }}
                            source={require('../image/hi.jpg')}
                        />
                        <Text style={[styles.textApp, { fontWeight: 'bold' }]}> Kwoang </Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 30, bottom: 7 }}>
                        <Text style={[styles.textApp, { fontWeight: 'bold' }]}>7</Text>
                        <Text style={styles.textApp}>Post</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 30, bottom: 7 }}>
                        <Text style={[styles.textApp, { fontWeight: 'bold' }]}>245</Text>
                        <Text style={styles.textApp}>Followers</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 30, bottom: 7 }}>
                        <Text style={[styles.textApp, { fontWeight: 'bold' }]}>141</Text>
                        <Text style={styles.textApp}>Following</Text>
                    </View>
                </View>
                {/* end body1 */}

                <View style={{ alignItems: 'center', justifyContent: 'center', height: 30, width: width - 40, marginLeft: 20, backgroundColor: 'white', marginTop: 15, borderColor: 'gray', borderWidth: 0.5 }}>
                    <Text style={[styles.textApp, { fontWeight: 'bold' }]}>Edit Profile</Text>
                </View>
                {/* end body2 */}

                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <IconAwsome name={"plus-circle"} color={"grey"} size={50} />
                        <Text style={styles.textApp}>New</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 25 }}
                            source={require('../image/gai.png')}
                        />
                        <Text style={styles.textApp}>Tin nổi bật</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 25 }}
                            source={require('../image/p1.jpeg')}
                        />
                        <Text style={styles.textApp}>Landber</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{ marginTop: 20 }}>
                    <View style={{ height: 0.5, backgroundColor: 'rgb(89,91,98)' }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, height: 40, width: width }}>
                        <TouchableOpacity style={[styles.viewButton]} onPress={() => { this.setState({ curLine:'th' }) }}>
                            <IconAwsome name={"th"} color={"rgb(89,91,98)"} size={25} style={{ marginLeft: 20 }} />
                            {curLine == 'th' ? <View style={[styles.lineButton]}></View> : null}
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.viewButton]} onPress={() => { this.setState({ curLine: 'id-card' }) }}>
                            <IconAwsome name={"id-card"} color={"rgb(89,91,98)"} size={25} />
                            {curLine == 'id-card' ? <View style={[styles.lineButton]}></View> : null}
                        </TouchableOpacity>
                    </View>
                </View>

                {curLine == 'th' ? 
                    <View style={{height:height}}>
                        <View style={[styles.viewBody, {flexDirection:'row'}]}>
                            <Image 
                                style={[styles.viewImage]}
                                source={require('../image/a.jpg')}
                            />
                            <Image 
                                style={[styles.viewImage]}
                                source={require('../image/b.jpg')}
                            />
                            <Image 
                                style={[styles.viewImage]}
                                source={require('../image/c.jpg')}
                            />
                        </View>
                        
                       
                    </View>
                    
                : null}

                {curLine == 'id-card' ?
                    <View style={[styles.viewBody, {backgroundColor:'red'}]}></View>
                : null}
            </View>
        )
    }
    onBack() {
        Actions.pop();
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    textApp: {
        fontSize: 15
    },
    viewButton: {
        height: 40,
        width: width/2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lineButton: {
        height: 1,
        width: 180,
        backgroundColor: 'rgb(89,91,98)',
        marginTop: 8
    },
    viewBody: {
        flex: 1
    },
    viewImage: {
        width:width/3,
        height:100,
        marginRight:3
    }
})

export default Profile;