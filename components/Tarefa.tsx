import _tarefa from "../types/_tarefas"
import{Button, Text, View, StyleSheet} from "react-native"

type tarefaProp = {
    dados : _tarefa,
    handleDeletePress : any
}

export default function Tarefa(props:tarefaProp){
    return <View style={styles.meio}>
     <Text style={styles.texto}>{props.dados.texto}</Text>
        <Button color={"red"} title ="Excluir"
        onPress={()=> {props.handleDeletePress(props.dados.id)}}/>
    </View>;
}
    const styles = StyleSheet.create({
        meio:{
            alignItems:"center",
            width:230,
        },
        texto:{
            fontFamily: "apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            width:230,
            padding:10,
            marginTop:10,
            borderRadius:10,
            textAlign:"center",
            color:"white",
            backgroundColor:"#677E52",
            marginBottom:10,
            fontSize:20,
        },
        div:{
            borderWidth:1
        }
    })
