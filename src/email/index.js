let path = require('path');
let {
  Command,
  create,
  findProjectPath,
} = require('@elements/create');

exports.default = Command.create('email', 'Create an email.')
  .arg('nameOrPath', 'The name or path of the email.')
  .opt('stdout', 'Write file paths to stdout.')
  .opt('replace', 'Automatically replace existing files.')
  .opt('react', 'Use react instead of html.')
  .onRun(async function(cmd) {
    let projectPath = findProjectPath();
    let nameOrPath = cmd.get('nameOrPath', '.');

    let dstPath;
    if (nameOrPath.charAt(0) === '.') {
      dstPath = path.join(process.cwd(), nameOrPath);
    } else {
      dstPath = path.join(findProjectPath(), 'app', 'emails', nameOrPath);
    }

    let srcPath = cmd.has('react') ? 'src/react' : 'src/html';

    await create(__dirname, {
      projectPath: projectPath,
      srcPath: srcPath,
      dstPath: dstPath,
      replace: cmd.get('replace', undefined),
      merge: cmd.get('merge', undefined),
      writePathsToStdout: cmd.get('stdout', false),
    });
  });
