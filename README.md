# open-webring

Join a webring, create your own, or fork this repository and host your own for free.

Rings are available at https://openwebring.com/ring/[slug].json. See the [sample](public/ring/sample.json) webring for an example.

## Manifesto

Do you remember when the internet used to be fun? Back in the days before search engines indexed everything, before the internet was hyper-optimized for business, webrings were the de-facto way to discover content. Open-Webring is designed for hobbyists, enthusiasts, artists, and creatives that would like to build inclusive online communities around shared interests and help web-surfers discover great content.

![tesla-coil-webring](/docs/tesla-coil.png)

*nostalgia from my childhood -from the now defunct [webring.org](https://web.archive.org/web/19991013135810/http://webring.org/)*

Reproduced from [here](http://www.ke5fx.com/tesla.html).

TODO: Talk about membership.

## How To Join a Webring

1. Add an entry to the ring you wish to join  in [public/ring](public/ring) and submit a PR to this repository. For example, we can join the [sample](public/ring/sample.json) webring which has the has the schema definition:

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

1. Add open-webring to your website. Webrings can be added to your site in many formats. The simplest way is to add:

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

1. After we've validated that you have added open-webring to your site, we'll merge your PR and welcome you into the community. 

## Goals

- Free, serverless webrings for anyone that wants to join.
- Use github as a JSON api - Heavily leverage GH ecosystem.
- track changes to rings via git diff.
- Enforce participation / auto moderation

## Developing

Developed with: node >= v14. [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) is recommended for managing node versions.

This repository is split into multiple parts: 

1. [src](/src) which contains a Next.js app hosted at [openwebring.com](https://openwebring.com). 
2. [public/ring](public/ring) which contains webring schemas and data.

## Inspired By

1. https://web.archive.org/web/19991013135810/http://webring.org/
2. Ian's webring - http://www.ianww.com/ (probably would not have worked on this if I hadn't asked to join his webring)
3. https://github.com/topics/webring - only 8 entries - none are communities
4. https://github.com/XXIIVV/webring https://github.com/ckipp01/webring-cli - best webring on github?
5. https://github.com/hackclub/webring
