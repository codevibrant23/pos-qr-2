import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
