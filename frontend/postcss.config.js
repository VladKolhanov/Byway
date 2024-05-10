/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-mixins'),
    require('postcss-nested')({ preserveEmpty: true }),
    require('postcss-pxtorem')({
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'gap'],
    }),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-assets')({ loadPaths: ['public/assets/'] }),
  ],
}
