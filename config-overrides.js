const {alias} = require("react-app-rewire-alias");

module.exports = function override(config, env){
    alias({
        // '@components': 'src/components',
        // '@constants': 'src/constants',
        '@containers': 'src/containers',
        // '@hoc-helpers': 'src/hoc-helpers',
        // '@services': 'src/services',
        '@static': 'src/static',
        // '@routes': 'src/routes',
        '@styles': 'src/styles',
        // '@hooks': 'src/hooks',
        // '@utils': 'src/utils',
        // '@ui': 'src/components/UI',
        // '@store': 'src/store',
        // '@context': 'src/context',
    })(config);

    return config
}