import { useEffect, useState } from "react";

export default function useTateti() {
  const [matriz, setMatriz] = useState(Array(9).fill(""));
  const [jugador, setJugador] = useState("O");
  const [ganador, setGanador] = useState("");

  const handlePress = (index) => {
    const nuevaMatriz = [...matriz];
    nuevaMatriz[index] = jugador;
    setMatriz(nuevaMatriz);
  };

  const cambiarJugador = () => {
    setJugador(jugador === "X" ? "O" : "X");
  };

  const checkEmpate = () => {
    if (!matriz.includes("")) {
      // alert("¡Empate!\n\nNo hay más movimientos posibles.");
      // vaciarArray();
      setGanador("Empate");
    }
  };

  const checkGanador = () => {
    if (
      (matriz[0] === matriz[1] &&
        matriz[1] === matriz[2] &&
        matriz[1] !== "") ||
      (matriz[3] === matriz[4] &&
        matriz[4] === matriz[5] &&
        matriz[4] !== "") ||
      (matriz[6] === matriz[7] &&
        matriz[7] === matriz[8] &&
        matriz[7] !== "") ||
      (matriz[0] === matriz[3] &&
        matriz[3] === matriz[6] &&
        matriz[3] !== "") ||
      (matriz[1] === matriz[4] &&
        matriz[4] === matriz[7] &&
        matriz[1] !== "") ||
      (matriz[2] === matriz[5] &&
        matriz[5] === matriz[8] &&
        matriz[5] !== "") ||
      (matriz[0] === matriz[4] &&
        matriz[4] === matriz[8] &&
        matriz[4] !== "") ||
      (matriz[2] === matriz[4] && matriz[4] === matriz[6] && matriz[4] !== "")
    ) {
      //alert(`¡Hay un ganador!\n\nEl jugador ${jugador} ha ganado la partida.`);
      setGanador(jugador);
    } else {
      checkEmpate();
    }
  };

  //   const checkGanador = () => {
  //     const combinacionesGanadoras = [
  //       [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //       [0, 3, 6],
  //       [1, 4, 7],
  //       [2, 5, 8],
  //       [0, 4, 8],
  //       [2, 4, 6],
  //     ];
  //     for (const combinacion of combinacionesGanadoras) {
  //       const [a, b, c] = combinacion;
  //       if (
  //         casillas[a] &&
  //         casillas[a] === casillas[b] &&
  //         casillas[a] === casillas[c]
  //       ) {
  //         return casillas[a]; // devuelve el ganador ("X" o "O")
  //       }
  //     }
  //   };

  //   function wins(player, board) {
  //   return [
  //     [0,1,2], [3,4,5], [6,7,8],
  //     [0,3,6], [1,4,7], [2,5,8],
  //     [0,4,8], [2,4,6],
  //   ].some(
  //     (line) => line.map((i) => board[i]).every((sq) => sq === player),
  //   );
  // } // function win

  useEffect(() => {
    checkGanador();
    cambiarJugador();
  }, [matriz]);

  const vaciarArray = () => {
    setMatriz(Array(9).fill(""));
    setGanador("");
  };

  return {
    matriz,
    jugador,
    handlePress,
    vaciarArray,
    ganador
  };
}
