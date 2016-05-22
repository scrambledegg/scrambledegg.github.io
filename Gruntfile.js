module.exports = function (grunt) {
  grunt.initConfig({
    image: {
      static: {
        options: {
          pngquant: true,
          optipng: true,
          zopflipng: true,
          advpng: true,
          jpegRecompress: true,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        },
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'site/public/img',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'site/public/img'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-image');
}
