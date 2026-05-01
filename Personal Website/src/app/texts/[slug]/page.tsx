import { TextDetail } from "@/components/text-detail";

type TextPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TextPage({ params }: TextPageProps) {
  const { slug } = await params;

  return <TextDetail slug={slug} />;
}
