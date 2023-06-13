import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CreateGameContext } from "../../context/CreateGameContext";

function Play() {
  console.log(1);
  const createGame = useContext(CreateGameContext);
  const { row, column } = createGame;

  const [table, setTable] = useState(null);
  let cells = [];

  for (let j = 0; j < row; j++) {
    let row = [];
    for (let i = 0; i < column; i++) {
      row.push(
        <TouchableOpacity
          style={styles.cell}
          key={`cell-${i}-${j}`}
          color="#007AFF"
        >
          <Text>{`${i},${j}`}</Text>
        </TouchableOpacity>
      );
    }
    cells.push(
      <View key={j} style={{ display: "flex", flexDirection: "row" }}>
        {row}
      </View>
    );
  }

  return <View style={styles.container}>{cells.map((ele) => ele)}</View>;
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
  cell: {
    backgroundColor: "red",
    marginRight: 2,
    marginBottom: 2,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
  },
});

export default Play;
