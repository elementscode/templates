let path = require('path');
let {
  Command,
  create
} = require('@elements/create');

exports.default = Command.create('page', 'Create a page.')
  .arg('nameOrPath', 'The name or path of the page to create.')
  .example('Create a page in directory app/pages/home.', 'elements create page home')
  .example('Create a page in the current directory.', 'elements create page .')
  .example('Create a page in the directory app/pages/items/create.', 'elements create page items/create')
  .onRun(async function(cmd) {
    await create({
      rootDirPath: __dirname,
      srcRootPath: 'src',
      dstPathPrefix: path.join('app', 'pages'),
      nameOrPath: cmd.get('nameOrPath', '.'),
    });
  });
