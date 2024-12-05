import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "@/components/OrgSwitcher";
import React from "react";
import ProjectList from "./components/ProjectList";
import UserIssues from "./components/UserIssues";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Organization = async ({ params }) => {
  const { orgId } = params;
  const organization = await getOrganization(orgId);
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-title pb-2">
          {organization.name} &apos;s Projects
        </h1>

        {/* org switcher */}
        <OrgSwitcher />
      </div>

      <div className="mb-4">
        <ProjectList orgId={organization.id} />
      </div>

      <div className="mb-8">
        <UserIssues userId={userId} />
      </div>
    </div>
  );
};

export default Organization;
