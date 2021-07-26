// Wrapper Function
module.exports = function (grunt) {
  // Do grunt-related things in here
};

// Project Configuration Object
/**
 * Like most tasks, the grunt-contrib-uglify plugin's uglify task expects its
 * configuration to be specified in a property of the same name. Here, the
 * banner option is specified, along with a single uglify target named build
 * that minifies a single source file to a single destination file.
 */
grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  uglify: {
    options: {
      banner:
        '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    },
    build: {
      src: "src/<%= pkg.name %>.js",
      dest: "build/<%= pkg.name %>.min.js",
    },
  },
});
