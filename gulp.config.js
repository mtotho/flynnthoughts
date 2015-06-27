module.exports = function(){
    var source = './src/';
    var client = source;
    var server = './';


    var config = {
        appjs:[
            client+'**/*.module.js',
            client+'**/*.js',
            '!'+client+'/assets/**/*.js'
        ],

        client:client,
        index:client+'index.html',
        bower:{
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath:'../..'
        },
        html:client+ '**/*.html',
        defaultPort: 8085,

        server: server,
        source:source,
        nodeServer: './flynnthoughts.js'
    };

    config.getWiredepDefaultOptions = function(){
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        }
        return options;
    }

    return config;
};