# GitHub Stars Explorer
A responsive React TypeScript application that displays the most starred GitHub repositories created in the last 10 days. Built with modern React ## 🚀 Deployment on Netlify

### Overview
This app is deployed on Netlify with continuous deployment from GitHub. You can view the live site at: [GitHub Stars Explorer](https://guileless-churros-2e6924.netlify.app)

### Deployment Configuration
The deployment is configured using [netlify.toml](github-stars-app/netlify.toml) in the project root:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment Steps

1. **Connect to Netlify**
   - Create a Netlify account at [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Choose GitHub as your Git provider
   - Select the repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - No environment variables required for basic setup

3. **Deploy**
   - Netlify automatically deploys when you push to the main branch
   - Each pull request gets a preview deployment

### Features
- **Continuous Deployment**: Automatic builds on every push
- **HTTPS**: Free SSL certificate provided by Netlify
- **Preview Deployments**: Every pull request gets a unique preview URL
- **Custom Domain**: Easy setup for custom domains through Netlify dashboard

### Monitoring
- View deploy logs in Netlify dashboard
- Monitor site performance and uptime
- Access analytics and form submissions

### Troubleshooting Deployments
If the build fails:
1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build command works locally
4. Check if the publish directory contains the built files

## 🚀 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)ns including custom hooks, TypeScript interfaces, and infinite scroll functionality.

## 🌟 Features
- **Real-time Data**: Fetches the most starred GitHub repositories from the last 10 days
- **Infinite Scroll**: Automatically loads more repositories as you scroll
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Error Handling**: Comprehensive error handling including API rate limit management
- **TypeScript**: Fully typed for better development experience and code reliability
- **Modern React**: Uses React 19 with functional components and custom hooks

## 🛠️ Tech Stack
- **Frontend**: React 19.1.0, TypeScript 4.9.5
- **HTTP Client**: Axios 1.7.0
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App
- **API**: GitHub REST API v3

## 📋 Prerequisites
Before running this application, ensure you have the following installed:
- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher (comes with Node.js)
You can verify your installations by running:
```bash
node --version
npm --version
```
## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Etiqa-Coding-Task.git
cd Etiqa-Coding-Task/github-stars-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Development Server
```bash
npm start
```
The application will automatically open in your browser at `http://localhost:3000`

## 📱 Available Scripts
In the project directory, you can run:

### `npm start`
- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page will reload automatically when you make changes
- You will see lint errors in the console.

### `npm test`
- Launches the test runner in the interactive watch mode.
- Runs all test files with `test.ts` or `test.tsx` extensions

### `npm run build`
- Builds the app for production to the `build` folder
- Correctly bundles React in production mode and optimizes the build.
- The build is minified and filenames includes hashes
- The app is ready to be deployed.

## 🏗️ Project Structure

```
github-stars-app/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # App icon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── App.tsx         # Main app component
│   │   ├── RepoList.tsx    # Repository list with infinite scroll
│   │   ├── RepoItem.tsx    # Individual repository item
│   │   ├── Loading.tsx     # Loading indicator
│   │   └── ErrorMessage.tsx # Error display component
│   ├── hooks/
│   │   └── useGitHubRepos.ts # Custom hook for GitHub API
│   ├── services/
│   │   └── githubAPI.ts    # GitHub API service
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── utils/
│   │   ├── formatters.ts   # Utility functions for formatting
│   │   └── dateUtils.ts    # Date manipulation utilities
│   ├── App.tsx             # Root component
│   ├── App.css             # Global styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Base styles
├── package.json
├── tsconfig.json           # TypeScript configuration
└── README.md
```
## 🎯 Key Components

### Custom Hook: `useGitHubRepos`
- Manages repository data state
- Handles pagination and infinite scroll
- Implements comprehensive error handling
- Includes GitHub API rate limit management

### API Service: `githubAPI.ts`
- Fetches repositories from GitHub Search API
- Filters repositories created in the last 10 days
- Sorts by star count in descending order

### Responsive Design
- Mobile-first approach
- Flexbox layout for repository items
- Responsive typography and spacing

## 🔧 Configuration

### API Rate Limits
The application uses the GitHub public API which has rate limits:
- **Unauthenticated requests**: 60 requests per hour per IP
- **Authenticated requests**: 5,000 requests per hour

The app includes built-in rate limit error handling that displays user-friendly messages.

### Customization
The following parameters in `src/services/githubAPI.ts` can be modified with:
- `perPage`: Number of repositories per page (default: 10)
- Date range for repository creation (default: last 10 days)

## 🧪 Testing

The application includes unit tests for critical components:

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Or run on a different port
   PORT=3001 npm start
   ```

2. **Module not found errors**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **GitHub API rate limit exceeded**
   - Wait for the rate limit to reset (shown in error message)
   - Consider implementing GitHub authentication for higher limits

### Performance Notes
- The app implements efficient infinite scrolling
- Repository data is cached to minimize API calls
- Error boundaries prevent crashes from API failures

## 🚀 Deployment on Netlify

### Overview
This app is deployed on Netlify with continuous deployment from GitHub. You can view the live site at: [GitHub Stars Explorer](https://guileless-churros-2e6924.netlify.app)

### Deployment Configuration
The deployment is configured using [netlify.toml](github-stars-app/netlify.toml) in the project root:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment Steps

1. **Connect to Netlify**
   - Create a Netlify account at [netlify.com](https://www.netlify.com)
   - Click "New site from Git"
   - Choose GitHub as your Git provider
   - Select the repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - No environment variables required for basic setup

3. **Deploy**
   - Netlify automatically deploys when you push to the main branch
   - Each pull request gets a preview deployment.
   - Here is the deployment link: guileless-churros-2e6924.netlify.app

### Features
- **Continuous Deployment**: Automatic builds on every push
- **HTTPS**: Free SSL certificate provided by Netlify
- **Preview Deployments**: Every pull request gets a unique preview URL
- **Custom Domain**: Easy setup for custom domains through Netlify dashboard

### Monitoring
- View deploy logs in Netlify dashboard
- Monitor site performance and uptime
- Access analytics and form submissions

### Troubleshooting Deployments
If the build fails:
1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build command works locally
4. Check if the publish directory contains the built files

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👤 Developer

**Niyaz Nizam**
- GitHub: [@Miagato99]((https://github.com/Miagato99))

## 🤝 Contributing

This is a coding assessment task project for Etiqa. For any questions or feedback, please contact the developer directly.

---

**Note for Interviewers**: This application demonstrates modern React development practices, TypeScript usage, API integration, error handling, and responsive design. The code is well-structured, tested, and production-ready.
