import About from "../../components/navbar/about/About";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "About description",
};
export default function page() {
  return (
    <div>
      <About />
    </div>
  );
}
