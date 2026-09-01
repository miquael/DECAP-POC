# Setup

These steps happen after the code builds locally.

Repository: `miquael/DECAP-POC`
Netlify site: `https://decap-poc.netlify.app/`

## GitHub
1. Use the GitHub repository `miquael/DECAP-POC`.
2. Push this project to the `main` branch.
3. Give each CMS editor write access to the repository.
4. Create a GitHub OAuth App.
5. Set the OAuth App Homepage URL to the deployed Netlify site URL.
6. Set the Authorization callback URL to:

```text
https://api.netlify.com/auth/done
```

7. Record the Client ID and Client Secret.

Never commit the Client Secret.

## Netlify
1. Import the GitHub repository into Netlify.
2. Confirm build settings:

```text
Build command: pnpm run build
Publish directory: dist
```

3. Go to Project configuration -> Access & security -> OAuth.
4. Configure GitHub as an OAuth provider using the GitHub OAuth App Client ID and Client Secret.
5. Do not enable Netlify Identity.
6. Do not enable Git Gateway.

## Decap
1. Update `public/admin/config.yml`:

```yml
backend:
  name: github
  repo: miquael/DECAP-POC
  branch: main
  site_domain: decap-poc.netlify.app
```

2. Visit:

```text
https://decap-poc.netlify.app/admin/
```

3. Log in with a GitHub account that has write access to the repository.

If the repository is private, review GitHub OAuth scopes and Netlify provider behavior before assuming private repository access works.

## n8n Forms
The contact and newsletter forms currently submit to the static `/thank-you/` page for demo safety.

When n8n webhooks are ready:
- Update `formAction` in `src/components/ContactForm.astro`.
- Update `formMethod` in `src/components/ContactForm.astro` to `post`.
- Update `formAction` in `src/components/NewsletterSignup.astro`.
- Update `formMethod` in `src/components/NewsletterSignup.astro` to `post`.
