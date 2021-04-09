let path = require('path');
let {
  Command,
  create,
  findProjectPath,
} = require('@elements/create');

exports.default = Command.create('page', 'Create a page.')
  .arg('nameOrPath', 'The name or path of the page.')
  .opt('stdout', 'Write file paths to stdout.')
  .opt('replace', 'Automatically replace existing files.')
  .opt('react', 'Use react instead of html.')
  .example('Create the home page.', 'elements create page home')
  .example('Create a nested page at app/pages/items/update.', 'elements create page items/update')
  .onRun(async function(cmd) {
    let projectPath = findProjectPath();
    let nameOrPath = cmd.get('nameOrPath', '.');

    let dstPath;
    if (nameOrPath.charAt(0) === '.') {
      dstPath = path.join(process.cwd(), nameOrPath);
    } else {
      dstPath = path.join(findProjectPath(), 'app', 'pages', nameOrPath);
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
