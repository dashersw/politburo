var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    del = require('del'),
    path = require('path'),
    lazypipe = require('lazypipe'),
    runSequence = require('run-sequence'),
    source = require('vinyl-source-stream');

function compileJs(options, cb) {
    var babel = require('babelify'),
        browserify = require('browserify'),
        buffer = require('vinyl-buffer'),
        closureCompile = require('./tasks/compile').closureCompile;

    options = options || {};

    var srcDir = './src/';
    var srcFilename = 'index.js';
    var destDir = './www/';
    var destFilename = 'index.js';

    var bundler = browserify(srcDir + srcFilename, {debug: true, paths: ['src/']}).transform(babel);
    var activeBundleOperationCount = 0;

    function rebundle(cb) {
        activeBundleOperationCount++;
        bundler.bundle().on('error', function(err) {
            console.error(err);
            this.emit('end');
        }).pipe(lazybuild()).pipe($.rename(destFilename)).pipe(lazywrite()).on('end', function() {
            activeBundleOperationCount--;
            if (activeBundleOperationCount == 0) {
                console.info('All current JS updates done.');
                cb && cb();
            }
        });
    }

    function minify(cb) {
        console.log('Minifying ' + srcFilename);
        closureCompile(srcDir + srcFilename, destDir, destFilename).then(function() {
            cb && cb();
        });
    }

    var lazybuild = lazypipe().pipe(source, srcFilename).pipe(buffer).pipe($.sourcemaps.init.bind($.sourcemaps));

    var lazywrite = lazypipe().pipe(gulp.dest.bind(gulp), destDir);

    if (options.closureCompile) {
        minify(cb);
    } else {
        rebundle(cb);
    }
}

gulp.task('compile-dev', function(cb) {
    compileJs({watch: true}, cb);
});

gulp.task('compile-bundle', function(cb) {
    compileJs({closureCompile: true}, cb);
});


gulp.task('default', function() {
    var closureCompiler = require('google-closure-compiler').gulp();
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src(['./src/**/*.js'], {base: './'})
               .pipe(sourcemaps.init())
               .pipe(closureCompiler({
                   compilation_level: 'ADVANCED_OPTIMIZATIONS',
                   warning_level: 'VERBOSE',
                   language_in: 'ECMASCRIPT6_TYPED',
                   // assume_function_wrapper: true,
                   externs: [
                       'externs/amd.js'
                   ],
                   language_out: 'ECMASCRIPT5_STRICT',
                   output_module_dependencies: 'dependencies.json',
                   // preserve_type_annotations: true,
                   summary_detail_level: 3,
                   // new_type_inf: true,
                   // tracer_mode: 'ALL',
                   use_types_for_optimization: true,
                   dependency_mode: 'STRICT',
                   process_common_js_modules: true,
                   formatting: ['PRETTY_PRINT'/*, 'PRINT_INPUT_DELIMITER'*/],
                   js_module_root: ['/src'],
                   jscomp_error: '*',
                   jscomp_warning: ['lintChecks'],
                   jscomp_off: ['extraRequire', 'inferredConstCheck'],
                   hide_warnings_for: '[synthetic',
                   entry_point: 'politburo',
                   generate_exports: true,
                   export_local_property_definitions: true,
                   // output_manifest: 'manifest.txt',
                   // variable_renaming_report: 'variable_map.txt',
                   // property_renaming_report: 'property_map.txt',
                   output_wrapper: `(function(){\n%output%\n
                   
var politburo = this.politburo;
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function() {
        return politburo;
    });
} else if (typeof exports === 'object') {
    // CommonJS
    exports.politburo = politburo;
}
else {
    // Browser global.
    window.politburo = politburo;
}
}).call({});`,
                   js_output_file: 'script.js'
               }))
               .pipe(sourcemaps.write('/')) // gulp-sourcemaps automatically adds the sourcemap url comment
               .pipe(gulp.dest('./dist/js'));
});

gulp.task('bundle', function(callback) {
    runSequence('clean:before',
        ['compile-bundle'],// 'lib-bundle', 'templates-bundle', 'css-bundle'],
        callback);
});

gulp.task('bundle-prod', function(callback) {
    runSequence('clean:before',
        ['compile-bundle'],
        'concat',
        callback);
});

gulp.task('clean:before', function() {
    return del(['dist/*']);
});

