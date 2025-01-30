import FontPreloadPlugin from "webpack-font-preload-plugin";

export const plugins = [
    new FontPreloadPlugin({
        extensions: ['woff2', 'woff'],
        crossorigin: true,
        include: 'allAssets', // 모든 에셋에서 폰트 검색
    }),
];