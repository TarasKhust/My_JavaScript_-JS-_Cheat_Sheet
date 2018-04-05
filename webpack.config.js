const path = require('path');
const glob = require('glob-all');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module .exports = {
    entry: {
        app: './src/assets/app.js',
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
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        use: [
        'file-loader?name=images/[name].[ext]',
        // 'file-loader?name=[name].[ext]&outputPath=../images/&publicPath=.images/',
        'image-webpack-loader'
        ]
    },
        // {
        //     test: /\.svg$/,
        //     loader: 'svg-sprite-loader',
        //     options: {
        //         runtimeCompat: true
        //     }
        // },
        // {
        // loader: 'svgo-loader',
        //     options: {
        //         plugins: [
        //             {removeTitle: true},
        //             {convertColors: {shorthex: false}},
        //             {convertPathData: false}
        //         ]
        //     }
        // },

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
    template: './src/assets/pug/pages/index.pug',
    hash: true,
    // excludeChunks: ['contact'],
    // minify: {
    //     collapseWhitespace: true
    // },
}),
    new HtmlWebpackPlugin({
    title: 'Photo',
    template: './src/assets/pug/pages/photo.pug',
    hash: true,
    // chunks: ['contact'],
    filename: 'photo.html',
    }),

    new HtmlWebpackPlugin({
        title: 'Form',
        template: './src/assets/pug/pages/form.pug',
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
            path.join(__dirname, 'src/assets/pug/*.pug'),
            path.join(__dirname, 'src/assets/pug/blocks/*.pug'),
            path.join(__dirname, 'src/assets/pug/pages/*.pug'),
            path.join(__dirname, 'src/assets/js/*.js')
        ]),
        purifyOptions: { info: true, minify: false }
    }),
]
};
