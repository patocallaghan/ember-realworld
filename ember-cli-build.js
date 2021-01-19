'use strict';

const funnel = require('broccoli-funnel');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const BroccoliDebug = require('broccoli-debug');
const broccoliHandlebars = require('broccoli-handlebars-precompiler');
const concat = require('broccoli-concat');

module.exports = function(defaults) {
  let debugTree = BroccoliDebug.buildDebugCallback(`raw-handlebars`);
  let app = new EmberApp(defaults);

  app.import('node_modules/handlebars/dist/handlebars.js');

  //========= RAW HANDLEBARS
  let templates = funnel('app/templates-raw', {
    srcDir: '/',
    destDir: '/assets',
  });
  let compiledTemplates = broccoliHandlebars(templates, {
    srcDir: '/',
    namespace: 'Handlebars.templates',
  });
  let concatHandlebars = concat(compiledTemplates, {
    outputFile: 'assets/templates-raw.js',
    inputFiles: ['**/*'],
    sourceMapConfig: { enabled: false },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitAtRoutes: [
      'editor',
      'settings',
      'register',
      'login',
      'articles',
      'profile',
      'error',
      'content-editor',
    ],
    extraPublicTrees: [concatHandlebars],
  });
};
