# ngx-prismic

[![npm](https://img.shields.io/npm/v/ngx-prismic.svg)](https://www.npmjs.com/package/ngx-prismic)
[![Build Status](https://travis-ci.com/exportarts/ngx-prismic.svg?branch=master)](https://travis-ci.com/exportarts/ngx-prismic)

This project is intended to provide easier integration of
[prismic.io](https://prismic.io) into Angular Projects.

> Work in Progress... More featues and docs are coming in the future.

## Usage

This module is built on top of [prismic-javascript](https://github.com/prismicio/prismic-javascript)
and [prismic-dom](https://github.com/prismicio/prismic-dom) as well as [angular](https://github.com/angular/angular).

To use it in your project, run the following command:

```sh
npm install ngx-prismic
# or
yarn add ngx-prismic
```

This package supports you at creating types for your Prismic Content (e.g. for `Title`, `Richtext` or
`Image` components) and custom types (with the [`Slice`](https://github.com/exportarts/ngx-prismic/blob/master/lib/prismic-client/src/models/slice.model.ts) interface).

For integrating with the Prismic API, we provide the
[`PrismicService`](https://github.com/exportarts/ngx-prismic/blob/master/lib/prismic-client/src/services/prismic.service.ts).
It is built with Angular's [`HttpClient`](https://angular.io/guide/http) and provides all options of
the official Prismic API.

For displaying your content, several Angular Pipes are available, for example to
[render paragraphs](https://github.com/exportarts/ngx-prismic/blob/master/lib/prismic-client/src/pipes/render-html.pipe.ts).

## Angular Universal

In `ngx-prismic/universal` you find helper functions used in the context of prerendering pages with
[Angular Universal](https://github.com/angular/universal). You can use them to resolve all your dynamic routes
(e.g. all documents of type `blog_post`) to integrate them into the prerendering process.

## Dependency Management

The project in `./lib` has several peer-dependencies. Those are installed
as dev-dependencies in the main project to have them available during
development, but to not have them included in the final `package.json`.
