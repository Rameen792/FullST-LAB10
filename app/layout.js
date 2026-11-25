import "./globals.css";

export const metadata = {
  title: "City Stand Bus Office",
  description: "Bus office timetable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">City Stand Bus Office</header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">Roll No: 247249</footer>
      </body>
    </html>
  );
}