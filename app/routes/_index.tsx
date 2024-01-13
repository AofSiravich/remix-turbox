import type { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="p-4 m-4 w-full h-full flex flex-col items-center justify-center">
      <div className="flex gap-x-4">
        <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
        <Button onClick={() => navigate("/music")}>Music</Button>
        <Button onClick={() => navigate("/mail")}>Mail</Button>
        <Button onClick={() => navigate("/forms")}>Forms</Button>
        <Button onClick={() => navigate("/tasks")}>Tasks</Button>
      </div>
    </div>
  );
}
