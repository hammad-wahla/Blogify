import Blog from "../../components/navbar/blog/Blog";
import React from "react";

export const metadata = {
  title: "Blog page",
  description: "Blog description",
};

const page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default page;
