const createBundler = require('@airtable/blocks-webpack-bundler').default;
const webpack = require('webpack'); // Import webpack

function createConfig(baseConfig) {
    // Create the plugins array if it doesn't exist
    baseConfig.plugins = baseConfig.plugins || [];

    // Add the ProvidePlugin to the Webpack configuration so we can include the Buffer polyfill
    baseConfig.plugins.push(
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
    );

    return baseConfig;
}

exports.default = () => {
    return createBundler(createConfig);
};
