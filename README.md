# MacGreene.com Portfolio

This is the source code for my personal portfolio website, [MacGreene.com](https://macgreene.com/), built with Next.js, Tailwind CSS, and powered by Contentful as a headless CMS.

## Overview

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Content Management**: Contentful
- **Deployment**: [Vercel](https://vercel.com/)

## Features

- Showcases projects and work.
- Dynamically fetch and display content from Contentful.
- Responsive design for various screen sizes.
- Easy-to-update portfolio content via the Contentful CMS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer.
- Contentful account with space and API keys.
- Sparkpost account (for configuring contact form) and API keys.
- Google Analytics property Id
- [Vercel](https://vercel.com/) account (optional, for deployment).

### Installation

1. Clone the repository: git clone git@github.com:macgreene14/macgreene.com.git
2. Install project dependencies
3. Create a .env.local file in the project root and add your Contentful API keys
   CONTENTFUL_SPACE_ID=your-space-id
   CONTENTFUL_ACCESS_TOKEN=your-access-token
   SPARKPOST_API_KEY=your-access-token
   NEXT_PUBLIC_GA_ID=your-property-id
4. Start the development server: npm run dev

### Content Management

To update portfolio content, log in to your Contentful account and make changes to your entries there.

### Deployment

This project is configured for deployment on Vercel, but you can deploy it to your preferred hosting platform. Create a Vercel account if you don't have one. Connect your GitHub repository to Vercel. Configure your environment variables in the Vercel dashboard (matching those in your .env.local file). Vercel will automatically deploy your application whenever you push changes to your GitHub repository.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
