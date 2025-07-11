import React,{useState} from "react";
import { View,Text,Image, TouchableOpacity, ScrollView ,Dimensions} from "react-native";
import Header from "../componets/header/Header";
import HeroSection from "../componets/herosection/HeroSection";
import ConnectData from "../componets/ConnectData/ConnectData";
import CustomerData from "../componets/customerData/CustomerData";


const DashBoard =()=>{

const [change,setChange]= useState(false)
console.log(change,'chnage')
    const ChangeColor =(e)=>{
        var windowHeight = Dimensions.get('window').height,
        height = e.nativeEvent.contentSize.height,
        offset = e.nativeEvent.contentOffset.y;
      console.log(windowHeight, height, offset, 'window')
      if (offset >= windowHeight) {
          setChange(true)
    }  if (offset <= windowHeight) {
        setChange(false)
  } 
}

    return(
    <View style={{flex:1}} >
        <Header  change={change} />
        <ScrollView showsVerticalScrollIndicator={false} onScroll={(e)=>ChangeColor(e)} >
      <HeroSection/>
      <CustomerData/>
      <ConnectData/>
       </ScrollView>  
    </View>
    )
}
export default DashBoard