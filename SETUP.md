# Setup

These steps happen after the code builds locally.

## GitHub
1. Create or use a GitHub repository.
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
  repo: OWNER/REPOSITORY
  branch: main
```

2. Visit:

```text
https://DEPLOYED-SITE/admin/
```

3. Log in with a GitHub account that has write access to the repository.

If the repository is private, review GitHub OAuth scopes and Netlify provider behavior before assuming private repository access works.
