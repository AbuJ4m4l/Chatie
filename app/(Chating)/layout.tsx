import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Providers from "../providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </head>
      <body
        className={clsx(
          "max-h-screen overflow-hidden bg-secondary font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="xl:relative xl:flex">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
