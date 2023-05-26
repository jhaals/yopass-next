import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yopass",
  description: "Share Secrets Securely",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="prose">
          <h1>Yopass</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
