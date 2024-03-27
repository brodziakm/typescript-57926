#!/usr/bin/env node
"use strict";

const ngPackage = require('ng-packagr');

ngPackage
  .ngPackagr()
  .forProject('libs/spaces/ng-package.json')
  .withTsConfig('libs/spaces/tsconfig.lib.json')
  .build()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
