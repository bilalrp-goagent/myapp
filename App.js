import { useState,useEffect} from "react";
import { Button, FlatList, StyleSheet, View,BackHandler} from "react-native";
import GoalData from "./components/GoalData";
import UserInput from "./components/UserInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const[visibleInput,setVisibleInput]=useState(false)
 
  function onPressHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setVisibleInput(false)
  }
  function onDeleteHandler(id){
    setGoals(currentGoals =>{return(
      currentGoals.filter(goal=>{
        return(
          goal.id !== id
        )
      })
    )} );
  }
  function modalVisibleHandler(){
    setVisibleInput(true)
  }
  function endGoal(){
    setVisibleInput(false)
  }

  return (
    <View style={styles.appContainer}>
    <Button title="Add goals" onPress={modalVisibleHandler}/>
      <UserInput addGoal={onPressHandler} modalvisiblity={visibleInput} endModal={endGoal} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalData data={itemData} onDeleteItem={onDeleteHandler}  />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 16,
  },
  listContainer: {
    flex: 5,
  },
});
