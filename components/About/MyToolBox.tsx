import Card from "../Card";
import ToolboxItem from "../ToolboxItem";
import Star from "../../assets/icons/star.svg";
import Image from "next/image";
import GithubIcon from "../../assets/icons/github.svg";
import TailwindCSSIcon from "../../assets/icons/tailwindcss.svg";
import NextJSIcon from "../../assets/icons/nextjs.svg";

const toolboxItem = [
  {
    title: "Chrome",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg"
        alt="Chrome"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Github",
    icon: <GithubIcon className="size-6 text-gray-400" />,
  },
  {
    title: "JavaScript",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "React",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "TailwindCSS",
    icon: <TailwindCSSIcon className="size-6 text-gray-400" />,
  },
  {
    title: "Next.js",
    icon: <NextJSIcon className="size-6 text-gray-400" />,
  },
  {
    title: "Supabase",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        alt="Supabase"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Express",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        alt="Express"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Node.js",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Node.js"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "TypeScript",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        width={24}
        height={24}
      />
    ),
  },
];

function MyToolBox() {
  return (
    <div className="flex justify-center mb-10">
      <Card className="pb-9">
        <div className="flex justify-center items-center gap-x-2">
          <Star className="size-9 text-emerald-300" />
          <h3 className="text-xl font-semibold text-white">My Toolbox</h3>
        </div>
        <p className="text-neutral-400 text-sm">
          Discover the tools and technologies I use to craft exceptional web
          experiences.
        </p>
        <ToolboxItem
          toolboxItem={toolboxItem}
          className="animate-move-left [animation-duration:30s]"
        />
        <ToolboxItem
          toolboxItem={toolboxItem}
          className="-translate-x-1/2 animate-move-right [animation-duration:20s]"
        />
      </Card>
    </div>
  );
}

export default MyToolBox;
