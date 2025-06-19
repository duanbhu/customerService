
function handleWechatClick() {
    // 添加调试日志
    console.log('Attempting to call native method...');
    if (window.webkit && webkit.messageHandlers?.openWechatChat) {
        console.log('WebKit message handler found');
        webkit.messageHandlers.openWechatChat.postMessage(null);
    } else {
        console.log('Falling back to URL scheme');
        window.location.href = 'XbdMerchantHub://openWechatChat';
    }
}

function handleNativeCall(phoneNumber) {
    if (window.webkit && webkit.messageHandlers?.nativeCall) {
        webkit.messageHandlers.nativeCall.postMessage(phoneNumber);
    } else {
        window.location.href = 'XbdMerchantHub://call?number=' + phoneNumber;
    }
}