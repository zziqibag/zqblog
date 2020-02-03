const isProd = process.env.NODE_ENV === 'production'
const withCss = require('@zeit/next-css')
const CleanWebpackPlugin = require('clean-webpack-plugin');

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
    
})
