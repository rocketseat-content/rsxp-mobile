import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function Anchor({ href, children }) {
  function handlePress() {
    WebBrowser.openBrowserAsync(href || children, {
      toolbarColor: '#100F12',
    });
  }

  return (
    <Text style={{ textDecorationLine: 'underline' }} onPress={handlePress}>
      {children}
    </Text>
  );
}
