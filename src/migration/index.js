let path = require('path');
let {
  Command,
  create,
  findProjectPath,
  getTimeStamp,
} = require('@elements/create');

exports.default = Command.create('migration', 'Create a database migration.')
  .arg('[description]', 'The description for the migration.')
  .opt('stdout', 'Write file paths to stdout.')
  .onRun(async function(cmd) {
    let nameOrPath = cmd.get('nameOrPath', 'index.ts');
    let projectPath = findProjectPath();
    let dstPath = path.join(projectPath, 'app', 'migrations', getTimeStamp() + '.ts');
    let renderData = {
      description: cmd.get('description', 'TODO'),
    };

    await create(__dirname, {
      projectPath: projectPath,
      srcPath: path.join('src', 'migration.ts'),
      dstPath: dstPath,
      writePathsToStdout: cmd.get('stdout', false),
      renderData: renderData,
    });
  });
