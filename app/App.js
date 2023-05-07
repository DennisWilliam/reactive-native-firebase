import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { db } from "./src/config/index";
import { collection, getDocs } from "firebase/firestore";
import Auth from "./src/components/auth";

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const testeCollection = collection(db, "teste");

    const pegarListaTeste = async () => {
      try {
        const dados = await getDocs(testeCollection);
        const dadosFiltrados = dados.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDados(dadosFiltrados);
      } catch (err) {
        console.log(err);
      }
    };

    pegarListaTeste();
  }, []);

  return (
    <View style={styles.container}>
      <Auth />
      {dados.map((linha) => (
        <Text key={linha.id} style={{ color: "#fff" }}>
          {linha.nome}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
