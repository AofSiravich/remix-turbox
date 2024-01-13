import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

type MusicCardProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
  title: string;
  subtitle: string;
};

const MusicCard = ({ title, subtitle, ...rest }: MusicCardProps) => {
  return (
    <div>
      <img
        {...rest}
        className="object-cover transition-all hover:scale-105 aspect-[3/4] rounded-md"
      />
      <h3 className="font-medium leading-none mt-4">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default MusicCard;
