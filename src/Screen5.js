import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const {width, height} = Dimensions.get ('window');
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';


class Screen5 extends Component {
  constructor (props) {
    super (props);
    this.state = {
      curLine: 'menu',
      iconLine : 'order'
      // backgroundBody: 'green'
    };
  }
  render () {
    // let { curLine, backgroundBody } = this.state;
    let curLine = this.state.curLine;
    let iconLine = this.state.iconLine;
    return (
      <View style={styles.viewContainer}>
        <StatusBar barStyle="light-content" />
        <View style={{flexDirection: 'column', marginTop: 40}}>
            <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
                <Text style={{color: 'rgb(207,184,25)',fontWeight: 'bold',fontSize: 18}}>Order</Text>
                <View style={{height: 30,width: 200,backgroundColor: 'rgb(58,58,58)',marginLeft: 100,borderRadius: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputStyle} placeholderTextColor={'rgb(89,89,89)'} placeholder="Find a food or drink"/>
                    <IconAwesome name={'search'} color={'rgb(89,89,89)'} size={18} style={{marginLeft: 25, marginTop: 5}}/>
                </View>
                </View>
            </View>

          <View style={{flexDirection: 'row', marginTop: 25}}>
                <TouchableOpacity style={styles.viewButton} onPress={() => {this.setState ({curLine: 'menu'});}}>
                    <Text style={styles.textTop}>Menu</Text>
                    {curLine == 'menu' ? <View style={styles.lineButton} /> : null}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewButton, {width: 70}]} onPress={() => {this.setState ({curLine: 'offers'});}}>
                    <Text style={styles.textTop}>Offers</Text>
                    {curLine == 'offers' ? <View style={[styles.lineButton, {width: 46}]}/> : null}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewButton, {width: 80}]} onPress={() => {this.setState ({curLine: 'previous'});}}>
                    <Text style={styles.textTop}>Previous</Text>
                    {curLine == 'previous' ? <View style={[styles.lineButton, {width: 52}]}/> : null}
                </TouchableOpacity>
          </View>
        </View>
        {/* end  top */}
         

        {curLine == 'menu' ? 
        <View style={[styles.viewBody, {backgroundColor: 'rgb(50,49,50)'}]}>
            <ScrollView>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={{color: 'white',fontSize: 14,fontWeight: 'bold',marginLeft: 10,}}>FOODS</Text>
                    <View style={{flexDirection: 'row',marginLeft: 250,alignItems: 'center',}}>
                    <TouchableOpacity onPress={this.onRouter.bind(this)}>
                        <Text style={styles.textBody}>See all</Text>
                    </TouchableOpacity>
                    <IconAwesome name={'chevron-right'} color={'rgb(207,184,25)'} size={13} style={{marginLeft: 5}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 1 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 2 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 3 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 4 */}
                
                <View style={{flexDirection: 'row', marginTop: 40}}>
                    <Text style={{color: 'white',fontSize: 14,fontWeight: 'bold',marginLeft: 10,}}>DRINKS</Text>
                    <View style={{flexDirection: 'row',marginLeft: 250,alignItems: 'center',}}>
                    <TouchableOpacity onPress={this.onRouter1.bind(this)}>
                        <Text style={styles.textBody}>See all</Text>
                    </TouchableOpacity>
                    <IconAwesome name={'chevron-right'} color={'rgb(207,184,25)'} size={13} style={{marginLeft: 5}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 1 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 2 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 3 */}
                <View style={{flexDirection:'row',marginTop:35,marginLeft:40,alignItems:'center'}}>
                    <View style={{flexDirection:'column',height:60,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"home"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Meats</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adjust"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Bowls</Text>
                    </View>
                    <View style={{flexDirection:'column',height:60,marginLeft:70,justifyContent:'space-between',alignItems:'center'}}>
                        <IconAwesome name={"adn"} color={"white"} size={50} />
                        <Text style={styles.textBody}>Sushi</Text>
                    </View>
                </View>
                {/* end body 4 */}
            </ScrollView>
        </View>
        : null}

        {curLine == 'offers' ? 
            <View style={[styles.viewBody, {backgroundColor: 'yellow'}]}>
              <Text>Dung Nguyen</Text>
            </View>
        : null}

        {curLine == 'previous'
          ? <View style={[styles.viewBody, {backgroundColor: 'gray'}]}>
              <Text>Khuyen Nguyen</Text>
            </View>
        : null}
      </View>
    );
  }

  onRouter() {
    Actions.Screen6();
  }
  onRouter1() {
    Actions.Screen1();
  }
}


const styles = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    backgroundColor: 'rgb(41,41,41)',
  },
  inputStyle: {
    marginLeft: 15,
    marginTop: 5,
  },
  textTop: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewButton: {
    height: 40,
    width: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineButton: {
    height: 2,
    width: 40,
    backgroundColor: 'yellow',
  },
  viewBody: {
    flex: 1,
  },
  textBody: {
    color: 'white',
    fontSize: 14,
  },
});
export default Screen5;
