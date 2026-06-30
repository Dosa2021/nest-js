<img width="929" height="519" alt="Image" src="https://github.com/user-attachments/assets/222d6e84-9d27-4a39-ae09-9e99d71803d0" />

npm run start:dev
http://localhost:3000/

docker exec -it postgres psql -U nestjsuser fleamarket
npx prisma migrate dev --name init
npx prisma studio

udemy「NestJS入門 TypeScriptではじめるサーバーサイド開発」

NestJSのメリット
・型の恩恵
・expressを使える
・nest cli
・テストフレームワーク
・拡張性

NestJSのデメリット
・情報が少ない
・日本語ドキュメントがない

## 基本

・module作成
nest g module items

・コントローラー作成
nest g controller items

・サービス作成
nest g service items

## 使用ツール

・Insomnia（APIクライアント）

## Memo

・DI（依存性の注入）

    ・x コントローラーでnew
    ・o 外部でnewする？

・DTO
・Pipe

## トラブル

・マイグレーション実行err
npx prisma migrate dev --name init
→ docker再起動

・client password must be a string
