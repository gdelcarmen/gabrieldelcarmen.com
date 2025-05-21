# gabrieldelcarmen.com

This repository contains the static build of **gabrieldelcarmen.com**, a curriculum vitae website for **Gabriel del Carmen, MD**.

The site was built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/) using **Create React App** and then exported with `npm run build`. Only the compiled files are stored here. The original source code is maintained separately.

## Deploying

To host the site yourself, serve the contents of this repository as static files, ensuring that `index.html` is returned for all routes. Any simple web server (such as `nginx` or `apache`) can be configured to do this.

## Development

Because this repository only includes the compiled output, direct development should occur in the original source project. After making changes there, run `npm run build` and copy the output into this repository.

