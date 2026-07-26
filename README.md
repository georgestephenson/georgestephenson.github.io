# geosona.com

Source for my personal site — a Jekyll site built by GitHub Pages and served at
[geosona.com](https://geosona.com).

## Prerequisites

| Tool | Version | Needed for |
| --- | --- | --- |
| Ruby + Bundler | 3.3 | Jekyll build, html-proofer |
| Node | 24 | the JS quality-gate tooling |
| Java | 21 | the W3C `vnu` HTML validator |

Java is only used by `npm run test:html`; everything else works without it.

## Setup

```sh
bundle install   # gems land in vendor/bundle (see .bundle/config)
npm ci           # only needed if you want to run the quality gate
```

## Run it locally

```sh
bundle exec jekyll serve
```

Serves <http://localhost:4000> and rebuilds on save. The `github-pages` gem pins
the exact Jekyll and plugin versions GitHub Pages uses, so a local preview
matches the deployed site.

Note that `url` in [`_config.yml`](_config.yml) points at the production domain,
so absolute URLs (canonical tags, Open Graph, `sitemap.xml`, `feed.xml`) will
reference `geosona.com` even locally. Page-to-page links use `relative_url` and
resolve against localhost as expected.

To build without serving:

```sh
bundle exec jekyll build     # -> _site/
```

## Layout

```
_config.yml        site settings, plugins, SEO defaults
index.md           home page
projects.md        /projects/  — renders _data/projects.yml
blog.md            /blog/      — index of _posts
_posts/            blog posts, YYYY-MM-DD-title.md
_data/projects.yml single source for the projects page *and* the home-page summary
_layouts/          default.html, post.html
_includes/         sidenote.html
assets/css/        style.scss (compiled and minified by Jekyll)
img/               images, WebP
CNAME              custom domain for GitHub Pages
```

Adding a project means editing `_data/projects.yml` only — both the home page
and `/projects/` read from it. `summary` is the one-liner on the home page;
`description` is the longer copy on the projects page.

## Quality gate

CI runs [`.github/workflows/quality.yml`](.github/workflows/quality.yml) on every
push to `main` and every PR. The same checks run locally:

```sh
npm test           # everything, in CI order
```

Or individually:

| Command | Checks |
| --- | --- |
| `npm run lint:css` | stylelint on `assets/css/**/*.scss` |
| `npm run build` | build with the `_config_test.yml` overlay |
| `npm run test:html` | W3C `vnu` HTML validity |
| `npm run test:proof` | html-proofer: internal links, images, alt text, Open Graph |
| `npm run test:a11y` | pa11y-ci, WCAG 2 AA (axe + htmlcs) |
| `npm run test:perf` | unlighthouse: performance, a11y, best-practices, SEO budgets |

`npm run build` layers [`_config_test.yml`](_config_test.yml) on top of the main
config to pin `url` to `http://localhost:4000`, so canonical and sitemap URLs
are self-consistent with the host the browser-based scanners actually hit. The
two live scanners need the build served, which `npm run test:live` handles:

```sh
npm run test:live   # serves _site, runs test:a11y + test:perf, tears down
```

If you want to drive those by hand, `npm run serve` serves the existing `_site/`
statically on port 4000 — it does not rebuild, so run `npm run build` first.

Score budgets live in [`unlighthouse.config.ts`](unlighthouse.config.ts).
Performance is deliberately lenient because CI-runner timings vary;
accessibility, best-practices and SEO are held to a hard bar.

## Deploying

Push to `main`. GitHub Pages builds and deploys the site itself — there is no
deploy workflow, and the quality gate does not gate the deploy.
