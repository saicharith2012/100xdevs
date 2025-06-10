export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="pt-14">
        <div className="fixed top-0 left-0 right-0 h-14 flex items-center justify-center">
          navbar
        </div>
        {children}
        <div className="fixed bottom-0 left-0 right-0 h-14 flex items-center justify-center">footer</div>
      </body>
    </html>
  );
}
