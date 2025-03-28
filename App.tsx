import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


import _tarefa from "./types/_tarefas"
import Tarefa from './components/Tarefa';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [texto, setTexto] = useState<string>('')
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);
  function mostrarTarefas() {
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir} />)
  }
  function excluir(id: number) {
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  function adicionarTareda() {
    if (texto == "") {
      alert("insira um texto");
      return;
    }
    let tarefa: _tarefa = {
      id: tarefas.length + 1,
      texto: texto
    };

    setTarefas([...tarefas, tarefa]);
  }
  return (
  <SafeAreaProvider >
      <SafeAreaView  style={styles.container} edges={['top']}>
        <View style={styles.header}>To-do List</View>

        <View style={styles.mid}>
            <TextInput style={styles.input} value={texto} onChangeText={setTexto} />
            <Button title="adicionar tarefa" onPress={adicionarTareda} />
          </View>  
          <View  style={styles.listaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {mostrarTarefas()}
            </ScrollView>
          </View>
        
        <View style={styles.footer}> todos os direitos reservados ao &copy;João Vitor Mendes Pascolat</View>
      </SafeAreaView >
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mid:{
    justifyContent:"center",
    alignContent:"center",
  },
  listaContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex: 1,
    width: "90%",
  },
  input: {
    borderRadius: "10px",
    color: "black",
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  header: {
    height: 50,
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    width: "99%",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#677E52",
    fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 20,

  },
  footer: {
    height: 50,
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    width: "99%",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#677E52",
    fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 20,
  },
  container: {

    flex: 1,

    backgroundColor: '#E3D9D7',
    alignItems: 'center',
    justifyContent: "space-between",
  },
});
