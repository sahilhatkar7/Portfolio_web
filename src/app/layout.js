
import "./globals.css";

export const metadata = {
  title: "Sahil Hatkar | Full Stack Developer",
  description:
    "Portfolio of Sahil Hatkar, an aspiring Full Stack Developer from Kolhapur, Maharashtra. Explore projects, technical skills, and web development experience.",
  keywords: [
    "Sahil Hatkar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Kolhapur",
  ],
  authors: [{ name: "Sahil Hatkar" }],
  openGraph: {
    title: "Sahil Hatkar | Full Stack Developer",
    description:
      "Explore my projects, technical skills, and journey in full stack development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
