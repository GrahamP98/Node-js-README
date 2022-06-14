const fs = require('fs');
const generateLicense = (type) => {
  let color;
  if (type === "MPL") color = "red";
  if (type === "GPL") color = "gray";
  if (type === "Apache") color = "green";
  if (type === "MIT") color = "blue";
  if (type === "CC") color = "yellow";
  if (type === "BSD") color = "purple";
  return (
    `## License
![license picture](https://img.shields.io/badge/license-${type}-${color})
    `
  );
};
// generates markdown for README
const generateMarkdown = ({
  Title,
  Description,
  github,
  repo,
  Usage,
  Credits,
  license
}) => {
  console.log('Generating README...');
  const template = (
    `# ${Title}

## Description
${Description}

## Table of Contents
      
- [Resources](#Resources)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
      
## Resources
[Github Account](https://github.com/${github})

[Github Repository](https://github.com/${github}/${repo})

[Live Site](https://${github}.github.io/${repo}/)

## Usage
${Usage}

# Credits
${Credits}

${generateLicense(license)}


`
  );
  fs.writeFileSync('./output/README.md', template);
  console.log('Template Granted!');
  process.exit();
};

module.exports = {
  generateMarkdown
};