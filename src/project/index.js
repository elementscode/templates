let path = require('path');
let {
  Command,
  create,
} = require('@elements/create');

function getTodo(nameOrPath) {
  let todo = 'elements start';
  if (nameOrPath !== '.') {
    todo = 'cd ' + nameOrPath + '\n' + todo;
  }
  return todo;
}

exports.default = Command.create('project', 'Create an empty project.')
  .arg('nameOrPath', 'The name or path of the project.')
  .opt('stdout', 'Write file paths to stdout.')
  .opt('merge', 'Automatically merge into existing json files.')
  .opt('replace', 'Automatically replace existing files.')
  .onRun(async function(cmd) {
    let nameOrPath = cmd.get('nameOrPath', '.');

    await create(__dirname, {
      srcPath: 'src',
      dstPath: path.join(process.cwd(), nameOrPath),
      todo: getTodo(nameOrPath),
      replace: cmd.get('replace', undefined),
      merge: cmd.get('merge', undefined),
      writePathsToStdout: cmd.get('stdout', false),
    });
  });
