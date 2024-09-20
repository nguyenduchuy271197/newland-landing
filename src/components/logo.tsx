import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="relative h-[20px] lg:h-[28px] aspect-[230/28]">
      <Image
        src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1726803956/likelion/Newland%20All%20Nature/Landing%20page%20%28Sep2024%29/LOGO%20Newland%20All%20Nature/Logo_do%CC%A3c_1_avhscx.png"
        alt="New Land All Nature"
        className="object-cover"
        fill
      />
    </Link>
  );
}
