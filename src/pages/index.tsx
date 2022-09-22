import type { GetServerSideProps, NextPage } from "next";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import Link from "next/link";
import { lib } from "@typescript-eslint/scope-manager/dist/lib";

const Home: NextPage<Props> = ({ files }) => {
  return (
    <div className="bg-red-300">
      <ul>
        {files.map((fname) => (
          <li key={fname}>
            <Link href={`/${fname.replace(/\.mdx?$/, "")}`}>{fname}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  files: string[];
};
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const mdFiles = (
    await fs.readdir(path.resolve(process.cwd(), "pages"))
  ).filter((name) => /(.*)\.mdx?$/.test(name));

  return {
    props: {
      files: mdFiles,
    },
  };
};

export default Home;
