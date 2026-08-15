# Limitlessly — Store Conversion Plan

Turning the site into an e-commerce-style catalog where **services are products** and
**"Add to Quote" replaces "Add to Cart"**. No prices anywhere. Scope gets priced after a
conversation, not on a card.

**Status:** planning only. Nothing is wired up yet.

---

## 1. Decisions locked

| Decision | Choice |
|---|---|
| Catalog size | ~20 products across 4 categories |
| Store URL | New `/store` route (`/services` stays as a marketing page) |
| Quote flow | Basket → navbar badge → slide-out drawer → `/quote` checkout page |
| Pricing | **None shown anywhere**, including on `/services` |
| Homepage | Restructured to read as a storefront on landing |
| Positioning | **Store, not studio** — all agency framing replaced |
| Backend | None. localStorage for the basket, EmailJS for submission |

---

## 1a. Positioning: store, not studio

The site must read as a shop the moment someone lands. Today it reads as an agency, and
that language is scattered across metadata, hero, and nav.

### Copy changes

| Where | From | To |
|---|---|---|
| `layout.tsx` title | "Limitlessly — AI Product Studio" | "Limitlessly — The Software Store" |
| `layout.tsx` description | "We design and build full-scale AI SaaS platforms…" | "Browse 20 ready-to-build software and AI products. Add what you need to a quote — no prices, no pressure, a reply in 24 hours." |
| Hero headline | "Built for every stage of your product" | "The software store for founders" |
| Nav primary item | Services | **Store** |
| Vocabulary everywhere | services, engagements, clients | **products, catalog, browse, quote** |
| OG image text | Studio framing | Store framing (`opengraph-image.tsx`) |

The title tag is the single line most people read in Google before deciding to click.
If it says "studio" and the page looks like a shop, the positioning is split.

### Signals that make it *feel* like a store

Ranked by how much each one sells the effect:

1. **Basket badge in the nav, always visible** — the strongest single signal
2. **Promo bar across the top** — reuse `announcement-bar.tsx` (already built, unused)
3. **Search box in the hero** — shops have search, agencies don't
4. **Category tiles above the fold**
5. **Product cards in a uniform grid**, badge in the corner ("Popular", "Quick Win")
6. **Product detail pages** with a sticky Add to Quote panel
7. **Visible item counts** — "20 products", "Showing 6 of 20"
8. **Related products** at the foot of every detail page

### The honesty line

It is a store *format* over a lead form. That is a smart move — but the copy has to be
straight about it, or the first click feels like a bait-and-switch.

- Button says **"Add to Quote"**. Never "Add to Cart", never "Buy".
- Microcopy under every button: *"No payment. No commitment. Reply within 24 hours."*
- Empty state: *"Your quote is empty."*
- Structured data stays **`Service`**, not `Product` — `Product` schema without a price
  is invalid and Google ignores it.

Done right, the store format reads as confident and organized. Done wrong, it reads as
a trick.

---

## 2. Why this model works for an agency

A pricing page asks for a yes/no decision from someone who has not decided anything yet.
A catalog asks for a much smaller commitment — "this looks relevant" — and lets them
accumulate interest before they ever talk to you.

Three concrete wins:

1. **Better leads.** A quote request listing *AI Support Chatbot + API Integration +
   Maintenance* tells you more than a contact form saying "hi, interested in AI."
2. **No price anchoring.** You never lose someone to a number before they understand
   scope, and you never leave money on the table by quoting low in public.
3. **More indexable pages.** 20 product pages targeting specific search terms, versus one
   `/services` page trying to rank for everything at once.

---

## 3. Current state

| File | What it is | What happens to it |
|---|---|---|
| `src/app/page.tsx` | Homepage, 9 sections | Restructured into a storefront |
| `src/app/services/page.tsx` | 8 services, prices hardcoded | Prices stripped, CTAs point to `/store` |
| `src/components/services.tsx` | Homepage services block, prices hardcoded | Replaced by `featured-products.tsx` |
| `src/components/hero.tsx` | Current hero | Replaced by `store-hero.tsx` |
| `src/components/navbar.tsx` | Floating pill nav + mega menu, **all 8 mega links point to `/services`** | Store link + quote badge; mega menu rewired to real `/store/[slug]` URLs |
| `src/components/footer.tsx` | 4 links, "View Our Work" CTA | Gains Store link; CTA becomes "Browse the store" |
| `src/components/announcement-bar.tsx` | Scrolling promo bar, **unused** | Repurposed as the store promo bar |
| `src/app/layout.tsx` | Root layout | Gains `QuoteProvider` + `metadataBase` |
| `src/app/sitemap.ts` | 6 static URLs | Grows to ~28 URLs |
| `src/app/contact/page.tsx` | `"use client"` → **no metadata** | Split so metadata works |
| `src/components/proof.tsx` | Placeholder testimonials | Needs real quotes (blocking, see §11) |

