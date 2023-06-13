import React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/components/Home";
import Play from "./src/components/Play";
import CreateGameContext from "./src/context/CreateGameContext";

export default function App() {
  return (
    <CreateGameContext>
      <NativeRouter>
        <Routes>
          <React.Fragment>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              exact
              path="/play"
              element={
                <>
                  <Play />
                </>
              }
            />
          </React.Fragment>
        </Routes>
      </NativeRouter>
    </CreateGameContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
