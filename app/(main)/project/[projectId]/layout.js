import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const ProjectLayout = async ({ children }) => {
  return (
    <div className="mx-auto">
      <Suspense fallback={<span>Loading Project...</span>}>{children}</Suspense>
    </div>
  );
};

export default ProjectLayout;
