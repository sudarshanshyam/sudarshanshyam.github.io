import { getTextSlugs } from "@/lib/data";
import { TextDetail } from "@/components/text-detail";

type TextPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export default async function TextPage({ params }: TextPageProps) {
  const { slug } = await params;

  return <TextDetail slug={slug} />;
}

export async function generateStaticParams() {
  return getTextSlugs().map((slug) => ({ slug }));
}
