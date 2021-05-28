import React from 'react'
import {View,StyleSheet,SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native'
import { COLORS, icons,images, SIZES, FONTS } from "../constants"
import {Avatar, Title, Caption,Text, TouchableRipple} from 'react-native-paper';
export default function MyProfile({navigation}) {
    function renderHeader() {
        return (
            <View style={{flexDirection:'row', height:50}}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:SIZES.padding*2,
                        justifyConent:'center'
                    }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 45
                        }}
                    />

                </TouchableOpacity>
            </View>
        )
    }
    function renderUserContactInfo(icon,text){
        return (
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Image
                        source={icons.location}
                        resizeMode="contain"
                        style={{
                            width:20,
                            height:20
                        }}
                        tintColor={COLORS.darkgray}

                    />
                    <Text style={styles.location}>Kurnool,AP</Text>
                </View>
                 <View style={styles.row}>
                    <Image
                        source={icons.phone}
                        resizeMode="contain"
                        style={{
                            width:20,
                            height:20
                        }}
                        tintColor={COLORS.darkgray}

                    />
                    <Text style={styles.location}>+91 8790456900</Text>
                </View>
                 <View style={styles.row}>
                    <Image
                        source={icons.mail}
                        resizeMode="contain"
                        style={{
                            width:20,
                            height:20
                        }}
                        tintColor={COLORS.darkgray}

                    />
                    <Text style={styles.location}>Harish861432@gmail.com</Text>
                </View>
            </View>
        )
    }
    function renderOrderInfo(){
        return (
            <View style={styles.infoBoxWrapper}>
                <View style={styles.infoBox}>
                    <Title>Wallet</Title>
                    <Caption>Rs.1400</Caption>
                </View>
                <View style={[styles.infoBox,styles.border]}>
                    <Title>Orders</Title>
                    <Caption>15</Caption>
                </View>
            </View>
        )
    }
    function renderMenuItem(){
        return (
            <View style={styles.menuWrapper}>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25
                            }}
                            tintColor={COLORS.primary}
                        />
                        <Text style={styles.menuItemText}>Your Favourites</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image
                            source={icons.creditCard}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25
                            }}
                            tintColor={COLORS.primary}
                        />
                        <Text style={styles.menuItemText}>Payments Method</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image
                            source={icons.creditCard}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                            }}
                            tintColor={COLORS.primary}                            
                        />
                        <Text style={styles.menuItemText}>Refer & Earn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image
                            source={icons.support}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                            }}
                            tintColor={COLORS.primary}                            
                        />
                        <Text style={styles.menuItemText}>24/7 Customer Support</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Image
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                            }}
                            tintColor={COLORS.primary}                            
                        />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    function renderUserInfo(){
        return (
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop:15}}>
                    <Avatar.Image
                        source={icons.user}
                        size={80}
                    />
                    <View style={{marginLeft:20,}}>
                        <Title style={[styles.title,{
                            marginBottom:5,
                            marginTop:15
                        }]}>UserName</Title>
                        <Caption style={styles.caption}>User Id</Caption>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.container,styles.androidSafeArea]}>
            {renderHeader()}
            {/* <Text>My Profile Section</Text> */}
            {renderUserInfo()}
            {renderUserContactInfo()}
            {renderOrderInfo()}
            {renderMenuItem()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      location:{
          color:COLORS.darkgray,
          marginLeft:20,
      },
      border:{
        borderLeftColor: '#dddddd',
        borderLeftWidth:1
      }
})
