let path = require('path');
let {
  Command,
  create,
  findProjectPath,
} = require('@elements/create');

exports.default = Command.create('api', 'Create an api routes file.')
  .arg('[version]', 'The api version (defaults to v1).')
  .opt('replace', 'Automatically replace existing files.')
  .opt('stdout', 'Write file paths to stdout.')
  .example('Create app/routes/api/v1/index.ts', 'elements create api')
  .onRun(async function(cmd) {
    let version = cmd.get('version', 'v1');
    let projectPath = findProjectPath();
    let dstPath = path.join(projectPath, 'app', 'routes', 'api', version, 'index.ts');

    await create(__dirname, {
      projectPath: projectPath,
      srcPath: path.join('src', 'index.ts'),
      dstPath: dstPath,
      replace: cmd.get('replace', undefined),
      writePathsToStdout: cmd.get('stdout', false),
      renderData: { version },
    });
  });
