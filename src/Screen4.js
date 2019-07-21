import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, StatusBar} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwsome from 'react-native-vector-icons/FontAwesome';

class Screen4 extends Component {
    render() {
        return(
            <View style={styles.viewContainer}>
            <StatusBar barStyle="dark-content" />
                <View style={{
                    flexDirection:'row',height:50, marginTop:30,
                    backgroundColor:'black',alignItems:'center'
                }}>
                    <IconAwsome name={"arrow-left"} color={"white"} size={20} style={{left:16}} />
                    <Text style={{color:'white',marginLeft:120, fontWeight:'bold'}}>Applicant Details</Text>
                </View>
                {/* end top */}

                <View style={{
                    flexDirection:'row',left:16, backgroundColor: '#fff', paddingVertical: 10, alignItems: 'center'
                }}>
                    <Text style={{color:'grey'}}>124 Results</Text>
                    <View style={{height:30, width:120, marginLeft:150, borderRadius:10,
                        backgroundColor:'rgb(255,206,0)',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold'}}>New Search</Text>
                    </View>
                </View>
                {/* end body1 */}
                
                 <ScrollView>    
                <View style={{
                            height:145,marginTop:30, width:width-32, left:16,
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p1.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"check-square"} color={"rgb(247,210,23)"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body2 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p2.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body3 */}

                <View style={{
                            height:145,marginTop:20, width:width-32, left:16, 
                            backgroundColor:'rgb(247,247,247)', borderRadius:10,flexDirection:'column'
                            }}>
                    <View style={{flexDirection:'row',top:10,left:16}}>
                        <Image 
                            style={{height:50,width:50, borderRadius:25}}
                            source={require('./image/p3.jpeg')}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold'}}>Munawar Mohamed</Text>
                            <Text>Skill Level - Tytor</Text>
                            <Text style={{color:'grey'}}>Egypt</Text>
                        </View>
                        <IconAwsome name={"square"} color={"grey"} size={25} style={{marginLeft:80}} />

                    </View>
                    <View style={{flexDirection:'column',marginTop:30, left:20}}>
                        <Text style={{marginBottom:3}}>Muanwar is a 32 year old UI | UX</Text>
                        <Text style={{marginBottom:3}}>Designer with an impressive porfolio</Text>
                        <Text>behind him</Text>
                    </View>
                </View>
                {/* end body4 */}
                </ScrollView>   


                <View style={{height:70,marginTop:50, 
                             backgroundColor:'rgb(86,87,91)',borderRadius:10,alignItems:'center',justifyContent:'center'
                            }}>
                    <View style={{height:40, width:350, 
                                backgroundColor:'rgb(242,198,0)',borderRadius:5,alignItems:'center',justifyContent:'center'
                                }}>
                        <Text style={{fontWeight:'bold'}}>Hire</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        flex:1
    }
})

export default Screen4;