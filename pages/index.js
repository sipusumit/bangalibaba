import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BangaliBaba | Arsh Gupta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-14 bg-blue-500 text-white flex items-center px-2">
        <div classname="flex">
          <Image
            src="/favicon.jpg"
            height={45}
            width={45}
            alt=""
            className="rounded-full"
          />
          <p className="text-2xl">BangaliBaba</p>
        </div>
      </div>
    </div>
  );
}