**Already written (unused, safe to delete):**
- `src/lib/site.ts` — single source of truth for the public URL
- `src/lib/products.ts` — the full 20-product catalog

---

## 4. The catalog

Four categories, 20 products, no prices. Every product has a delivery estimate, a
"best for" line, six deliverables, and a tech stack.

### AI Solutions (6)
| Product | Delivery | Badge |
|---|---|---|
| AI SaaS Platform | From 6 weeks | Flagship |
| Custom AI Agent | From 2 weeks | Popular |
| RAG & Semantic Search | From 3 weeks | — |
| AI Support Chatbot | From 2 weeks | — |
| AI Feature Integration | From 3 weeks | — |
| AI MVP Sprint | From 4 weeks | Best Value |

### Web & Commerce (6)
| Product | Delivery | Badge |
|---|---|---|
| High-Converting Landing Page | From 1 week | Quick Win |
| Business Website | From 2 weeks | — |
| Custom Web App | From 4 weeks | — |
| Custom E-Commerce Store | From 4 weeks | Popular |
| Shopify Storefront | From 3 weeks | — |
| Admin Dashboard | From 2 weeks | — |

### Mobile & Software (4)
| Product | Delivery |
|---|---|
| Cross-Platform Mobile App | From 6 weeks |
| Custom Internal Software | From 4 weeks |
| API & Systems Integration | From 1 week |
| Database Architecture | From 1 week |

### Growth & Care (4)
| Product | Delivery | Badge |
|---|---|---|
| Technical SEO Setup | From 3 days | Quick Win |
| Performance Audit | From 1 week | — |
| Payments & Billing Setup | From 1 week | — |
| Maintenance & Support | Monthly | — |

> **The low-commitment items matter most.** Landing Page (1 week), Technical SEO Setup
> (3 days), and API Integration (1 week) are how a stranger becomes a client. Nobody
> hires an unknown studio for a 6-week SaaS build first. They test you with something
> small. Every one of those small wins can grow into the flagship later.

---

## 5. Architecture

```
src/
├── lib/
│   ├── site.ts                    ✅ written — SITE_URL, SITE_NAME
│   ├── products.ts                ✅ written — catalog, categories, helpers
│   └── quote-context.tsx          ⬜ QuoteProvider + useQuote (localStorage)
│
├── components/
│   ├── store/
│   │   ├── product-icon.tsx       ⬜ resolves icon string → lucide component
│   │   ├── product-card.tsx       ⬜ catalog grid card
│   │   ├── add-to-quote-button.tsx⬜ add / added / qty stepper
│   │   ├── quote-drawer.tsx       ⬜ slide-out basket
│   │   ├── quote-button.tsx       ⬜ navbar badge trigger
│   │   ├── catalog.tsx            ⬜ search + category filter + grid
│   │   └── quote-form.tsx         ⬜ checkout form → EmailJS
│   │
│   ├── store-hero.tsx             ⬜ storefront homepage hero
│   ├── category-strip.tsx         ⬜ 4 category tiles
│   └── featured-products.tsx      ⬜ featured grid + "browse all 20"
│
└── app/
    ├── store/
    │   ├── page.tsx               ⬜ catalog page
    │   └── [slug]/page.tsx        ⬜ product detail (static, 20 pages)
    ├── quote/page.tsx             ⬜ checkout
    └── robots.ts                  ⬜ new
```

### Data model

```ts
type Product = {
  slug, name, tagline, description,
  category: "ai" | "web" | "mobile" | "growth",
  badge?, delivery, bestFor,
  deliverables: string[],   // 6 items
  stack: string[],
  icon: string,             // string key, NOT a component
  accent, featured?
}
```

