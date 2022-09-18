# React BorderRadius Previewer

CSSプロパティである、`border radius`で設定できる丸みの値をリアルタイムで調整でき、その値をクリップボードにコピーすることができます。

# 利用技術
- Vite
- React
- TypeScript

# デプロイ
- Vercel

# 実装に苦労したところ

- `border-radius`の値を監視する際に、`input type="range"`を使用する際の四角形の位置調整に苦戦しました。
- clipboardにコピーする実装が初見だったので新たな知見になりました。(https://developer.mozilla.org/ja/docs/Web/API/Clipboard/write)

# 本番URL
https://react-border-radius-previewer.vercel.app/