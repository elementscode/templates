let path = require('path');
let {
  Command,
  create,
  findProjectPath,
} = require('@elements/create');

exports.default = Command.create('config', 'Create an app config file.')
  .arg('[nameOrPath]', 'The name or path of the config file.')
  .opt('replace', 'Automatically replace existing files.')
  .opt('stdout', 'Write file paths to stdout.')
  .example('Create app/config/index.ts', 'elements create config')
  .example('Create app/config/aws.ts', 'elements create config aws')
  .onRun(async function(cmd) {
    let nameOrPath = cmd.get('nameOrPath', 'index.ts');
    let projectPath = findProjectPath();
    let dstPath;

    if (nameOrPath.charAt(0) === '.') {
      // example: elements create config ./app/config/boom
      dstPath = path.join(process.cwd(), nameOrPath);
    } else {
      // example: elements create config
      // example: elements create config aws => app/config/aws.ts
      dstPath = path.join(projectPath, 'app', 'config', nameOrPath);
    }

    await create(__dirname, {
      projectPath: projectPath,
      srcPath: path.join('src', 'index.ts'),
      dstPath: dstPath,
      replace: cmd.get('replace', undefined),
      writePathsToStdout: cmd.get('stdout', false),
    });
  });
