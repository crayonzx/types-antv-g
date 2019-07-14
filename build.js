const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'tmp');
const workingDir = path.resolve('../typed-g');
const command = `yarn run tsc --outDir ${path.relative(workingDir, outDir)}`;

console.log('\nCompiling definition files...');
console.log(`>>> working dir: ${workingDir}`);
console.log(`>>> output dir: ${outDir}`);
console.log(`>>> ${command}`);

var buffer = new Buffer('');

try {
  buffer = execSync(command, { cwd: workingDir });
} catch (error) {
  if (error.stdout && error.stderr) {
    // console.log(error.stdout.toString());

    const stdoutArray = error.stdout.toString().split('\n');

    stdoutArray.forEach((s) => {
      if (!s.includes('error TS1005') && !s.includes('error TS1068')) {
        console.log(s);
      }
    });

    console.log(error.stderr.toString());

    stdoutArray.forEach((s) => {
      if (
        s.includes('TS2506') ||
        s.includes('TS4023') ||
        s.includes('TS4082') ||
        s.includes('TS5055') ||
        s.includes('private')
      ) {
        throw new Error(s);
      }
    });
  } else {
    console.log(error);
  }
}

if (!fs.existsSync(outDir) || !fs.existsSync(path.join(outDir, 'index.d.ts'))) {
  console.log(buffer.toString());
  throw Error('Compiling failed!!!');
}

console.log('\nDone compiling.\n');
