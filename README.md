# DevExam ショッピングカートチャレンジ

このリポジトリは、DevExam実践課題のためのショッピングカート機能を含むシンプルなEコマースアプリケーションです。

## プロジェクト概要

このプロジェクトは、React、React Router、およびコンテキストAPIを使用して構築されたシンプルなEコマースアプリケーションです。主な機能には、商品一覧表示、商品詳細表示、ショッピングカート機能などが含まれています。

## 開発環境

- Node.js (v14.0.0以上)
- npm (v6.0.0以上)
- Vite
- React 18
- React Router v6

## 環境構築手順

1. リポジトリをクローン
```bash
git clone https://github.com/devexam/shopping-cart-challenge.git
cd shopping-cart-challenge
```

2. 依存パッケージをインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 にアクセスして動作確認

## 課題の詳細

詳細な課題内容については、サイト上の説明を参照してください。

## プロジェクト構造

```
shopping-cart-challenge/
├── public/           # 静的ファイル
│   └── images/       # 商品画像
├── src/              # ソースコード
│   ├── components/   # UIコンポーネント
│   ├── context/      # Reactコンテキスト
│   ├── data/         # データファイル
│   ├── hooks/        # カスタムフック
│   ├── pages/        # ページコンポーネント
│   ├── App.jsx       # メインアプリケーション
│   ├── main.jsx      # エントリーポイント
│   └── index.css     # グローバルスタイル
└── ...               # その他の設定ファイル
```

## ライセンス

このプロジェクトはDevExamの教育目的のために提供されており、商用利用は禁止されています。

© 2025 DevExam, All Rights Reserved.
