module.exports = {
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@babel/preset-env'
    ],
    plugins: ['@babel/transform-runtime','@babel/plugin-proposal-class-properties', ['import', { 'libraryName': 'antd', 'style': true }]]
};