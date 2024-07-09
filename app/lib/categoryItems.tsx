import { CodeIcon, Gamepad2Icon, PickaxeIcon } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "assets",
    title: "Assets",
    image: <PickaxeIcon />,
  },
  {
    id: 1,
    name: "code",
    title: "Code",
    image: <CodeIcon />,
  },
  {
    id: 2,
    name: "game",
    title: "Game",
    image: <Gamepad2Icon />,
  },
];
