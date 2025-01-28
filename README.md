# Sirius Writing Assistant

An AI-powered writing assistant that leverages Google's Gemini model to help users generate various types of writing content, from paragraphs to stories, based on user-provided topics.

## Tech Stack

- [Next.js 14](https://nextjs.org) - React framework for the frontend
- [Google Gemini API](https://ai.google.dev/) - AI language model
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Supported Writing Types

- 📝 Paragraphs (300-400 words)
- 📋 Applications (150-180 words)
- ✉️ Letters (200-250 words)
- 📖 Compositions (400-600 words)
- 📌 Summaries (50-80 words)
- 📰 Newspaper Reports (200-300 words)
- 📧 Emails (80-120 words)
- 📚 Stories (300-400 words)
- 💭 Dialogues (250-300 words)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18.17 or higher)
- A Google Gemini API key

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sirius-writing.git
cd sirius-writing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Configure your `.env` file with:
- GOOGLE_GEMINI_API_KEY=your_api_key_here

4. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                # Next.js application
│   ├── api/           # API routes for Gemini integration
│   ├── components/    # React components
│   └── (routes)/      # Application pages
├── data/              # Static data configuration
│   ├── writingTypes.ts    # Writing types configuration
│   └── difficulties.ts    # Difficulty levels
├── public/            # Static assets
└── styles/            # Global styles
```

## Features

- 🤖 AI-Powered Content Generation
- 📝 Multiple Writing Formats
- 🎯 Word Count Guidelines
- 🎨 Clean, Intuitive Interface
- ⚡ Real-time Generation
- 📱 Responsive Design

## How to Use

1. Select a writing type from the available options
2. Enter your topic or prompt
3. Choose the desired difficulty level (if applicable)
4. Click generate to receive AI-written content
5. Edit or regenerate as needed

## Development

- Use TypeScript for type safety
- Follow component-based architecture
- Maintain consistent code formatting
- Update writing types in `data/writingTypes.ts`

## Deployment

The application can be deployed using:
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- Any static site hosting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/sirius-writing](https://github.com/yourusername/sirius-writing)
