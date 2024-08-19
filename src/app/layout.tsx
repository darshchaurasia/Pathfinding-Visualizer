export const metadata = {
  title: 'Pathfinding Visualizer',
  description: 'Visualize different pathfinding algorithms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
