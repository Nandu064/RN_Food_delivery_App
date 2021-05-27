import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native'
import { COLORS, icons,images, SIZES, FONTS } from "../constants"
export default function MyProfile() {
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
    return (
        <SafeAreaView style={[styles.container,styles.androidSafeArea]}>
            {/* {renderHeader()} */}
            {renderHeader() }
            <Text>My Profile Section</Text>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
})
