#!/usr/bin/env node

import program from 'commander';
import gendiff from '../';
import version from '../../package.json';


program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format', 'visual')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig, option) => {
    console.log(gendiff(firstConfig, secondConfig, option.format));
  })
  .parse(process.argv);
