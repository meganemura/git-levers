git-levers
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/git-levers.svg)](https://npmjs.org/package/git-levers)
[![CircleCI](https://circleci.com/gh/meganemura/git-levers/tree/master.svg?style=shield)](https://circleci.com/gh/meganemura/git-levers/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/meganemura/git-levers?branch=master&svg=true)](https://ci.appveyor.com/project/meganemura/git-levers/branch/master)
[![Codecov](https://codecov.io/gh/meganemura/git-levers/branch/master/graph/badge.svg)](https://codecov.io/gh/meganemura/git-levers)
[![Downloads/week](https://img.shields.io/npm/dw/git-levers.svg)](https://npmjs.org/package/git-levers)
[![License](https://img.shields.io/npm/l/git-levers.svg)](https://github.com/meganemura/git-levers/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g git-levers
$ git-levers COMMAND
running command...
$ git-levers (-v|--version|version)
git-levers/0.0.0 darwin-x64 node-v10.9.0
$ git-levers --help [COMMAND]
USAGE
  $ git-levers COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`git-levers hello [FILE]`](#git-levers-hello-file)
* [`git-levers help [COMMAND]`](#git-levers-help-command)
* [`git-levers runcom [FILE]`](#git-levers-runcom-file)

## `git-levers hello [FILE]`

describe the command here

```
USAGE
  $ git-levers hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ git-levers hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/meganemura/git-levers/blob/v0.0.0/src/commands/hello.ts)_

## `git-levers help [COMMAND]`

display help for git-levers

```
USAGE
  $ git-levers help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.1/src/commands/help.ts)_

## `git-levers runcom [FILE]`

describe the command here

```
USAGE
  $ git-levers runcom [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/runcom.ts](https://github.com/meganemura/git-levers/blob/v0.0.0/src/commands/runcom.ts)_
<!-- commandsstop -->
