import React from "react";
import prisma from "@/lib/prisma";
import type { Metadata, ResolvingMetadata } from "next";

interface BusinessPageProps {
  params: { businessName: string };
  children: React.ReactNode;
}

export async function generateMetadata(
  { params }: BusinessPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const businessName = params.businessName;

  const profile = await prisma.businessAccount.findUnique({
    where: { name: businessName },
    select: { name: true, bio: true },
  });

  return {
    title: `${profile?.name} (${profile?.bio})`,
  };
}

export default async function BusinessLayout({
  children,
  params: { businessName },
}: BusinessPageProps) {
  return <>{children}</>;
}
