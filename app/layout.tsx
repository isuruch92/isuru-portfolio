import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import { ActiveSectionProvider } from "@/context/active-section-context";

const roboto = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Isuru | Personal Portfolio",
  description: "Isuru is a fullstack developer with 7+ years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} bg-slate-200 text-slate-950 relative pt-28 mdx1:pt-36`}
      >
        <div className="bg-[#d2edf6] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div
          className="bg-[#d7edfbfa] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"
        ></div>

        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
