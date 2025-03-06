import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        </body>
    </html>
  );
}
