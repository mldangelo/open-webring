/* Parses rings defined as JSON in /ringworld and outputs an index to be consumed by our next app */

const fs = require('fs');
const { promisify } = require('util');
const glob = require('glob');
const Ajv = require('ajv').default; // Should validation come from something like typescript or reason?

const ajv = new Ajv();

const siteSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3, maxLength: 60 },
    title: { type: 'string', minLength: 3, maxLength: 200 },
    link: { type: 'string', format: 'uri' }
  },
  "additionalProperties": false,
};

const ringSchema = {
  type: 'object',
  properties: {
    slug: { type: 'string', minLength: 3, maxLength: 60 },
    name: { type: 'string', minLength: 3, maxLength: 140 },
    description: { type: 'string', minLength: 25, maxLength: 500 },
  },
  required: ['slug', 'name', 'description'],
};

// const validateSite = (schema, site) => ajv.validate(schema, site);

const extractRingDefintion = async (path) => {
  const pattern = /ring\/(.*).json$/g; // extracts file name from ring directory - json extension
  return {
    slug: pattern.exec(path)[1],
    ...JSON.parse(await promisify(fs.readFile)(path)),
  };
};

const loadIndex = async (rings, path) => {
  // loads entities to file
  await promisify(fs.writeFile)(path, JSON.stringify(rings, null, 4));
};

const makeIndex = (rings) => {
  return rings.filter(ring => ajv.validate(ringSchema, ring)).map(({ slug, name, description, sites}) => { 
    return {slug, name, description, count: sites.length}; 
  });
};


(async () => {
  const files = glob.sync('public/ring/**/*.json');
  const ringDefintions = await Promise.all(files.map(extractRingDefintion));
  await loadIndex(makeIndex(ringDefintions), 'public/rings.json');
})();