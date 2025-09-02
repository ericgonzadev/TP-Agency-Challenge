## LIVE LINKS
HOME: [https://meek-gingersnap-c51ca6.netlify.app](https://meek-gingersnap-c51ca6.netlify.app)

BLOG: [https://meek-gingersnap-c51ca6.netlify.app/blog](https://meek-gingersnap-c51ca6.netlify.app/blog)


## Required npm Packages & Versions

The following npm packages (with tested versions) are required and will be installed automatically with `npm install`:

| Package                          | Version (example/tested) |
| -------------------------------- | ------------------------ |
| react                            | 18.x                     |
| react-dom                        | 18.x                     |
| react-router-dom                 | 6.x                      |
| react-scripts                    | 5.x                      |
| bootstrap                        | 5.x                      |
| @fortawesome/fontawesome-free    | 6.x                      |
| @fortawesome/free-solid-svg-icons| 6.x                      |
| @fortawesome/react-fontawesome   | 0.2.x                    |
| @testing-library/dom             | 8.x                      |
| @testing-library/jest-dom        | 5.x                      |
| @testing-library/react           | 13.x                     |
| @testing-library/user-event      | 14.x                     |
| web-vitals                       | 2.x                      |

> **Note:** These versions are typical for React 18 projects created with Create React App in 2024-2025. If you encounter version conflicts, check your `package.json` for the exact versions used in your project.

## Setup and Run App Locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The build folder is ready to be deployed.
You may serve it with a static server:

### `npm install -g serve`
### `serve -s build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Assumptions & Extra Features

- The app is assumed to be run in a modern browser and on a standard React/Node.js environment.
- Carousel sections (cards, case studies) are fully responsive and mobile-friendly, with navigation arrows always visible on mobile.
- Placeholder images and text are used where no real content was provided.
- The `_redirects` file is included for Netlify client-side routing support.
- Extra attention was given to match the provided design screenshots as closely as possible, including custom CSS for spacing, card layout, and arrow positioning.
- No authentication or backend integration is assumed or implemented.

## Blog Page API Integration

The Blog page (`/blog`) dynamically fetches blog post data and featured images from an external API. This allows the blog content to be updated without redeploying the site. Key details:

- **API Usage:**
	- Blog cards and blog detail pages retrieve their content (title, excerpt, body, and images) from a REST API endpoint.
	- Featured images for each blog post are loaded directly from the API response and displayed responsively.
- **Image Handling:**
	- Blog card images and detail images use the URLs provided by the API, ensuring up-to-date content and correct image sizing.
	- On the blog detail page, images are styled to fit the screen width minus 100px for optimal readability.
- **No Backend Required:**
	- The app assumes the API is publicly accessible and does not require authentication.
	- If the API is unavailable, placeholder content or error messages may be shown.

This approach enables easy content management and ensures the blog section always displays the latest posts and images from the API source.
