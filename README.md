# open-webring

Join a webring, create your own, or fork this repository and host your own.

Create a new ring or add an entry to one of the existing JSONs.

Rings are available at https://openwebring.com/ring/[slug].json

## Manifesto

Do you remember when the internet used to be fun? Back in the days before search engines indexed everything, webrings were the de-facto way to discover content. 

## Goals

- Free, serverless webrings for anyone that wants to join.
- Heavily leverage GH ecosystem.
- Enforce participation / auto moderation
- Use github as a JSON api
- Record changes to rings via git

## TODO

1. Define schema
2. validate schema
3. Define how changes are approved
   1. - rate limit?
4. Add sample code to get a webring
   1. filter / highlight your site
5. how big can rings get?
6. Add a github action to check if webring is on site
7. npm packages that are minimally scoped and auto publish - `const ring = require('open-webring/dumpster-fire');`
8. Shoud webrings also have descriptive text? 
9. Also render JSON to html for iframe 
10. Define schema to describe rings - each ring should have a slug, title, purpose, etc. Qualifications for membership 
11. 1 ring per site? 

## References

1. Inspired by https://github.com/XXIIVV/webring https://github.com/ckipp01/webring-cli
2. https://github.com/hackclub/webring
3. https://github.com/topics/webring
4. https://github.com/palantir/bulldozer
5. 