import { View, Image, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

const HomeScreen = () => {

return(
//Whole Screen
<View style={{backgroundColor:"pink"}}>

    <View style = {styles.settingsSection}> 
      <Text style = {{fontWeight:"bold", fontSize=24}}>Settings</Text>
    </View>

    <View style={{backgroundColor:"ffffff", height: 10, width:10}}/>

    <View>
      <View style = {styles.avatarSection}>
        <Image source={require("../assets/avatar")} style = {imageSection} />
    </View>
      <View style = {styles.infoSection}>
        <Text>Akosua Nyarkoa</Text>
        <Text>Apple ID, iCloud, iTunes & AppStore</Text>
    </View>
    
    <View style = {styles.iconSection}><Ionicons name="ios-arrow-forward" size={26}/></View>

    </View>

    <View style ={{height:50, width:80}}/>
      <Text>Finish setting up your iPhone</Text>
      <View>
      <Text style={{backgroundColor="red", fontSize=15}}>12</Text>
    </View>


</View> 

)
}


styles = StyleSheet.create(
  {
    settingsSection:{flex: 2, backgroundColor:"ffffff", flexDirection:"row",paddingHorizontal:30},
    avatarSection: {backgroundColor:"green", height:100, width:100, flex:10},
    imageSecrion: {borderRadius:30, alignItems:"center", justifyContent:"center"},
    infoSection: {backgroundColor:"blue", height:100, width:100, flex:4},
    iconSection: {backgroundColor:"yellow", height:100, width:100, flex:2}

  }
);


export default HomeScreen;