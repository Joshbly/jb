import Image from "next/image";
import { site } from "@/content/site";

const SIG_SRC = "/images/signature.svg";
const SIG_WIDTH = 1472;
const SIG_HEIGHT = 823;

export function Signature() {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={SIG_SRC}
        alt={`${site.name} signature`}
        width={SIG_WIDTH}
        height={SIG_HEIGHT}
        className="h-48 w-auto -ml-4 opacity-70"
      />
      <div className="font-display text-xl italic pl-2">{site.name.split(" ")[0]}</div>
    </div>
  );
}
