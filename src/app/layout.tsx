'use client';

import './globals.css';
import Container from './components/container';
import Footer from './components/Footer';
import { ThemeContextProvider } from './context/ThemeContext';
import ThemeProvider from './providers/ThemeProvider'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <main>
            <Container>
              <ThemeContextProvider>
                {/* <ThemeProvider> */}
                {children}
                {/* </ThemeProvider> */}
                </ThemeContextProvider>
            </Container>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
