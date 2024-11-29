import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Paticipante } from "../../components/Participante";

export function Home (){
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participanteName, setParticipanteName] = useState('');
  

  function handleParticipantAdd(){
      if(participantes.includes(participanteName)){
        return Alert.alert('Participante ja exitente', 'ja existe esse participante na lista com esse nome');
      }

     setParticipantes(estadoAtual => [...estadoAtual, participanteName])
     //['jão'] => ['jão', 'Ana']
      setParticipanteName('')
  } 

  function handleParticipantRemove(name: string){
    Alert.alert('Remover Participante', `Deseja remover ${name}?`, [
      {
        text: 'sim',
        onPress: () => setParticipantes(prevState => prevState.filter(participantes =>participantes !== name))
      },
      {
        text: 'não',
        style: 'cancel'
      }
    ]);
   
  }


    return(
      
      <View style={styles.container}>

        <Text style={styles.texto1}>Nome do evento</Text>

        <Text style={styles.texto2}>Quinta-feira, 21 de novembro de 2024</Text>

        <View style={styles.form}>
          <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipanteName}
          value={participanteName}/>

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
            +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participantes}
          keyExtractor={item => item}
          renderItem={({item})=> 
            <Paticipante 
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
              />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.list}>
                Ninguem está cadastrado para o evento ainda? adicione rapidamente
            </Text>
          )}
        />

        
        
      </View>

    )
}
