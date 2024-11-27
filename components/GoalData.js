import {StyleSheet, View,Text, Pressable} from 'react-native'
function GoalData(props){
    return(
      <View style={styles.listData} >
      <Pressable android_ripple={{color:'bcd2d1',foreground:'red'}} onPress={props.onDeleteItem.bind(this,props.data.item.id)} >
              <Text style={styles.GoalText}>{props.data.item.text}</Text>
      </Pressable>
            </View>
    )
}
const styles = StyleSheet.create({
    
    listData: {
      borderWidth: 1,
      borderColor: "#aafaf9",
      borderRadius: 13,
      margin: 10,
      backgroundColor: "#aafaf9",
      elevation: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    GoalText:{
    padding: 10,
    }
    

  });
  
export default GoalData;