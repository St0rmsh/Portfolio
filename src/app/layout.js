
import Providers from "@/components/Providers";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "Sujit Kumar — Full-Stack Developer",
  description: "Portfolio of Sujit Kumar, a full-stack developer building motion-driven web experiences, cloud infrastructure, and 3D interfaces with Next.js, GSAP, and Three.js.",
  keywords: ["Sujit Kumar", "full-stack developer", "Next.js developer", "React developer", "web developer portfolio", "Three.js developer"],
  authors: [{ name: "Sujit Kumar" }],
  openGraph: {
    title: "Sujit Kumar — Full-Stack Developer",
    description: "Portfolio showcasing full-stack projects, backend infrastructure, and 3D web experiments.",
    url: "https://your-domain.com",
    siteName: "Sujit Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sujit Kumar — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujit Kumar — Full-Stack Developer",
    description: "Portfolio showcasing full-stack projects, backend infrastructure, and 3D web experiments.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar/>

         <Providers>
            {children}
          </Providers> 
          
         </body>
    </html>
  );
}
