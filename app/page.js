'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageIllustration from "./PageIllustraction";
import { useRouter } from "next/navigation";

export default function Home() {

  const router=useRouter();

  const ToDashboard=()=>{
    router.push('/dashboard')

  }


  return (
   <div>
    <section className="relative">
      {/* <PageIllustration/> */}
      {/* <PageIllustration /> */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className=" pt-32 md:pt-40">
          {/* Section header */}
          <div className=" text-center md:pb-16">
            
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Prepare for Success with  <br className="max-lg:hidden" />
              AI-Powered Mock Interviews
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
               Experience lifelike interviews with our AI-driven platform, tailored to your profile. Practice whenever and wherever you want, and build confidence for the real thing.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Button
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0" onClick={()=>ToDashboard()}
                  >
                    <span className="relative inline-flex items-center">
                      Let's Start
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Button>
                  {/* <Button
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </Button> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
   </div>
  );
}
