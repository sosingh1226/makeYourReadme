// const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <img src=`${https://img.shields.io/badge/LICENSE-mit-green/}`>
// </body>
// </html>`;

LICENSE: MIT

// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: 
  ${data.Title},

  # Description of the Project:
  ${data.Description},

  # Installation Instructions:
  ${data.Instructions},

  # Usage Information:
  ${data.Information},

  # Contribution Guidelines:
  ${data.Guidelines},

  # Test Instructions:
  ${data.TestInstructions}

  # GitHub Link:
  ${data.GitHub}

  # Email:
  ${data.Email}`
}

module.exports = generateMarkdown;
