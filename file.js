const fs = require("fs");

const read = (namePath) =>
  fs.readFileSync(`${__dirname}/original/${namePath}`, {
    encoding: "utf-8",
  });

const write = (namePath, content) => {
  const dirname = `${__dirname}/alter`;
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }

  fs.writeFileSync(`${dirname}/${namePath}`, content, {
    encoding: "utf-8",
  });
};

module.exports = { read, write };
