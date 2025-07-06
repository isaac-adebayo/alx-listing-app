## ALX Listing App

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project structure

📁 alx-listing-app  
│  
├── 📁 components  
│ └── 📁 common  
│ ├── 📄 Button.tsx # This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.
│ └── 📄 Card.tsx # This file will define a reusable Card component that will be used across the project to display information about various properties
│  
├── 📁 constants  
│ └── 📄 index.ts # Set up constants to store any reusable data or strings such as API URLs, configuration settings, or UI text
│  
├── 📁 interfaces  
│ └── 📄 index.ts # Define all TypeScript interfaces related to the project
│  
├── 📁 pages  
│ └── 📄 index.tsx  
│  
├── 📁 public  
│ └── 📁 assets # place the necessary images and SVG files that will be used across the project (such as placeholder property images).
│  
└── 📄 README.md
