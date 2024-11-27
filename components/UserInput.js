import { useState} from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
  
} from "react-native";

function UserInput(props) {

  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(inputText) {
    setEnteredText(inputText);
  }

  function onPressHandler() {
    if (enteredText.trim() == "") {
    } else {
      props.addGoal(enteredText);
      setEnteredText("");
    }
  }

  return (
    <Modal visible={props.modalvisiblity} animationType="slide">
      <View style={styles.textContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textBox}
          placeholder="Please enter a goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
            <Button title="Add Goal" onPress={onPressHandler} />
          </View>
          <View style={styles.Button}>
            <Button title="cancel" onPress={props.endModal} color='#FF6666' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#e1fafa"
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    borderColor: "#ccc",

    padding: 8
  },
  ButtonContainer: {
    flexDirection: "row",
    margin: 16
  },
  Button: {
    width: 100,
    marginHorizontal: 8
  },
  image:{
    width:200,
    height:200,
    margin:10,
  }
});

export default UserInput;
