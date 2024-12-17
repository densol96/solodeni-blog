import { LineToggler, Posts } from "@/components";
import React, { Suspense } from "react";
import { FilterType, DurationType } from "@/components/Posts/PostFilter";

type Props = {
  className?: string;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page: React.FC<Props> = async ({ className, searchParams }) => {
  const { type, duration } = await searchParams;
  return (
    <section className={className}>
      <LineToggler type={type as FilterType} duration={duration as DurationType} />
      <Suspense fallback="LOADING">
        <Posts />
      </Suspense>
    </section>
  );
};

export default Page;
