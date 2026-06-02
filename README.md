<img width="929" height="519" alt="Image" src="https://github.com/user-attachments/assets/222d6e84-9d27-4a39-ae09-9e99d71803d0" />

npm run start:dev
docker compose up

px prisma studio

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

【基本】
・module作成
nest g module items

・コントローラー作成
nest g controller items

・サービス作成
nest g service items

nest g resource auth

【講義内容】
sec3: バリデーションと例外
・DTO
・pipe
・class-validator
・例外処理

【入門】DTOって結局ナニをNest.jsで学ぶ
https://zenn.dev/minateru/articles/afc74c519461a9

sec4: データベース
・prisma

sec5:
・authディレクトリ作成
nest g resource auth

・userテーブル作成
npx prisma migrate dev --name addUsser

・CreateUserDto定義
