import React from 'react';
import { StyleSheet,
         Text,
         Image,
         View,
         Button,
         TextInput,
         TouchableOpacity,
         ScrollView, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import UserAvatar from 'react-native-user-avatar';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';

const Jaguar = '#22222C';
 
export default class profile extends React.Component {
  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} >
            <FontAwesome5 style={styles.backArrow} name={'arrow-left'} />
          </TouchableOpacity>
   
            <TextInput style={styles.inputSearch}
            selectionColor={Jaguar} 
            placeholder="Search" />
          <TouchableOpacity>  
           <Icon name="grid" size={35} color="#FCD705" />
          </TouchableOpacity> 

        </View>
        <ScrollView> 
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 20,}}>
             <UserAvatar size="100" name="Avishay Bar" 
             src="https://farm66.staticflickr.com/65535/48130913786_2810c0e145_b.jpg" />
          </View>
          <View style={{ padding: 20}} >
            <Text style={styles.profileName}>Joseph Vijay</Text>
            <Text style={{ fontSize: hp('2.5%'),
                           marginLeft: 4, }}>Actor</Text>
            <TouchableOpacity>
              <View style={styles.follow}>
                <Text style={{ color:'#FCD705',
                                fontSize: 17, }}>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
        style={{
        borderBottomColor: '#22222C',
        borderBottomWidth: 1,
        }}
        />
      <View style={{ flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingVertical: 8,
                  }}>
          <View>
            <Text style={styles.count}>210</Text>
            <Text style={styles.countText}>Photos</Text>
          </View>
          <View>
            <Text style={styles.count}>176M</Text>
            <Text style={styles.countText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.count}>10</Text>
            <Text style={styles.countText}>Following</Text>
          </View>
      </View>
      <View
        style={{
        borderBottomColor: '#22222C',
        borderBottomWidth: 1,
        }}
        />
      <View style={{ padding: 10}}>
        <View style={styles.ZigZagContainer}>
          <View style={styles.zigZagImage}>
            <Image style={styles.InlineImg}
              source={{uri: 'https://pbs.twimg.com/profile_images/1142051259408506881/Myd4S5Tp_400x400.jpg'}}
            />
          </View>
          <View style={styles.zigZagImage2}>  
            <Image style={styles.InlineImg}
              source={{uri: 'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/mersal-compressed.jpg?itok=3bQ5wioT'}}
            />
          </View>   
        </View>
        <View style={styles.ZigZagContainer}>
          <View style={styles.zigZagImage}>
            <Image style={styles.InlineImg}
              source={{uri: 'https://static.asianetnews.com/images/2d54dc93-516c-4b80-bc4c-5dc53c2072d8/image_710x400xt.jpg'}}
            />
          </View>
          <View style={styles.zigZagImage2}>  
            <Image style={styles.InlineImg}
              source={{uri: 'https://i.pinimg.com/originals/92/d9/d6/92d9d61062de8359a6428740a85e2177.jpg'}}
            />
          </View> 
        </View>
        <View style={styles.ZigZagContainer}>
          <View style={styles.zigZagImage}>
            <Image style={styles.InlineImg}
              source={{uri: 'https://pbs.twimg.com/media/DRZDjpZX4AEyNBl.jpg'}}
            />
          </View>
          <View style={styles.zigZagImage2}>  
            <Image style={styles.InlineImg}
              source={{uri: 'https://scontent-frx5-1.cdninstagram.com/vp/7eeda768621c9e25ad5f61f1852e23cb/5DB7A2BE/t51.2885-15/e35/64561917_164247547948651_7492583984883422190_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&se=7&ig_cache_key=MjA3MTM3Mzk0OTE5MTMyNzM2MA%3D%3D.2'}}
            />
          </View>
             
        </View>
      </View>  
      </ScrollView>

      {/* <View style={styles.footer}>
          <TouchableOpacity>
            <FontAwesome5 style={styles.globe} name={'globe'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 style={styles.addUser} name={'user-plus'} />
          </TouchableOpacity>
          <TouchableOpacity>  
           <FontAwesome5 style={styles.userCircle} name={'user-circle'}/>
          </TouchableOpacity> 
      </View> */}
    </View>  
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#22222C',
    padding: 10,
  },
  backArrow:{
    color: '#FCD705',
    fontSize: hp('3%'),
    marginTop: 5,
  },
  inputSearch: {
    width: wp('60%'),
    paddingRight: 25,
    paddingLeft: 25,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 20,
    color: '#22222C',
    borderColor: '#FCD705',
    backgroundColor: 'white',
  },
  profileName: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
  },
  follow: {
    marginTop: 10,
    width: wp('30%'),
    alignItems: 'center',
    backgroundColor: '#22222C',
    borderRadius: 50,
  },
  count: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  coutnText: {
    fontSize: hp('2%'),
  },
  ZigZagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('35%'),
  },
  zigZagImage2: {
    position: 'relative',
    top: 30,
  },
  InlineImg: {
    width: wp('40%'), 
    height: hp('30%'),
    borderWidth: 1,
    borderColor: '#FCD705',
    borderRadius: 20,
  },
  // footer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   backgroundColor: '#22222C',
  //   padding: 10,
  // },
  // globe: {
  //   color: 'white',
  //   fontSize: hp('3%'),
  // },
  // addUser: {
  //   color: 'white',
  //   fontSize: hp('3%'),
  // },
  // userCircle: {
  //   color: 'white',
  //   fontSize: hp('3%'),
  // },

});

