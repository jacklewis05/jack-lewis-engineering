# Jack Lewis — Portfolio

Built with React and Tailwind CSS. Design based on Max Black's portfolio
(maxblack.space).

## Updating the site: edit `src/content.js`

All of the site's content is in **`src/content.js`**: your intro, experience
timeline, projects, skills, and "Beyond the lab". The instructions at the top
of that file explain how to edit it. Keep the quote marks, commas, and
brackets as they are, and change only the text.

- **Add a job or role:** copy one block in `EXPERIENCE` and edit it.
- **Add a project:** put its photos and videos in a new folder in
  `public/images/`, then copy a block in `COMPLETED_PROJECTS` and edit it.
  In the project's `content` list, add paragraphs, headings, images, and
  videos in the order you want them to appear on the page.
- **Finished an ongoing project:** move its block from `ONGOING_PROJECTS`
  into `COMPLETED_PROJECTS`.
- **Update your resume:** replace `public/resume/John_Lewis_Resume.pdf`
  with a new file of the same name.
- **Change colors:** edit the color codes at the top of `src/index.css`.

Tip: GitHub's website can edit files directly. Open `src/content.js` in your
repo, click the pencil icon, make your change, and click "Commit changes".
You can also upload images with "Add file → Upload files".

## How changes go live

Each push to `main` makes GitHub rebuild and publish the site automatically
using `.github/workflows/deploy.yml`. It takes about a minute. You can watch
the progress in the **Actions** tab.

**One-time setup:** in the repo, open **Settings → Pages** and set
**Source** to **GitHub Actions**.

If a push breaks the site, the Actions run turns red and the previous working
version stays live. The cause is almost always a missing comma or quote mark
in `content.js`.

## Previewing on your computer (optional)

```bash
npm install     # first time only
npm run dev     # then open the link it prints
```
