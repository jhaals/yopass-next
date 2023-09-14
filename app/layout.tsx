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
    <html lang="en" data-theme="emerald">
      <body className="mx-auto">
        <div className="flex justify-center">
          <div className="flex-row w-10/12">
            <div className="mb-5">
              <span className="text-6xl font-medium">
                <img
                  className="inline mr-1"
                  src="https://yopass.se/yopass.svg"
                  width={50}
                  height={50}
                />
                Yopass
              </span>
            </div>
            <div className="w-10/12">
              {children}{" "}
              <p className="text-sm text-center mt-10 opacity-70">
                Created by Johan Haals
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
