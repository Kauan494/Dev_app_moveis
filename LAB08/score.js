import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = 'scores';


export async function lerScores() {
  const texto = await AsyncStorage.getItem(CHAVE);

  if (texto === null) {
    return [];
  }

  return JSON.parse(texto);
}


export async function salvarScore(jogo, jogador, pontos) {
  const scores = await lerScores();

  const existente = scores.find(
    (item) => item.jogo === jogo && item.jogador === jogador
  );

  if (existente) {
    if (pontos <= existente.pontos) {
      return false; // não bateu o recorde
    }
    existente.pontos = pontos;
  } else {
    scores.push({ jogo: jogo, jogador: jogador, pontos: pontos });
  }

  await AsyncStorage.setItem(CHAVE, JSON.stringify(scores));
  return true; // novo recorde
}