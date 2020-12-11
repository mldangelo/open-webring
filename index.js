const fs = require('fs');
const glob = require('glob');
const Ajv = require('ajv'); // Should validation come from something like typescript or reason?

const ajv = new Ajv();

const schema = {
    type: 'object',
    properties: {
        name: {type: 'string', minLength: 3, maxLength: 60},
        title: {type: 'string', minLength: 3, maxLength: 200},
        url: {type: 'string', format: 'uri'},
    },
};

glob('ring/**/*.json', (er, files) => {
    for (const file of files) {
        const json = JSON.parse(fs.readFileSync(file));
        for (const object of json) { 
            const res = ajv.validate(schema, object);
            console.log(object, res);
        }
    }
});