# Domingos Manuel Daniel - Portfolio

A modern, minimalist portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a dark theme design and is optimized for deployment on Vercel.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Dark Theme**: Clean, professional dark theme design
- **Responsive**: Fully responsive design for all screen sizes
- **App Router**: Uses Next.js App Router for optimal performance
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Fast Loading**: Optimized images and fonts for quick load times

## 📄 Pages

- **Home**: Introduction with profile photo, bio, and contact information
- **Projects**: Showcase of development projects with descriptions and tech stacks
- **Skills**: Overview of technical skills organized by category

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏗️ Project Structure

```
src/
├── app/                 # App Router pages
│   ├── projects/       # Projects page
│   ├── skills/         # Skills page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProjectCard.tsx # Project display card
│   └── SkillCard.tsx   # Skill display card
├── data/              # Static data
│   └── portfolio.ts   # Portfolio data (projects, skills, etc.)
└── types/             # TypeScript type definitions
    └── index.ts
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Domingos-Daniel/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

The project includes all necessary configuration for seamless Vercel deployment.

## 🎨 Customization

To customize the portfolio for your own use:

1. **Update personal information** in `src/data/portfolio.ts`
2. **Replace placeholder images** in the `public/` directory
3. **Modify colors** in `tailwind.config.ts`
4. **Update metadata** in `src/app/layout.tsx`

## 📧 Contact

- **Email**: domingoscahandadaniel@gmail.com
- **GitHub**: [Domingos-Daniel](https://github.com/Domingos-Daniel)
- **Location**: Luanda, Angola

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
