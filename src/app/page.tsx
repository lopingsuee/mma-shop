import React from "react";
import Page1 from "@/components/lembar/page1";
import Page2 from "@/components/lembar/page2";
import Page3 from "@/components/lembar/page3";
import Page4 from "@/components/lembar/page4";
import Page5 from "@/components/lembar/page5";

export default function HomePage() {
  return (
    <div className="md:flex flex-col w-[100%]">
      <div>
        <Page1 />
      </div>

      <div>
        <Page2 />
      </div>

      <div >
        <Page3 />
      </div>

    <div>
      <Page4 />
    </div>
      <div>
        <Page5/>
      </div>
    </div>
  );
}
