# POC Test Procedure

The proof of concept succeeds only if all tests pass.

## Test 1: Website
- Open the deployed website.
- Verify these routes work:
  - Home
  - About
  - Book
  - Speaking / Media
  - Blog / Updates
  - Contact

## Test 2: CMS Authentication
- Visit `/admin/`.
- Verify Decap loads.
- Verify Login with GitHub works.
- Verify an authorized editor can enter the CMS.
- Verify an unauthorized GitHub account cannot publish to the repository.

## Test 3: Page Edit
- Open Home in the CMS.
- Change a visible headline.
- Click Publish.
- Verify a GitHub commit was created.
- Verify Netlify detected the commit.
- Verify a production deploy was triggered.
- Verify the live Home page displays the new headline.

## Test 4: Image
- Open Book in the CMS.
- Upload or replace the book cover image.
- Publish.
- Verify the image exists under `public/uploads` in GitHub.
- Verify Netlify rebuilds.
- Verify the new image appears on the live Book page.

## Test 5: Blog
- Create a new Blog / Update entry.
- Enter a title, description, date, image, and body copy.
- Publish.
- Verify a new Markdown file appears in `src/data/blog`.
- Verify a GitHub commit exists.
- Verify Netlify rebuilds.
- Verify the post appears on `/blog/`.
- Verify the individual blog page works.

## Test 6: Client Experience
Evaluate the CMS without looking at source code:
- Could a nontechnical author understand the interface?
- Are field labels clear?
- Can they edit without knowing Markdown?
- Can they upload an image without touching the repository?
- Can they create a blog entry without developer assistance?
- Is Publish understandable?
- Does anything expose unnecessary Git terminology?

Record findings before deciding whether this architecture is production-suitable.
