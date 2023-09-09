

// Example from the repo. 
/*
readfile takes 1 arg
path to file
readFile('/path/to/file')

writeFile takes 2 args
path to file
content to write
writeFile('/path/to/file', '{"foo": "bar"}')
*/
// so this reads file. displays it. then saves whatever we want back to that file. 
// no appending. just overwriting.

import {readFile, writeFile} from '../../helpers/file-helpers.js';
const DATA_FILE = '/src/database.json';

function AboutPage() {

  let {hits} = JSON.parse(readFile(DATA_FILE));
  console.log(hits);

  hits++;

  writeFile(DATA_FILE, JSON.stringify({hits}));

  return (
    <main>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>You are visitor number {hits}</p>
    </main>
  );
}
export default AboutPage;