let path = require('path');
let {
  Command,
  create,
  style,
  indent,
} = require('@elements/create');

exports.default = Command.create('app', 'Create an app.')
  .arg('nameOrPath', 'The name or path of the app to create.')
  .onRun(async function(cmd) {
    let nameOrPath = cmd.get('nameOrPath', '.');

    await create({
      rootDirPath: __dirname,
      srcRootPath: 'src',
      nameOrPath: nameOrPath,
      dstPathPrefix: '',
      onJobSummary: (job) => {
        let todo = 'elements install && elements start';
        if (nameOrPath !== '.') {
          todo = 'cd ' + nameOrPath + ' && ' + todo;
        }
        return style.header('Todo:') + '\n\n' + style.subtle(indent(todo, 2));
      },
    });
  });
