import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

class Screen6 extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <StatusBar barStyle="light-content" />
                <View style={{ flexDirection: 'column', marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                        <Text style={{ color: 'rgb(207,184,25)', fontWeight: 'bold', fontSize: 18 }}>Order</Text>
                        <View style={{
                            height: 30, width: 200, marginLeft: 100, borderRadius: 30,
                            backgroundColor: 'rgb(58,58,58)', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.inputStyle} placeholderTextColor={'rgb(89,89,89)'} placeholder="Find a food or drink" />
                                <IconAwesome name={'search'} color={'rgb(89,89,89)'} size={18} style={{ marginLeft: 25 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 40 }}>
                        <TouchableOpacity onPress={this.onBack.bind(this)}>
                            <IconAwesome name={"arrow-left"} color={"rgb(205,180,29)"} size={15} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 120 }}>Review Order</Text>
                    </View>
                </View>
                {/* end top */}


                <View style={{ height: 5, backgroundColor: 'rgb(38,38,38)', marginTop: 10 }}></View>

                <ScrollView>
                    <View style={styles.viewBody}>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15, alignItems: 'center' }}>
                            <Text style={styles.textTilte}>FOODS</Text>
                            <Text style={[styles.textNormal, { marginLeft: 220 }]}>Silde to delete</Text>
                        </View>


                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 15, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"address-book"} color={"rgb(205,180,29)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Fried Eggs</Text>
                                    <Text style={styles.textNormal}>Breakfast</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 60 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 1 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"meetup"} color={"rgb(239,16,0)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Grilled Chicken</Text>
                                    <Text style={styles.textNormal}>Meats</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 25 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 2 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"font-awesome"} color={"rgb(91,57,196)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Choco Pudding</Text>
                                    <Text style={styles.textNormal}>Dessert</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 30 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 3 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"adjust"} color={"rgb(0,207,95)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Fruit Salad</Text>
                                    <Text style={styles.textNormal}>Salad</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 60 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 4 */}
                    </View>
                    {/* end foods */}


                    <View style={[styles.viewBody]}>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15, alignItems: 'center', marginTop: 30 }}>
                            <Text style={styles.textTilte}>FOODS</Text>
                            <Text style={[styles.textNormal, { marginLeft: 220 }]}>Silde to delete</Text>
                        </View>


                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 15, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"address-book"} color={"rgb(205,180,29)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Fried Eggs</Text>
                                    <Text style={styles.textNormal}>Breakfast</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 60 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 1 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"meetup"} color={"rgb(239,16,0)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Grilled Chicken</Text>
                                    <Text style={styles.textNormal}>Meats</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 25 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 2 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"font-awesome"} color={"rgb(91,57,196)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Choco Pudding</Text>
                                    <Text style={styles.textNormal}>Dessert</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 30 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 3 */}

                        <View style={{ height: 70, backgroundColor: 'rgb(58,58,58)', width: width - 20, marginLeft: 10, marginTop: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22, alignItems: 'center' }}>
                                <IconAwesome name={"adjust"} color={"rgb(0,207,95)"} size={25} />
                                <View style={{ flexDirection: 'column', marginLeft: 15 }}>

                                    <Text style={styles.textTilte}>Fruit Salad</Text>
                                    <Text style={styles.textNormal}>Salad</Text>
                                </View>
                                <IconAwesome name={"minus-circle"} size={20} color={"white"} style={{ marginLeft: 60 }} />
                                <Text style={[styles.textTilte, { marginLeft: 10 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>1</Text>
                                <IconAwesome name={"plus-circle"} size={20} color={"white"} style={{ marginLeft: 10 }} />
                                <Text style={[styles.textTilte, { marginLeft: 30 }, { color: 'rgb(205,180,29)' }, { fontSize: 15 }]}>€</Text>
                                <Text style={[styles.textTilte, { marginLeft: 5 }]}>3,69</Text>
                            </View>
                        </View>
                        {/* end body 4 */}
                    </View>
                </ScrollView>

                <View style={{ height: 30 }}></View>
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
        backgroundColor: 'rgb(41,41,41)'
    },
    viewBody: {
        flex: 1,
        backgroundColor: 'rgb(50,49,50)'
    },
    textTilte: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textNormal: {
        color: 'rgb(140,141,140)',
        fontSize: 12
    }
})

export default Screen6;