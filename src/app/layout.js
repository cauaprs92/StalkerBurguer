import "./globals.css";

export const metadata = {
  title: "Stalker Burger | O lanche que fica na memória",
  description: "Hambúrguer artesanal e experiência para toda a família em São José dos Campos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
