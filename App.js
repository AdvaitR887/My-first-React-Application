import React from 'react';
import {View,Text,StyleSheet,ScrollView,Button,Alert,Image} from 'react-native';


function App(){
    return(
      <ScrollView>
        <View style={styles.header}>
        <Text style={styles.headerText}>
          The Amaatra Academy
        </Text>
        <Text style={{fontSize:16}}>
          The Diwali Celebration
        </Text>
        </View>

        <View style={styles.content}>
        <Text>
        Wishing laughter and fun to cheer your days, in this festive season of diwali and always... - An occasion to celebrate victory over defeat, light over darkness, awareness over ignorance, an occasion to celebrate life. May this auspicious occasion light up your life with happiness, joy and peace. Happy Diwali!
        </Text>

        </View>

        <View>
        <Button title='Click here to wish yourself diwali!!!!!' onPress={()=>{Alert.alert("Happy Diwali!!!!!! 🎉🎉")}}>
        </Button>
        </View>
        
          
        <View style={{alignItems:'center'}}>
        <Image source={{uri:"https://images.indianexpress.com/2020/11/Happy-Diwali_amp-1-1.jpg"}} style={{width:100,height:100}} style={{width:'70%',height:150}}/>

        </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
  header:{
    marginTop:30,
    marginLeft:10,
    backgroundColor: 'pink',
    alignItems:'center',

  },
  headerText:{fontSize:19,
  fontWeight:'bold'
  },
  content:{
marginVertical:15,
padding:10,
marginHorizontal:10,
borderWidth:12,
border:100,
backgroundColor:'yellow',
alignItems:'center'


  }
});
export default App;
