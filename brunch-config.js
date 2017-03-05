// See http://brunch.io for documentation.
exports.files = {

};

module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  modules: {
    // See: http://brunch.io/docs/config#-modules-
    autoRequire: {
      'app.js': ['initialize']
    }
  }
}
