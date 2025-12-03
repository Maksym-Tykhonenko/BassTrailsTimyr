import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppButton } from '../bassTrailsComponents/AppButton';
import { Card } from '../bassTrailsComponents/Card';

type NameInputScreenProps = {
  onContinue: (name: string) => void;
};

export function NameInputScreen({ onContinue }: NameInputScreenProps) {
  const [name, setName] = useState('');

  const handleContinue = () => {
    const trimmedName = name.trim();
    if (trimmedName.length > 0) {
      onContinue(trimmedName);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>ENTER YOUR NAME</Text>

      <Card style={styles.inputCard} innerStyle={styles.inputCardInner}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="NICK"
            placeholderTextColor="#ffffff"
            value={name}
            onChangeText={setName}
            autoFocus
            autoCapitalize="words"
            maxLength={20}
            returnKeyType="done"
            onSubmitEditing={handleContinue}
          />
        </View>
      </Card>

      <AppButton
        label="CONTINUE"
        onPress={handleContinue}
        disabled={name.trim().length === 0}
        size="large"
        style={styles.continueButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    paddingVertical: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  inputCard: {
    width: '100%',
  },
  inputCardInner: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#ff8c42',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 60,
    justifyContent: 'center',
  },
  input: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'left',
  },
  continueButton: {
    width: '100%',
    marginTop: 8,
  },
});

