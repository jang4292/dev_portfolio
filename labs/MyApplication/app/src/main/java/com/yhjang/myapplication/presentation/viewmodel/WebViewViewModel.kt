package com.yhjang.myapplication.presentation.viewmodel

import androidx.lifecycle.ViewModel
import com.yhjang.myapplication.domain.model.BridgeMessage
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

/**
 * ViewModel for the WebView screen.
 * Holds UI state and processes bridge messages received from JavaScript.
 *
 * WebView 화면의 ViewModel입니다.
 * UI 상태를 보유하고 JavaScript에서 수신한 브릿지 메시지를 처리합니다.
 */
class WebViewViewModel : ViewModel() {

    // ─── UI State ──────────────────────────────────────────────────────────────

    /**
     * Tracks WebView page loading progress (0–100).
     * WebView 페이지 로딩 진행률을 추적합니다 (0–100).
     */
    private val _loadingProgress = MutableStateFlow(0)
    val loadingProgress: StateFlow<Int> = _loadingProgress.asStateFlow()

    /**
     * True while the WebView is loading a page, false when finished.
     * WebView가 페이지를 로드하는 동안 true, 완료 후 false입니다.
     */
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    /**
     * Non-null when a WebView error has occurred; null otherwise.
     * WebView 오류 발생 시 null이 아님, 그렇지 않으면 null입니다.
     */
    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage: StateFlow<String?> = _errorMessage.asStateFlow()

    /**
     * The last [BridgeMessage] received from JavaScript; null until the first message arrives.
     * JavaScript에서 수신된 마지막 [BridgeMessage]; 첫 메시지 수신 전까지는 null입니다.
     */
    private val _lastBridgeMessage = MutableStateFlow<BridgeMessage?>(null)
    val lastBridgeMessage: StateFlow<BridgeMessage?> = _lastBridgeMessage.asStateFlow()

    // ─── Event Handlers ────────────────────────────────────────────────────────

    /** Called when WebView starts loading a new page. (WebView가 새 페이지 로드 시작 시 호출) */
    fun onPageStarted() {
        _isLoading.value = true
        _loadingProgress.value = 0
        _errorMessage.value = null
    }

    /** Called when WebView finishes loading. (WebView 로딩 완료 시 호출) */
    fun onPageFinished() {
        _isLoading.value = false
        _loadingProgress.value = 100
    }

    /**
     * Called as the WebView reports incremental progress.
     * WebView가 점진적 진행률을 보고할 때 호출됩니다.
     *
     * @param progress 0–100
     */
    fun onProgressChanged(progress: Int) {
        _loadingProgress.value = progress
        if (progress >= 100) _isLoading.value = false
    }

    /**
     * Called when WebView encounters an error.
     * WebView에서 오류가 발생하면 호출됩니다.
     *
     * @param description Human-readable error description (사람이 읽을 수 있는 오류 설명)
     */
    fun onError(description: String) {
        _isLoading.value = false
        _errorMessage.value = description
    }

    /**
     * Called when a [BridgeMessage] arrives from JavaScript.
     * JavaScript에서 [BridgeMessage]가 도착할 때 호출됩니다.
     *
     * @param message The decoded bridge message (디코딩된 브릿지 메시지)
     */
    fun onBridgeMessage(message: BridgeMessage) {
        _lastBridgeMessage.value = message
        android.util.Log.d(TAG, "Bridge message received: $message")
        // TODO: dispatch specific actions based on message.action
        // TODO: message.action에 따라 특정 액션 디스패치
    }

    companion object {
        private const val TAG = "WebViewViewModel"
    }
}
