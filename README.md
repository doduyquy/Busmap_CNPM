# Đồ án Busmap - CNPM

# NOTE:
> node_modules KHÔNG BAO GIỜ push lên GitHub.

## Xóa node_modules khỏi git tracking (xóa khỏi git index (không phải source))

    git rm -r --cached node_modules

## Tạo file .gitignore (để đánh đấu những file nào sẽ ignore - không push lên GitHub)

- Đảm bảo có file .gitignore trong **root project** với nội dung (quan trọng nhất là node_modules/, để lần sau git không track lại thư mục này):

        ```
        node_modules/
        .next/
        dist/
        .env
        ```
  
1. Ở root dir:

        nano .gitignore

2. Paste to that file:

        ```
        # Dependencies
        node_modules/

        # Next.js build output
        .next/
        out/

        # Production
        build/

        # Logs
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*

        # OS files
        .DS_Store

        # Env files
        .env
        .env.local
        .env.*.local
        ```

3. Then, add file *.gitignore* and commit &rarr; push to GitHub

## (Vẫn lỗi) Dọn sạch toàn bộ lịch sử repo để xóa mọi dấu vết node_modules &rarr; *git-filter-repo*

1. Cài đặt git-filter-repo
    ```
    sudo apt install git-filter-repo
    ```            

- Win/Mac dùng: `pip install git-filter-repo`

2. (Force) để rewrite history:

    ```
    git filter-repo --path node_modules --invert-paths --force
    ```

3. Kiểm tra lại cấu hình remote (nếu mất thì add lại)

    ```
    git remote -v
    git remote add origin https://github.com/doduyquy/Busmap_CNPM.git
    git push -u origin main
    ```



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
