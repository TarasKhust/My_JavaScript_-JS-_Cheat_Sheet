const path = require('path');
// const glob = require('glob');
const glob = require('glob-all');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const files = glob.sync([
//     'files/**',      //include all     files/
//     '!files/x/**',   //then, exclude   files/x/
//     'files/x/z.txt'  //then, reinclude files/x/z.txt
// ]);
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}
module .exports = {
    entry: {
        app: './src/app.js',
        // contact: './src/contact.js',
 },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, "dist"),
        // publicPath: '/'
    },
    module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
    },
    {
        test: /\.jade$/,
        use: 'jade-loader'
    },
    {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty:true
        }
    },
    {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
        'file-loader?name=img/[name].[ext]',
        // 'file-loader?name=[name].[ext]&outputPath=../img/&publicPath=.img/',
        'image-webpack-loader'
        ]
    },
    {
        test: /\.svg$/,
        use: [
        'file-loader?name=img/icons/[name].[ext]',
        // папка с которой брать и в какую ставить 'file-loader?name=[name].[ext]&outputPath=img/icons/&publicPath=img/icons/',
            'image-webpack-loader'
        ]
    },

    // {   test: /\.(woff2?)$/, loader: 'url-loader?limit=10000' },
    {   test: /\.(woff2?|ttf|eot|otf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]' },

        {   test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
                publicPath: '../'
            })
        },
    {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','sass-loader'],
            publicPath: '../'
        })
    },
    {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','postcss-loader','stylus-loader'],
            publicPath: '../'
        })
    },
  ]
},


// Плагины и НАстройки
plugins: [
    new HtmlWebpackPlugin({
    title: 'Index',
    template: './src/pug/pages/index.pug',
    hash: true,
    // excludeChunks: ['contact'],
    // minify: {
    //     collapseWhitespace: true
    // },
}),
    new HtmlWebpackPlugin({
    title: 'Photo',
    template: './src/pug/pages/photo.pug',
    hash: true,
    // chunks: ['contact'],
    filename: 'photo.html',
    }),

    new HtmlWebpackPlugin({
        title: 'Form',
        template: './src/pug/pages/form.pug',
        hash: true,
        // chunks: ['contact'],
        filename: 'form.html',
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),

    new ExtractTextPlugin({
        filename: 'css/[name].css',
        disable: false,
        allChunks: true
    }),
    new PurifyCSSPlugin({
        // paths: glob.sync(path.join(__dirname, 'src/*.pug')),
        paths: glob.sync([
            path.join(__dirname, 'src/pug/*.pug'),
            path.join(__dirname, 'src/pug/modules/*.pug'),
            path.join(__dirname, 'src/pug/pages/*.pug'),
            path.join(__dirname, 'src/js/*.js')
        ]),
        purifyOptions: { info: true, minify: false }
    }),
]
};
