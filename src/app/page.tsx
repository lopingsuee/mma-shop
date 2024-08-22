import React from "react";
import Page1 from "@/components/pages/page1";
import Page2 from "@/components/pages/page2";
import Page3 from "@/components/pages/page3";

export default function HomePage() {
  return (
    <div className="md:flex flex-col w-[100%]">
      <div>
        <Page1 />
      </div>

      <div>
        <Page2 />
      </div>

      <div className="">
        <Page3  params={{
          slug: []
        }} />
      </div>

      
    </div>
  );
}
