import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://naver.com' }} // TODO: 대상 URL
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          allowsInlineMediaPlayback
          setSupportMultipleWindows={false}
          mixedContentMode="always" // ANDROID: http/https 혼합 허용(개발)
          onError={(e) => console.log('WebView error', e.nativeEvent)}
        />
      </View>
    </SafeAreaView>
  );
}
