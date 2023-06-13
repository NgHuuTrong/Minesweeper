import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import { Link } from "react-router-native";
import { CreateGameContext } from "../../context/CreateGameContext";

function Home() {
  const createGame = useContext(CreateGameContext);

  const [valid, setValid] = useState(null);

  const handleCheckValid = () => {
    if (
      !createGame.row.trim() ||
      !createGame.column.trim() ||
      !createGame.bomb.trim()
    ) {
      setValid(false);
      return;
    }
    if (
      !isNaN(+createGame.row) &&
      !isNaN(+createGame.column) &&
      !isNaN(+createGame.bomb)
    ) {
      setValid(true);
      return;
    }
    setValid(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="number of rows"
        value={createGame.row}
        onChangeText={(val) => createGame.setRow(val)}
        textColor="#1DA1F2"
      />
      <TextInput
        style={styles.input}
        label="number of columns"
        value={createGame.column}
        onChangeText={(val) => createGame.setColumn(val)}
        textColor="#1DA1F2"
      />
      <TextInput
        style={styles.input}
        label="number of bombs"
        value={createGame.bomb}
        onChangeText={(val) => createGame.setBomb(val)}
        textColor="#1DA1F2"
      />
      {valid == false ? (
        <Text style={{ color: "red" }}>Invalid data</Text>
      ) : (
        <></>
      )}
      <Link
        onPress={handleCheckValid}
        to={valid ? "/play" : "/"}
        style={styles.playButton}
      >
        <Text style={styles.playText}>Create New Game</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "createGame.row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,

    fontSize: 16,
    backgroundColor: "white",

    marginBottom: 10,
  },
  playButton: {
    borderRadius: "25%",

    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#1DA1F2",

    marginTop: 10,
  },
  playText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
