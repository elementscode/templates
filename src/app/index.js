let path = require('path');
let {
  Command,
  create
} = require('@elements/create');

exports.default = Command.create('app', 'Create an app.')
  .arg('nameOrPath', 'The name or path of the app to create.')
  .onRun(async function(cmd) {
    console.log(process.argv);
    console.log(process.env.NODE_PATH);
    await create({
      rootDirPath: __dirname,
      srcRootPath: 'src',
      nameOrPath: cmd.get('nameOrPath', '.'),
      dstPathPrefix: '',
    });
  });
