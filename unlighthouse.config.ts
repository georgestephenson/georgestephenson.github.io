// Site-wide Lighthouse audit (performance, accessibility, best-practices, SEO).
// Run against the locally-served build via `npm run test:perf`.
export default {
  site: 'http://localhost:4000',

  scanner: {
    // Discover pages by crawling internal links rather than the sitemap —
    // the built sitemap.xml holds production URLs, not localhost.
    sitemap: false,
    crawler: true,
    samples: 1,
    device: 'mobile',
  },

  puppeteerOptions: {
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  },

  ci: {
    // 0-100 category scores. Performance is kept lenient because CI-runner
    // timings vary; SEO / best-practices / a11y are held to a hard bar.
    budget: {
      performance: 50,
      accessibility: 90,
      'best-practices': 90,
      seo: 95,
    },
  },
}
