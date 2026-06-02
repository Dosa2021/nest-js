<img width="929" height="519" alt="Image" src="https://github.com/user-attachments/assets/222d6e84-9d27-4a39-ae09-9e99d71803d0" />

npm run start:dev
docker compose up

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

・ユーザー作成機能作成
・パスワードのハッシュ化

・JWT
https://qiita.com/asagohan2301/items/cef8bcb969fef9064a5c#5-jwt%E8%AA%8D%E8%A8%BC%E3%81%AE%E6%B5%81%E3%82%8C
