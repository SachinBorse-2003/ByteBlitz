import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';

const ChatbotScreen = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const openaiResponse = await fetch('https://your-server.com/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const responseData = await openaiResponse.json();
      setResponse(responseData.response);
    } catch (error) {
      console.error('Error generating response:', error);
      Alert.alert('Error', 'Failed to generate response');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Type a message"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Send" onPress={handleSendMessage} />
      <Text>{response}</Text>
    </View>
  );
};

export default ChatbotScreen;