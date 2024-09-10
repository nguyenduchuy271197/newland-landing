import type { Metadata } from "next";
import { Manrope, MonteCarlo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const manropeFont = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese"],
  variable: "--font-manrope",
});

const monteCarloFont = MonteCarlo({
  weight: ["400"],
  variable: "--font-monte-carlo",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "New Land All Nature | Mỹ phẩm Hàn Quốc thuần tự nhiên",
  description:
    "Thương hiệu mỹ phẩm Hàn Quốc với 100% thành phần từ thiên nhiên. New Land cung cấp đa dạng sản phẩm chăm sóc da dịu nhẹ và hiệu quả cho mọi loại da. Xem thêm ngay.",
  keywords: [
    "New Land All Nature",
    "mỹ phẩm hàn quốc",
    "dưỡng trắng da",
    "kem chống nắng",
    "tinh chất dưỡng da",
    "sản phẩm trang điểm",
    "sửa rửa mặt",
    "tẩy tế bào chết",
    "kem đánh răng",
    "dầu gội",
    "dầu xả",
    "serum dưỡng trắng nâng cơ",
    "Tinh chất Newland Vita-C Total Care Ampule",
    "Tinh chất dưỡng trắng Newland R3 Serum",
    "Gel làm dịu chống oxy hóa Saemina Revitalizing Signal Velvet Anti-Oxidation Gel",
    "Kem phục hồi da Saemina Revitalizing Signal Velvet Nutrition Cream",
    "Serum cải thiện đàn hồi Saemina Col-Pep Serum",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeFont.variable} ${monteCarloFont.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
