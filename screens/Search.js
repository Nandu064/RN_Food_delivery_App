import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native'
import { COLORS, icons,images, SIZES, FONTS } from "../constants"
import {
    initialCurrentLocation,
    categoryData,
    affordable,
    fairPrice,
    expensive,
    restaurantData,
} from '../includes/DummyData'

export default function Search({navigation}) {
    const [searchTerm,setSearchTerm] = React.useState();
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    function onSearch(searchTerm){

        // filter restaurant data based on slected category.
        let restaurantList = restaurantData.filter(a=>a.categories.includes(searchTerm))
        setRestaurants(restaurantList)
        setSearchTerm(searchTerm)
    }
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
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <View 
                        style={{
                            width:'80%',
                            height:'100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems:'center',
                            justifyContent:"center",
                            borderRadius:SIZES.radius,
                        }}>
                        <TextInput
                            style={{...FONTS.h3,height:40,fontSize:20}}
                            placeholder="Enter restaurant or Item"
                            onChangeText={(text)=>{setSearchTerm(text)}}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                    
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                    />

                </TouchableOpacity>

                
            </View>
        )
    }
    function renderSearchResult(){
        return (
            <View>
                <Text>{searchTerm}</Text>
            </View>
        )
    }
    return (
       <SafeAreaView style={[styles.container,styles.androidSafeArea]}>
            {renderHeader()}
            {renderSearchResult()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
})
