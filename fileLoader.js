const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFileSync);

async function loadFile(fileName) {
  let fullpath = 'data/' + fileName + '.txt';
  return await readFile(fullpath);
}

async function loadFiles() {
  // loadFile("truth").then((datas) => {
  //   data["truth"] = datas.toString().split('\n');
  //   console.log("callback");
  // })
  
  Promise.all([loadFile("truth"), loadFile("story"), loadFile("tellMe"), loadFile("barkeep")]).then((values) => {
    // console.log("vals " + values)
    return values
    // return {
    //   "truth": truth.toString().split('\n'),
    //   "story": story.toString().split('\n'),
    //   "tellMe": tellMe.toString().split('\n'),
    //   "barkeep": barkeep.toString().split('\n')
    // }
  });

  // let [truth, story, tellMe, barkeep] = await Promise.all([loadFile("truth")])
  // loadFile("story")
  // loadFile("tellMe");
  // loadFile("barkeep");
  
  // return data;
}

module.exports = {
  loadFiles: loadFiles
};