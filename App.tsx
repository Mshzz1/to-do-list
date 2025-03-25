import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text,TextInput, View } from 'react-native';
import _tarefa from "./types/_tarefas"
import Tarefa from './components/Tarefa';

export default function App() {
  const [texto, setTexto] = useState<string>('')
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);
  function mostrarTarefas(){
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir}/>)
  }
  function excluir (id:number){
    let f = tarefas.filter (t =>t.id != id);
    setTarefas(f);
  }

  function adicionarTareda(){
    if(texto==""){
      alert("insira um texto");
      return;
    }
    let tarefa: _tarefa ={
      id: tarefas.length +1,
      texto:texto
    };

    setTarefas([...tarefas,tarefa]);
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={texto} onChangeText={setTexto} />
      <Button title="adicionar tarefa" onPress={adicionarTareda}/>
      {mostrarTarefas()}
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderRadius:"10px",
    color:"black",
    padding:10,
    margin:10,
    borderColor:"black",
    borderWidth:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
