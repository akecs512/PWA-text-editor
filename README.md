# PWA-Text-Editor

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployed Website](#deployed-website)
- [Special Thanks](#special-thanks)
- [License](#license)

## Description
Developers can create notes or code snippets with or without an internet connection and reliably retrieve them for later use.

## Usage
A text editor web application. Users open their application in an editor and see a client server folder structure. When they run `npm run start` from the root directory they find the application should start up the backend and serve the client. When they run the text editor application from the termina; they find JavaScript files have been bundled using webpack. When they run the webpack plugins they find they have a generated HTML file, service worker, and a manifest file. When they use next-gen JavaScript in the application they find that the text editor still functions in the browser without errors. When they open the text editor they find that IndexedDB has immediately created a database storage.
When thye enter content and subsequently click off of the DOM window they find that the content in the text editor has been saved with IndexedDB. When they reopen the text editor after closing it they find that the content in the text editor has been retrieved from the IndexedDB.
When they click on the Install button they can download a web application as an icon on their desktop. 
When they load the web application they should have a registered service worker using workbox. When they register a service worker they should have their static assets pre cached upon loading along with subsequent pages and static assets.

## Screenshots
<img width="1429" alt="JATE IndexedDB" src="https://github.com/akecs512/PWA-text-editor/assets/79340489/40e5f0c3-0f4a-4b17-acd4-b9edf252ab2d">
<img width="1428" alt="JATE Manifest" src="https://github.com/akecs512/PWA-text-editor/assets/79340489/7b4140b7-19c9-4d9c-9f61-aceef69706f2">
<img width="1421" alt="JATE Service Worker" src="https://github.com/akecs512/PWA-text-editor/assets/79340489/33bdbc79-f90f-4548-8302-15a2780047e4">

## VideoWalkthrough

https://github.com/akecs512/PWA-text-editor/assets/79340489/de507324-4942-4b4e-961c-7f9509a86dbb



## Deployed Website
https://jate-pwa-application-53e313e5dc35.herokuapp.com/

### Special Thanks
  Thanks to Adamk72 for his help cleaning up the code and helping me make it work.

## License

Copyright (c) 2023 Adrienne Kecskes

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
