import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CrmShell } from "../../../../crm/CrmShell";
import { resolveCrmSection } from "../../../../crm/config";
import { renderCrmSection } from "../../../../crm/views";

type CrmPageProps = {
  params: {
    slug?: string[];
  };
};

export function generateMetadata({ params }: CrmPageProps): Metadata {
  const section = resolveCrmSection(params.slug);

  if (!section) {
    return {
      title: "CRM Demo Cervantes",
    };
  }

  return {
    title: section.label,
    description: section.description,
  };
}

export default function CrmCatchAllPage({ params }: CrmPageProps) {
  const section = resolveCrmSection(params.slug);

  if (!section) {
    notFound();
  }

  return <CrmShell section={section}>{renderCrmSection(section.id)}</CrmShell>;
}
