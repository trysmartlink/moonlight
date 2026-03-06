document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');

    if (playButton) {
        playButton.addEventListener('click', () => {
            // Meta Pixel イベントを発火
            if (typeof fbq === 'function') {
                
                // 標準イベント「Purchase」として送信（ブラウザ計測のみ）
                fbq('track', 'Purchase', {
                    content_name: '満月と優勝',
                    content_category: 'Music',
                    value: 1.00,       // Purchaseイベントの必須パラメータ
                    currency: 'JPY',   // Purchaseイベントの必須パラメータ
                    platform: 'Spotify'
                });
                console.log('Meta Pixel Event: Purchase Tracked (Browser Only)');
            } else {
                console.warn('Meta Pixel (fbq) not loaded or accessible.');
            }
        });
    }
});
