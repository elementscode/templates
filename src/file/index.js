let path = require('path');
let fs = require('fs');
let {
  Command,
  findProjectPath,
  create,
} = require('@elements/create');

exports.default = Command.create('file', 'Create an empty file.')
  .arg('path', 'The path of the file.')
  .opt('stdout', 'Write file paths to stdout.')
  .opt('replace', 'Automatically replace the existing file.')
  .example('Create the file app/shared/notes.txt', 'elements create file app/shared/notes.txt')
  .onRun(async (cmd) => {
    let projectPath = findProjectPath();
    let filePath = cmd.get('path');
    let dstPath;

    if (filePath.charAt(0) === '.') {
      dstPath = path.join(process.cwd(), filePath);
    } else {
      dstPath = path.join(projectPath, filePath);
    }

    await create(__dirname, {
      projectPath: projectPath,
      dstPath: dstPath,
      replace: cmd.get('replace', undefined),
      merge: cmd.get('merge', undefined),
      writePathsToStdout: cmd.get('stdout', false),
    });
  });
