import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.greetingText}>Olá, usuário</Text>
          <Text style={styles.planText}>Ajudamos você a elevar seus negócios nas modalidades Aceleradoras ou Incubadoras</Text>
        </View>

        <View>
          {/* Adicione a imagem aqui, se necessário */}
        </View>

        <View style={styles.sessionInfoContainer}>
          <Text style={styles.sessionInfoText}>Entenda um pouco mais sobre os temas citados acima</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.accessClassButton}
            onPress={() => navigation.navigate('Matricula')}
          >
            <Text style={styles.buttonText}>Aceleradoras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accessTrainingButton}
            onPress={() => navigation.navigate('Treino')}
          >
            <Text style={styles.buttonText}>Incubadoras</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
        <Image
          style={styles.workoutImage}
          source={require('../../assets/imagem-engrenagens.jpeg')}
          resizeMode="contain"
        />
        
        <Image
          style={styles.workoutImage}
          source={require('../../assets/imagem-quebra.cbç.jpg')}
          resizeMode="contain"
        />
        </View>
        
        <View style={styles.upgradeButtonContainer}>
          <TouchableOpacity
            style={styles.upgradeButton}
            onPress={() => navigation.navigate('Esqueci Senha')}
          >
            <Text style={styles.upgradeButtonText}>Upgrade do Plano</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  greetingText: {
    fontSize: 18,
    color: '#34495E',
    borderBottomWidth: 2,
    borderBottomColor: '#48C9B0',
    fontWeight: 'bold',
  },
  planText: {
    fontSize: 22,
    color: '#34495E',
    padding: 50,
  },
  sessionInfoContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 70,
    marginBottom: 40,
  },
  sessionInfoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 55,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  accessClassButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#34495E',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 5,
  },
  accessTrainingButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#48C9B0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  box: {
    flexDirection: 'row',
  },

  workoutImage: {
    width: 200,
    height: 200,
  },
  upgradeButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  upgradeButton: {
    width: '40%',
    height: 40,
    backgroundColor: '#f8da45',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  upgradeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
