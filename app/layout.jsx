import './globals.css';

export const metadata = {
  title: 'SSSS',
  description: 'Super Simple String Studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <header className="header">
            <h1>SSSS</h1>
            <p>Super Simple String Studio</p>
          </header>
          {children}
          <footer className="footer">Built with Next.js on Vercel</footer>
        </main>
      </body>
    </html>
  );
}
