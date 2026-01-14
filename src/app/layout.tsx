import './globals.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Script from 'next/script';
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsappButton';
import Providers from './providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marcos Vinicius Angeli Costa | Engenheiro de Software & Desenvolvedor Full Stack",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png"
  },
  description:
    "Portfólio de Marcos Vinicius Angeli Costa, Engenheiro de Software apaixonado por tecnologia, com experiência em desenvolvimento full stack, microfrontends, React, Next, TypeScript, Java e arquitetura de sistemas. Descubra meus projetos, habilidades e trajetória profissional.",
  keywords: [
    "Marcos Vinicius Angeli Costa",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "Desenvolvedor React",
    "Java",
    "Spring Boot",
    "Next.js",
    "Microfrontends",
    "Arquitetura de Software",
    "Portfólio Marcos Vinicius",
    "Desenvolvimento Web",
    "Frontend",
    "Backend",
    "Zustand",
    "Ant Design",
    "TypeScript"
  ],
  authors: [{ name: "Marcos Vinicius Angeli Costa", url: "https://marcosangeli.com.br" }],
  creator: "Marcos Vinicius Angeli Costa",
  publisher: "Marcos Vinicius Angeli Costa",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Marcos Vinicius Angeli Costa | Engenheiro de Software & Desenvolvedor Full Stack",
    description:
      "Explore o portfólio de Marcos Vinicius Angeli Costa: projetos de software, experiência em React, Java, microfrontends e soluções escaláveis.",
    url: "https://marcosangeli.com.br",
    siteName: "Portfólio de Marcos Vinicius",
    images: [
      {
        url: "https://marcosangeli.com.br/images/logo-nova.jpg",
        width: 1200,
        height: 630,
        alt: "Marcos Vinicius Angeli Costa - Engenheiro de Software",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Vinicius Angeli Costa | Engenheiro de Software & Desenvolvedor Full Stack",
    description:
      "Portfólio de Marcos Vinicius Angeli Costa com foco em React, Next, Py, Java, TypeScript e arquitetura de sistemas modernos.",
    images: ["https://marcosangeli.com.br/images/logo-nova.jpg"],
  },
  alternates: {
    canonical: "https://marcosangeli.com.br",
  },
  category: "technology"
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  let measurementId = process.env.GA_MEASUREMENT_ID;
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
          <meta
            name="google-site-verification"
            content="4uzC5YQu0by7WydggOCDNbOqwYKgSICJkMkykGIrOKo"
          />
      </head>
      <body>
          <Script
            id="ld-json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Marcos Vinicius Angeli Costa",
                url: "https://marcosangeli.com.br",
                image: "https://marcosangeli.com.br/images/logo-nova.jpg",
                sameAs: [
                  "https://github.com/MarcosVinicius556",
                  "https://www.linkedin.com/in/marcos-vinicius-angeli-costa/"
                ],
                jobTitle: "Engenheiro de Software",
                worksFor: {
                  "@type": "Organization",
                  name: "Marcos Vinicius Angeli Costa"
                },
                description:
                  "Engenheiro de Software com experiência em desenvolvimento full stack, React, Java, microfrontends, arquitetura de sistemas e soluções escaláveis.",
                knowsAbout: [
                  "React",
                  "Next.js",
                  "Java",
                  "Spring Boot",
                  "Microfrontends",
                  "Arquitetura de Software",
                  "TypeScript",
                  "Ant Design",
                  "Zustand"
                ]
              }),
            }}
          />
          <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />

          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `}
          </Script>
          <Providers>
            <Navbar />
            {children}
            <WhatsAppButton />
            <Footer />
          </Providers>
        </body>
      </html>
  );
}
