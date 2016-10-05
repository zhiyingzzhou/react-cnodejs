var execSync = require('child_process').execSync;
var opn = require('opn');

function openBrowser(url) {
  if (process.platform === 'darwin') {
    try {
      execSync('ps cax | grep "Google Chrome"');
      execSync(
        'osascript openChrome.applescript ' + url,
        {cwd: __dirname, stdio: 'ignore'}
      );
      return true;
    } catch (err) {
    }
  }
  try {
    opn(url);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = openBrowser;