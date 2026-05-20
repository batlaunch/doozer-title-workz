## SEO Tune-Up for Doozers Title Workz

Goal: tighten on-page SEO across the site so it ranks better for local searches like "vehicle registration El Cajon" and "DMV title transfer San Diego".

### What I'll do

1. **Per-route meta tags** — Install `react-helmet-async` and add unique `<title>`, meta description, canonical, and Open Graph tags to each page (Home, About, Services, Contact). Right now every route shares the same `index.html` head, which is bad for indexing.

2. **Semantic HTML & headings** — Audit each page for a single, keyword-rich `<h1>` and proper heading hierarchy. Add descriptive `alt` text on any images missing it.

3. **Structured data (JSON-LD)** — Add a `LocalBusiness` schema (name, address, phone, hours, geo) in `index.html` so Google can show rich results / map pack info. Optionally add `FAQPage` schema if we add common Q&A.

4. **Sitemap & robots** — Create `scripts/generate-sitemap.ts` wired to `predev`/`prebuild` to emit `public/sitemap.xml` covering `/`, `/about`, `/services`, `/contact`. `robots.txt` already exists and looks fine.

5. **Sitewide head polish** — Tighten the default title/description in `index.html` with target keywords, ensure viewport/canonical are set, keep the existing OG image.

6. **Run the built-in SEO scanner** at the end so you can see remaining findings in the SEO tab.

### Out of scope (ask if you want these)

- Generating a new OG image
- Adding a blog / content pages (biggest long-term SEO lever but a much larger build)
- Setting a custom domain (canonical URLs will stay relative until then)
- Off-site work (Google Business Profile, citations, backlinks)

### Technical notes

- `react-helmet-async` wraps `<App>` once in `main.tsx`; each page gets a `<Helmet>` block.
- Canonical URLs use relative paths until a custom domain is set.
- LocalBusiness JSON-LD will use the address/phone already in `Footer.tsx` — I'll confirm hours with you before hardcoding.

### One question before I start

What are your business hours? I'd like to include them in the LocalBusiness structured data. If you'd rather skip hours, I'll leave that field out.
