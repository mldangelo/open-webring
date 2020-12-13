# TODO

1. Write Manefesto
   1. Webrings were a great way to discover content + they were fun
   2. Open source hosted on github - no backend (filesystem as db) - data open and free - will never fail due to lack of funding
   3. Justify 90s web design principals within the context of a SSR next app
   4. Justify using github as they backend
   5. Define common use cases - personal sites from CS class, enthusiast sites
2. Define Structure of Repository
   1. src - contains next app
   2. rings - contains ring JSON definitions
3. Define schema
   1. Should different rings have different schema?
   2. Validate schema
   3. Which fields in schema are mutable, which are not? slug should be immutable.
   4. Define schema to describe rings
      1. slug
      2. title
      3. purpose (descriptive text)
      4. categories?
      5. Qualifications for membership.
   5. Support for custom schemas + renderers
4. Define how changes to rings & new rings are approved
   1. Should we really use PRs for everything? Are there rate limits?
   2. 1 ring per site?
   3. How should sites be ordered within a ring?
   4. how big can rings get?
   5. Are sites removed from the ring? How do we moderate membership?
5. Add sample code display a webring on your site
   1. HTML table? no javascript? 
   2. filter / highlight your site
   3. npm packages that are minimally scoped and auto publish - `const ring = require('open-webring/dumpster-fire');`
   4. Also render JSON to html for iframe
6. Study Previous + Existing Webring efforts
   1. understand schemas, ordering, indexing, content
   2. Why did they fail? - Talk about in Manefesto, justify existence
   3. Ask for Sage Weil's blessing
   4. Consider re-implementing the old webring.org api
7. Next App
   1. favicon - circularly linked list?
   2. Move schema validation into app
   3. Borrow styles/tables from webring.org
   4. Auto generate index as part of next app
8. CI
   1. Build app in CI
   2. Add tests to validating ring JSONs
   3. Add a github action to scrape member sites + check if webring is on site
   4. https://github.com/palantir/bulldozer for automating approvals
9. Convince a group of people to join a webring.
