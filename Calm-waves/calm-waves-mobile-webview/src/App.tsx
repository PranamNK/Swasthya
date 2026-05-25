import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WEBVIEW_URL = 'http://192.168.244.1:9002';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: WEBVIEW_URL }}
        startInLoadingState
        renderLoading={() => <ActivityIndicator size="large" />}
        javaScriptEnabled
        domStorageEnabled
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}