**Why `icon` is a string:** server components cannot pass component references as props
to client components — React can't serialize them. Storing `"Boxes"` and resolving it
inside a client component avoids that class of bug entirely.

### Basket state

```ts
type QuoteItem = { slug: string; qty: number }
```

React Context, persisted to `localStorage` under `limitlessly_quote_v1`.

**Hydration guard:** localStorage is unavailable during SSR, so the badge must render
nothing until a `hydrated` flag flips true in `useEffect`. Skipping this produces a
React hydration mismatch — the classic bug in every cart tutorial.

---

## 5a. Interaction spec

The details that decide whether it feels like a real store or a prototype.

### Search

Matches against `name`, `tagline`, and `stack`. Case-insensitive, debounced ~150ms.
Not `description` — matching body text returns everything and feels broken.

No results → *"No products match 'xyz'."* + a **Clear search** button. Never a blank grid.

### Category filter

Reads and writes the URL: `/store?category=ai`.

- Category tiles on the homepage link straight to the filtered view
- Filter state survives refresh, back button, and being shared as a link
- "All" chip clears back to `/store`
- Count updates live: *"Showing 6 of 20"*

### What happens when you click Add to Quote

This is the single most important moment in the flow.

1. Button flips to **"Added ✓"** and turns into a `− 1 +` quantity stepper
2. Navbar badge increments with a brief pulse
3. **Drawer does NOT auto-open** — hijacking the page after one click is the most
   annoying pattern in e-commerce, and it kills browsing
4. Screen readers get a polite live-region announcement: *"AI Support Chatbot added to your quote"*

Clicking the badge is what opens the drawer. The user stays in control.

### Quantity

Stepper range 1–10. Dropping to 0 removes the item.

Quantity is genuinely useful here — 3 landing pages, 2 integrations — so it stays.

### After submitting a quote

1. Form disables, button shows a spinner
2. On success → replace the form with a confirmation panel: *"Quote request sent. We'll reply within 24 hours."*
3. **Basket clears** (localStorage wiped) so a refresh doesn't resubmit
4. Show a **Book a call** link to Calendly as the next step
5. On failure → keep the basket, show the error, offer a `mailto:` fallback so the lead is never lost

### Persistence rules

| Event | Basket |
|---|---|
| Refresh / close tab | Survives |
| Navigate between pages | Survives |
| Successful submit | Cleared |
| Failed submit | Kept |

---

## 5b. Mobile & accessibility

Most of your traffic will be mobile. This cannot be a desktop-only store.

### Mobile

- **Quote badge sits outside the hamburger** — next to the menu toggle, always visible.
  Burying the basket in a collapsed menu hides the main conversion signal.
- Drawer goes **full-screen** below `md`, not a narrow slide-out
- Catalog grid: 1 column mobile → 2 tablet → 3 desktop
- Category filter becomes a horizontal scrolling chip row
- Product detail: the sticky Add to Quote panel moves to a **fixed bottom bar**
- Tap targets minimum 44px

### Accessibility

- Drawer: focus trap, **ESC closes**, focus returns to the badge on close
- `aria-live="polite"` region for add/remove announcements
- Every icon-only button gets an `aria-label`
- Quantity stepper is real `<button>`s, keyboard reachable
- Focus rings visible — do not `outline: none` the dark theme
- Colour contrast: accent-on-dark must clear 4.5:1 for text
- `prefers-reduced-motion` respected on the drawer slide and badge pulse

---

## 6. Build phases

### Phase 1 — Foundation
1. `lib/products.ts` + `lib/site.ts` ✅ done
2. `lib/quote-context.tsx` — add / remove / setQty / clear / count, drawer open state, hydration guard
3. Wrap `layout.tsx` in `<QuoteProvider>`, mount `<QuoteDrawer />`
4. Add `metadataBase: new URL(SITE_URL)` to `layout.tsx`

### Phase 2 — Store
5. `product-icon.tsx`, `product-card.tsx`, `add-to-quote-button.tsx`
6. `catalog.tsx` — client-side search + category filter + result count
7. `app/store/page.tsx` — server page, metadata, renders `<Catalog />`
8. `app/store/[slug]/page.tsx` — `generateStaticParams` over all 20 + `generateMetadata`

> **Next 16 gotcha:** `params` is a Promise. Both the page and `generateMetadata` must
> be `async` and `await params`. This is the #1 build error on this file.

