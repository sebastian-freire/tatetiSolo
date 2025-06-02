import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTateti from "./tateti";

export default function Play() {
  const { matriz, jugador, handlePress, vaciarArray } = useTateti();
  return (
    <View
      style={{
        backgroundColor: "grey",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>
        Turno del jugador: {jugador}
      </Text>
      <View style={styles.cuadricula}>
        {matriz.map((value, index) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => handlePress(index)}
                style={[
                  styles.button,
                  value === "❌" && { backgroundColor: "#0f85a2" },
                  value === "⭕" && { backgroundColor: "#a2330f" }
                ]}
                disabled={value !== ""}
              >
                <Text style={styles.botonText}>{matriz[index]}</Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={vaciarArray}
        style={[styles.button, styles.playAgainbutton]}
      >
        <Text style={styles.Text}>Volver a empezar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cuadricula: {
    margin: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b3f51"
  },
  playAgainbutton: {
    backgroundColor: "blue",
    borderRadius: 20,
    width: 250,
    height: 80
  },
  botonText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "sans-serif-light",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  Text: {
    color: "white",
    fontSize: 24,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  }
});
