#!/usr/bin/env node
'use strict';

const cli       = require('commander')
const generator = require('./libs/generator')

cli
  .version('0.0.1')
  .usage('[command] <name> [<folder>]')
  .command('reducer <name> <folder>', 'Generate a reducer')
  .on('reducer', generator.reducer)

  .command('component <name> <folder>', 'Generate a react component')
  .on('component', generator.component)

  .parse(process.argv)

module.exports = cli