### Phase 3 — Quote flow
9. `quote-drawer.tsx` — slide-out, qty steppers, remove, empty state, → `/quote`
10. `quote-button.tsx` — navbar badge, animates on add
11. `quote-form.tsx` — item review + name, email, company, budget, timeline, notes
12. `app/quote/page.tsx` — server wrapper, `noindex`

**EmailJS:** reuse the existing credentials from `contact/page.tsx`
(`service_1mmyrpk` / `template_7j1aj1i`). That template only accepts
`from_name`, `from_email`, `message` — so the itemized quote gets formatted into
`message` as plain text. **No EmailJS dashboard changes needed.**

### Phase 4 — Homepage as storefront
13. `store-hero.tsx` — "The software store for founders", search box → `/store`, trust row
14. `category-strip.tsx` — 4 tiles → filtered catalog
15. `featured-products.tsx` — 6 featured, Add to Quote inline, → browse all
16. Rewire `page.tsx`:

```
StoreHero → MarqueeStrip → CategoryStrip → FeaturedProducts
→ LiveMockup → Proof → Process → LeadMagnet → Contact
```

### Phase 5 — Cleanup & SEO
16a. **Navbar rewire** — "Services" becomes "Store"; all 8 mega-menu links currently point
    at `/services` and must point at real `/store/[slug]` URLs; footer gains a Store link
    and its CTA becomes "Browse the store"
17. Strip prices from `services/page.tsx`, point CTAs at matching `/store/[slug]`
18. Fix contact metadata — move the form to `contact-form.tsx` so `page.tsx` is a server component
19. `robots.ts` + sitemap grows to ~28 URLs
20. JSON-LD: `Organization` in layout, `Service` per product page, `ItemList` on `/store`
21. **Repurpose** `announcement-bar.tsx` as the store promo bar (already built, currently unused) — mount it in `layout.tsx`, rewrite `TEXT` for store framing
22. Delete genuinely unused: `hero-scene.tsx`, `cursor-overlay.tsx`, and the `three` / `@react-three/*` / `@types/three` dependencies (~600KB, imported by nothing)

---

## 7. Quote checkout fields

| Field | Type | Required |
|---|---|---|
| Name | text | ✅ |
| Email | email | ✅ |
| Company | text | — |
| Budget range | select | ✅ |
| Timeline | select | ✅ |
| Project details | textarea | — |

**Budget:** Under $2k · $2k–$5k · $5k–$10k · $10k–$25k · $25k+ · Not sure yet
**Timeline:** ASAP · 2–4 weeks · 1–2 months · 3+ months · Just exploring

Budget and timeline are the two questions that decide whether a lead is worth a call.
Asking them here means every enquiry that reaches your inbox is already qualified.

### Validation

| Rule | Behaviour |
|---|---|
| Empty basket | `/quote` shows an empty state, form hidden |
| Name blank | Inline error under the field |
| Email invalid | Inline error, submit blocked |
| Budget / timeline unselected | Inline error |
| Double submit | Button disabled while sending |

Errors appear under the field, never as an alert box.

### The email you receive

The existing EmailJS template only accepts `from_name`, `from_email`, and `message`,
so everything gets formatted into `message` as plain text. **No dashboard changes.**

```
NEW QUOTE REQUEST — 3 items

1. AI Support Chatbot  ×1   (From 2 weeks)
2. API & Systems Integration  ×2   (From 1 week)
3. Maintenance & Support  ×1   (Monthly)

─────────────────────────
Name:     Ahmad Khan
Email:    ahmad@example.com
Company:  Northwind Traders
Budget:   $5k – $10k
Timeline: 2–4 weeks

Details:
We need a chatbot on our support site and it has to
talk to our CRM. Already on Shopify.
─────────────────────────
Sent from limitlessly.vercel.app/quote
```

Scannable in five seconds on a phone. That matters when a lead lands at 2am.

---

## 8. SEO impact

| Before | After |
|---|---|
| 6 indexable pages | ~28 |
| One `/services` page for every keyword | 20 pages, one intent each |
| No structured data | Organization + Service + ItemList |
| No `metadataBase` → broken link previews | Fixed |
| No robots.txt | Added |
| `/contact` has the wrong title | Fixed |

