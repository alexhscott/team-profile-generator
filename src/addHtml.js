const manager = require('../lib/manager');
const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const employee = require('../lib/employee');


const addHtml = function(team) {
    const employeeArrayHtml = []
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" context="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profiles</title>
            <link href="https://cdn.jsdelir.net/npm/bootsrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            </head>

            <body>
                <div class"container-fluid">
                    <div class="row bg-danger text-center">
                        <h2 class="text-light p-4">My Team</h2>
                    </div>

                    <div class="row g=2 justify-content-around p-3">
    `;
    employeeArrayHtml.push(html);

    for (let i = 0; i < team.length; i++) {
        employeeArrayHtml.push(team[i].getHTML());
    };

    return employeeArrayHtml.join('\r\n');
};

module.exports = addHtml;