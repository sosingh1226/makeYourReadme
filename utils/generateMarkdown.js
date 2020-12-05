
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