`/quote` gets `noindex` — it is a transactional page with no search value.

Each product page targets one real query: *"AI support chatbot development"*,
*"headless Shopify storefront developer"*, *"Core Web Vitals audit service"*. These are
long-tail and winnable. `/services` alone never was.

---

## 9. Risks

| Risk | Mitigation |
|---|---|
| Hydration mismatch on the badge | `hydrated` flag before rendering count |
| Next 16 async `params` | `await params` in page + `generateMetadata` |
| Store feels empty | 20 products, filters only shown when they have something to filter |
| "Add to Quote" reads as "buy now" | Microcopy: *"No payment. No commitment. We reply within 24 hours."* under every button |
| Basket lost on refresh | localStorage persistence |
| Two competing surfaces (`/services` + `/store`) | `/services` loses prices and funnels into `/store` |
| Drawer auto-opening on every add | It doesn't — badge click only. Auto-open kills browsing |
| Mobile users never find the basket | Badge lives outside the hamburger |
| EmailJS fails, lead is lost | Basket kept on failure + `mailto:` fallback shown |
| Duplicate submissions | Button disabled while sending; basket cleared on success |
| Mega menu still points at `/services` | Explicit step 16a — easy to forget, breaks the whole funnel |

---

## 10. Effort

| Phase | Scope |
|---|---|
| 1 — Foundation | Small |
| 2 — Store | Large |
| 3 — Quote flow | Medium |
| 4 — Homepage | Medium |
| 5 — Cleanup & SEO | Small |

Buildable in one sitting. Phases 1–3 alone give a working store.

---

## 10a. Verification checklist

Run through this before it goes live. Every item has caught a real bug in a store build.

### Build
- [ ] `npm run build` passes with no type errors
- [ ] All 20 product pages statically generated (check the build output list)
- [ ] `npm run lint` clean

### Basket
- [ ] Add a product → badge shows 1
- [ ] Refresh → badge still shows 1
- [ ] Add the same product twice → quantity becomes 2, not two rows
- [ ] Stepper down to 0 → item disappears
- [ ] Clear all → badge disappears
- [ ] **No hydration warning in the browser console** — the single most likely bug

### Flow
- [ ] Add from a catalog card and from a detail page — both work
- [ ] Drawer opens from the badge, closes on ESC, closes on backdrop click
- [ ] `/quote` with an empty basket shows the empty state, not a broken form
- [ ] Submit a real test quote → **check the email actually arrives**
- [ ] Basket clears after a successful send
- [ ] Refresh after sending → does not resubmit

### Store feel
- [ ] Search finds "chatbot", "seo", "shopify"
- [ ] `/store?category=ai` loads pre-filtered
- [ ] Back button restores the previous filter
- [ ] Category tile on the homepage lands on the right filter

### Mobile
- [ ] Test on a real phone, not just devtools
- [ ] Badge visible without opening the hamburger
- [ ] Drawer usable full-screen
- [ ] Bottom Add to Quote bar doesn't cover content

### SEO
- [ ] View source on a product page → title, description, JSON-LD present
- [ ] `/robots.txt` and `/sitemap.xml` both load
- [ ] Paste the homepage URL into WhatsApp → **preview image appears** (proves `metadataBase` is fixed)
- [ ] `/quote` returns `noindex`

### Content
- [ ] Read all 20 descriptions — can you actually deliver each one?
- [ ] No price appears anywhere on the site
- [ ] No "Add to Cart" or "Buy" text anywhere

---

## 11. Needs you

1. **Real testimonials.** `proof.tsx:10` still carries your own warning comment. A store
   with fake reviews is worse than a store with none — and this becomes more exposed once
   the site reads as commerce.
2. **Review the catalog copy.** I wrote descriptions for all 20 products. You have to be
   able to actually deliver each one. Cut anything you would not want to be hired for.
3. **Delivery estimates.** Sanity-check them against how fast you actually work.

---

## 12. Domain readiness

Everything reads `SITE_URL` from `lib/site.ts`, which reads `NEXT_PUBLIC_SITE_URL`.

The day a domain lands: add that env var in the Vercel dashboard, redeploy. Sitemap,
metadata, JSON-LD, and OG images all follow. Vercel 301-redirects the old
`.vercel.app` subdomain automatically, so rankings carry over.

**Zero code changes required at migration time.**
