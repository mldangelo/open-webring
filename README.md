# open-webring

Join a webring, create your own, or fork this repository and host your own for free.

Rings are available at https://openwebring.com/ring/[slug].json. See the [sample](ring/sample.json) webring for an example.

## Manifesto

Do you remember when the internet used to be fun? Back in the days before search engines indexed everything, before the internet was hyper-optimized for business, webrings were the de-facto way to discover content. Open-Webring is designed for hobbiests, enthusiasts, artists, and creatives that would like to build inclusive online communities around shared interests and help surfers discover great content. 

TODO: Talk about membership.

## How To Join a Webring

1. Add an entry to the ring you wish to join  in [/ring](/ring) and submit a PR to this repository. For example, we can join the [sample](/ring/sample.json) webring which has the has the schema definition:

  ```json
      {
        "name": "string",
        "title": "string",
        "url": "string"
      }
  ```

  so a valid entry could be:

  ```json
      {
        "name": "Michael D'Angelo",
        "title": "Software Engineer",
        "url": "https://mldangelo.com",
      }
  ```

2. Add open-webring to your website. Webrings can be added to your site in many formats. The simplest way is to add:

  ```html
    <script async type="text/javascript" src="https://openwebring.com/ring/sample.js" charset="utf-8"></script>
  ```
  to your website. 

  Alternatively, you can add an iframe:

  ```html
    <iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
  ``` 
 
  Or fetch and parse the webring yourself using javascript

  ```javascript
    fetch('https://openwebring.com/ring/sample.json')
      .then(response => response.json())
      .then(data => console.log(data));
  ```

3. After we've validated that you have added open-webring to your site, we'll merge your PR and welcome you into the community. 

## Goals

- Free, serverless webrings for anyone that wants to join.
- Use github as a JSON api - Heavily leverage GH ecosystem.
- track changes to rings via git diff.
- Enforce participation / auto moderation

## TODO

1. Define schema
  - Should different rings have different schema?
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
12. Support for custom renderers
13. Should web rings be ordered? What should the order be?
14. Auto generate index
15. favicon - circularly linked list? 


## References

1. Inspired by https://github.com/XXIIVV/webring https://github.com/ckipp01/webring-cli
2. https://github.com/hackclub/webring
3. https://github.com/topics/webring
4. https://github.com/palantir/bulldozer
5. Ian's webring - http://www.ianww.com/ 
