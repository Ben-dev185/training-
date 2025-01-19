import React, { useState } from 'react';
import { Alert } from 'react-native';
import FormulaireInscription from './FormulaireInscription'; // Assurez-vous que ce chemin est correct

const Authentification = ({ onLienConnexionPress }) => {
  // États pour chaque champ du formulaire
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Fonction de validation des données
  const handleSubmit = () => {
    if (!prenom || !nom || !email || !password || !confirmPassword) {
      Alert.alert('Erreur', 'Tous les champs doivent être remplis.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erreur', 'Veuillez entrer une adresse email valide.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas.');
      return;
    }

    // Si tout est valide
    Alert.alert('Succès', `Bienvenue ${prenom} ${nom}!`);
    console.log('Données soumises :', { prenom, nom, email, password });
  };

  // Validation de l'adresse email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <FormulaireInscription
      onSubmit={handleSubmit}
      boutonTexte="S'inscrire"
      afficherLienConnexion
      onLienConnexionPress={onLienConnexionPress}
      prenom={prenom}
      setPrenom={setPrenom}
      nom={nom}
      setNom={setNom}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
    />
  );
};

export default Authentification;
s