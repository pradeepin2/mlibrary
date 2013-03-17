/**
 * Created with IntelliJ IDEA.
 * User: Pradeep
 * Date: 3/16/13
 * Time: 9:52 AM
 * To change this template use File | Settings | File Templates.
 * Common file to define the configuration using require js .
 *
 * 1)specify the baseURL for require js to other files
 * 2)paths , aliases corresponding to the files
 * 3)shim dependecy loading has to be defined here..
 */

//Define configurations..
function includeCommonConfig(){
    require.config({
        baseUrl: '/js',
        paths: {
            jquery: 'lib/zepto.min'
        },
        shim: {
        }
    });
}

// Separate config to hide from build script
/*require.config({
    i18n: {
        locale: _BM_USER_LANGUAGE
    }
});*/