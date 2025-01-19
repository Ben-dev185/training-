import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormulaireInscription = ({
  onSubmit,
  boutonTexte = "Inscription",
  afficherLienConnexion = true,
  onLienConnexionPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Titre principal */}
      <Text style={styles.title}>Inscription</Text>

      {/* Ligne pour les champs "Prénom" et "Nom" */}
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Prénom" />
        <TextInput style={styles.input} placeholder="Nom" />
      </View>

      {/* Champs individuels pour l'adresse mail, le mot de passe et la confirmation */}
      <TextInput style={styles.inputFull} placeholder="Adresse Mail" keyboardType="email-address" />
      <TextInput style={styles.inputFull} placeholder="Mot de passe" secureTextEntry />
      <TextInput style={styles.inputFull} placeholder="Confirmer votre Mot de Passe" secureTextEntry />

      {/* Section en bas pour les liens, si activée */}
      {afficherLienConnexion && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={onLienConnexionPress}>
            <Text style={styles.link}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bouton d'inscription */}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{boutonTexte}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA726',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    width: '48%',
    fontSize: 16,
  },
  inputFull: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
    fontSize: 16,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
  link: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#E65100',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormulaireInscription;