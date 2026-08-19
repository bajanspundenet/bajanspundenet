# Bajans Pun De ’Net

Official website source for **Bajans Pun De ’Net (BPDN)**, created and presented by Xannah Moniq.

The site brings Bajan history, culture and current affairs into sharper focus through plain talk, careful research and conversations across Barbados and the diaspora.

## Local development

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare deployment

The project includes a Cloudflare Workers configuration. After connecting the repository to Cloudflare, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The custom domain will be connected only after the Cloudflare deployment has been tested.
