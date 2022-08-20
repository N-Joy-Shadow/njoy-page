import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tag from "../utils/components/blog/Tag";
import TagList from "../utils/components/blog/TagList";
import MainLayout from "../utils/layouts/main";

const Home: NextPage = () => {
  //const incr = useTestStore((x => x.inc(value + 1)))
  return (
    <MainLayout>
      <div className="w-full h-full rounded-xl shadow-xl p-4 bg-cyan-50">
        <Link href={"/blog"}>
          <Button onClick={() => {}}>Click me</Button>
        </Link>
      </div>
    </MainLayout>
  );
};
export default Home;
