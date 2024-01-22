import type { Metadata } from "next";
import "../styles/globals.css";
import TRPCWrapper from "../trpc/TRPCWrapper";

export const metadata: Metadata = {
  title: "Truth Insights | Daily",
  description: "A community of truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body>
          <TRPCWrapper>{children}</TRPCWrapper>
        </body>
      </html>
    </>
  );
}
