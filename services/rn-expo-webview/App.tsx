import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import WebViewScreen from '@/screens/WebViewScreen';

/**
 * Application root component.
 *
 * Responsibilities / 역할:
 *  - Wraps the content in a [SafeAreaView] to respect system insets
 *    ([SafeAreaView]로 시스템 인셋을 고려한 콘텐츠 래핑)
 *  - Renders the [WebViewScreen] which contains all WebView + bridge logic
 *    (모든 WebView + 브릿지 로직을 포함하는 [WebViewScreen] 렌더링)
 */
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar style="light" />
      <WebViewScreen />
    </SafeAreaView>
  );
}

