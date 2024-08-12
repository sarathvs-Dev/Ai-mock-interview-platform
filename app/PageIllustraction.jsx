import Image from "next/image";
import Stripes from "@/public/stripes.svg";

export default function PageIllustration() {
  return (
    <>
      {/* Stripes illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-full h-auto"
          src={Stripes}
          width={500} // Adjusted width
          alt="Stripes"
          priority
        />
      </div>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 ml-[480px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[420px] ml-[280px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[540px] -ml-[200px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[120px]" />
      </div>
    </>
  );
}
