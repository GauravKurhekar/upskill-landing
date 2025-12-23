import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azure Data Engineering Career Clarity Call | UpSkill Academy",
  description: "Book your 1:1 clarity call with a Microsoft & Databricks Certified Senior Data Engineer with 9+ years of experience. Get personalized career guidance, real-world insights, and a clear roadmap to launch your data engineering career.",
  keywords: "Azure Data Engineering, Career Clarity Call, Data Engineering Mentor, Azure Consultation, Data Engineering Career, Senior Data Engineer, Microsoft Certified, Databricks Certified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
