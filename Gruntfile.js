var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    wiredep: {
      dist: {
        src: [
          'src/**/*.html',
          'src/scss/main.scss'
        ]
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'Handlebars.templates',
          processName: function(filePath) {
            return filePath.replace(/src\/templates\/(.*)\.hbs/, '$1');
          },
          partialRegex: /^_/
        },
        files: {
          '.tmp/templates.js': [
            'src/templates/**/*.hbs'
          ]
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '.tmp/main.css': 'src/scss/main.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: [
              'last 3 version'
            ]
          }),
          require('cssnano')()
        ]
      },
      dist: {
        src: '.tmp/main.css',
        dest: 'dist/css/main.css'
      }
    },

    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/images',
            src: [
              '**/*.{png,jpg,gif}'
            ],
            dest: 'dist/images'
          }
        ]
      }
    },

    copy: {
      dist: {
        files: [
          {
            src: 'src/index.html',
            dest: 'dist/index.html'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap-sass/assets/fonts',
            src: [
              '**/*'
            ],
            dest: 'dist/fonts'
          }
        ]
      }
    },

    'useminPrepare': {
      options: {
        dest: 'dist'
      },
      html: 'src/index.html'
    },

    usemin: {
      html: [
        'dist/index.html'
      ]
    },

    eslint: {
      lint: [
        'src/js/**/*.js'
      ]
    },

    watch: {
      options: {
        livereload: true
      },
      scss: {
        files: [
          'src/scss/**/*.scss'
        ],
        tasks: [
          'sass',
          'postcss',
          'build-usemin'
        ]
      },
      js: {
        files: [
          'src/js/**/*.js'
        ],
        tasks: [
          'build-usemin',
          'test'
        ]
      },
      images: {
        files: [
          'src/images/**/*.{png,jpg,gif}'
        ],
        tasks: [
          'imagemin'
        ]
      },
      templates: {
        files: [
          'src/templates/**/*.hbs'
        ],
        tasks: [
          'handlebars',
          'build-usemin',
          'test'
        ]
      },
      html: {
        files: [
          'src/index.html'
        ],
        tasks: [
          'build'
        ]
      },
      bower: {
        files: [
          'bower.json'
        ],
        tasks: [
          'build',
          'test'
        ]
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          port: 8000,
          base: 'dist',
          middleware: function(connect, options) {
            return [
              function(req, res) {
                var filename = options.base[0] + req.url;
                if (!grunt.file.exists(filename) || !grunt.file.isFile(filename)) {
                  filename = options.base[0] + '/index.html';
                }
                res.end(grunt.file.read(filename));
              }
            ];
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('lint', [
    'eslint'
  ]);
  grunt.registerTask('test', [
  ]);
  grunt.registerTask('build-usemin', [
    'useminPrepare',
    'copy',
    'concat',
    'uglify',
    'usemin'
  ]);
  grunt.registerTask('build', [
    'wiredep',
    'handlebars',
    'sass',
    'postcss',
    'imagemin',
    'build-usemin'
  ]);
  grunt.registerTask('default', [
    'lint',
    'test',
    'build'
  ]);
};
