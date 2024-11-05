import Image from "next/image";
import Container from "./container";

export default function Solutions() {
  return (
    <Container className="py-12">
      {/* Section Title */}
      <h2>Vấn đề và giải pháp</h2>

      {/* Cards Container */}
      <div className="mt-10">
        <Image
          src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1725877132/likelion/Newland%20All%20Nature/Landing%20page%20%28Sep2024%29/4.%20V%C3%A2nd%20%C4%91%E1%BB%81%20v%C3%A0%20gi%E1%BA%A3i%20ph%C3%A1p/Va%CC%82%CC%81n_%C4%91e%CC%82%CC%80_va%CC%80_gia%CC%89i_pha%CC%81p_Desktop__sclynf.webp"
          alt=""
          width={1280}
          height={828}
        />
      </div>
    </Container>
  );
}
