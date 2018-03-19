module.exports = plop => {
    plop.setGenerator('component', {
        description: 'design system component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name of component?',
            },
            {
                type: 'checkbox',
                name: "templateChoices",
                message: 'What do you want to generate?',
                choices: [
                    { name: "Component file", value: "component", short: "component", checked: true },
                    { name: "Ink file", value: "ink", short: "ink", checked: true },
                    { name: "SASS file", value: "sass", short: "sass", checked: true },
                    { name: "Markdown file", value: "markdown", short: "markdown", checked: true },
                    { name: "Define component using an ES6 class", value: "class", short: "class" }
                ]
            }
        ],
        actions: (data) => {
            let actions = [];
            const {templateChoices, name} = data;
            let componentTemplateName = templateChoices.indexOf("class") !== -1
                ? "componentClass.hbs"
                : "component.hbs";

            if (templateChoices.indexOf("component") !== -1) {
                actions.push({
                    type: 'add',
                    path: '../components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                    templateFile: `templates/${componentTemplateName}`,
                    skipIfExists: true
                });
            }

            if (templateChoices.indexOf("sass") !== -1) {
                actions.push({
                    type: 'add',
                    path: '../components/{{pascalCase name}}/{{kebabCase name}}.scss',
                    templateFile: 'templates/component-sass.hbs',
                    skipIfExists: true
                });
            }

            if (templateChoices.indexOf("ink") !== -1) {
                actions.push({
                    type: 'add',
                    path: '../components/{{pascalCase name}}/{{pascalCase name}}.ink.jsx',
                    templateFile: 'templates/component-ink.hbs',
                    skipIfExists: true
                });
            }

            if (templateChoices.indexOf("markdown") !== -1) {
                actions.push({
                    type: 'add',
                    path: '../components/{{pascalCase name}}/{{pascalCase name}}.md',
                    templateFile: 'templates/component-md.hbs',
                    skipIfExists: true
                });
            }
            return actions;
        }
    });
};