const inquirer = require('inquirer');
const TreePrompt = require('inquirer-tree-prompt');

inquirer.registerPrompt('tree', TreePrompt);

inquirer
  .prompt([
    {
      type: 'tree',
      name: 'location',
      message: 'Where is my phone?',
      tree: [
        {
          value: 'in the house',
          open: true,
          children: [
            {
              value: 'in the living room',
              children: [
                'on the sofa',
                { value: 'on the TV cabinet', disabled: true } // disable selecting this node
              ]
            },
            {
              value: 'in the bedroom',
              children: [
                'under the bedclothes',
                { value: 'on the bedside table', disabled: true } // disable selecting this node
              ]
            },
            'in the bathroom'
          ]
        },
        {
          value: 'in the car',
          children: [
            'on the dash',
            'in the compartment',
            'on the seat'
          ]
        }
      ]
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers))
  });
