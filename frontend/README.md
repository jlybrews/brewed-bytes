# Brewed Bytes - Coffee Blog

A modern, responsive blog platform built with Next.js, Sanity CMS, and Tailwind CSS. This project showcases a full-stack application with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **Headless CMS**: Content management powered by Sanity.io
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Built-in theme switching with system preference detection
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and efficient data fetching
- **Type Safety**: Comprehensive TypeScript implementation

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS, CSS Modules
- **Deployment**: Vercel
- **Version Control**: Git

## 📸 Screenshots

*[Add screenshots of your application here]*

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brewed-bytes.git
   cd brewed-bytes/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utility functions and API clients
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
└── ...
```

## 🔍 Key Implementation Details

- **Dynamic Routes**: Implemented dynamic routing for blog posts and categories
- **Data Fetching**: Optimized data fetching with Sanity client
- **Image Optimization**: Leveraged Next.js Image component for responsive images
- **Type Safety**: Comprehensive TypeScript implementation for better developer experience
- **Component Architecture**: Modular component design for maintainability

## 📚 Lessons Learned

### Technical Challenges

1. **TypeScript Integration**:
   - Initially struggled with proper typing for Sanity data
   - Solution: Created comprehensive type definitions for all Sanity schemas
   - Lesson: Invest time in proper type definitions early to avoid refactoring later

2. **Next.js App Router**:
   - Faced challenges with the new App Router structure
   - Solution: Studied documentation and experimented with different patterns
   - Lesson: New frameworks require patience and thorough documentation review

3. **Deployment Issues**:
   - Encountered TypeScript errors during Vercel deployment
   - Solution: Fixed type definitions and ensured strict type checking locally
   - Lesson: Always test with the same TypeScript configuration as your deployment environment

4. **Responsive Design**:
   - Balancing aesthetics across different screen sizes was challenging
   - Solution: Used Tailwind's responsive utilities and mobile-first approach
   - Lesson: Start with mobile design and progressively enhance for larger screens

### Development Process

1. **Project Planning**:
   - Initially underestimated the complexity of the CMS integration
   - Solution: Created a more detailed project roadmap with clear milestones
   - Lesson: Thorough planning saves time and reduces technical debt

2. **Code Organization**:
   - Started with a flat structure that became difficult to maintain
   - Solution: Reorganized into a more modular structure with clear separation of concerns
   - Lesson: Good architecture is crucial for scalability and maintainability

3. **Testing Strategy**:
   - Initially lacked a comprehensive testing approach
   - Solution: Implemented unit tests for critical components and utilities
   - Lesson: Testing early and often prevents regressions and improves code quality

## 🚀 Future Improvements

- Implement server-side pagination for blog posts
- Add search functionality with Algolia integration
- Enhance SEO with structured data and sitemap generation
- Implement user authentication for comment functionality
- Add analytics to track user engagement

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

Johnny Ly - [johnnyly311@gmail.com](mailto:johnnyly311@gmail.com)

Project Link: [https://github.com/jlybrews/brewed-bytes](https://github.com/jlybrews/brewed-bytes)
