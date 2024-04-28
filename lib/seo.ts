export const seo = {
    title: 'Huanxiaomang | 前端开发者',
    description:
        '我叫 Huanxiaomang，软件工程大二，热爱前端方向，音游玩家，梦想大厂',
    url: new URL(
        process.env.NODE_ENV === 'production'
            ? 'https://cali.so'
            : 'http://localhost:3000'
    ),
} as const
