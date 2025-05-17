import { ArrowUpRight } from "lucide-react";

type LinkDocsProps = {
  text: string;
  url: string;
};

export default function LinkDocs({ text, url }: LinkDocsProps) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center gap-1"
      >
        {text}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </>
  );
}
