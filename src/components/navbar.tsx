import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import Container from "./container";

export default function Navbar() {
  const navItems = [
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Thành phần nổi bật", href: "/thanh-phan-noi-bat" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Cảm nhận người dùng", href: "/cam-nhan-nguoi-dung" },
    { name: "Hướng dẫn mua hàng", href: "/huong-dan-mua-hang" },
  ];

  return (
    <nav>
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="ml-8 body1 text-primary-700 hover:text-primary-900 text-balance"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button size="sm">Nhận tư vấn miễn phí ngay</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-primary-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader className="items-start justify-center border-b border-primary-100 mb-6 pb-4">
                  <Logo />
                </SheetHeader>

                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="display1 text-primary-700 hover:text-primary-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
}
