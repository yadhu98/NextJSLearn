import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../public/styles/style.css'
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <section>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </section>
        <div className="common-header">
          <div className="header-name">
            Yadhu Krishnan PC
          </div>
          <div className="header-links">
            <span><Link href='/'>Home</Link></span>
            <span><Link href='/projects'>Projects</Link></span>
            <span><Link href='/'>Resume</Link></span>
            <span><Link href='https://github.com/yadhu98'>Github</Link></span>
            <span><Link href='https://www.linkedin.com/in/yadhu-krishnan-02668528b/'>LinkedIn</Link></span>
          </div>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
