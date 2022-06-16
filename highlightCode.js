const applyColor = (txt, reg, color) =>
  txt.replace(reg, `<span style="color: #${color}"><b>$1</b></span>`);

const files = require("./file");
const text = files.read("sourceCode.html");

const codeRegex = /<code>[\s\S]*<\/code>/i;
let code = text.match(codeRegex)[0];

// String
code = applyColor(code, /(\".*\")/g, "ce9178");

// Reverved words
code = applyColor(
  code,
  /\b(package|import|public|class|static|if|else)\b/g,
  "d857cf"
);

// Types
code = applyColor(code, /\b(void|int|Scanner)\b/g, "1385e2");

// Comments
code = applyColor(code, /(\/\*[\s\S]*\*\/)/g, "267703");
code = applyColor(code, /(\/\/.*?\n)/g, "267703");

const finalContent = text.replace(codeRegex, code);

files.write("finalCode.html", finalContent);
