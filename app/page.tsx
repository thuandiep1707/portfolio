import Image from "next/image";

export default function Home() {
  return (
    <article className="flex flex-col items-center justify-center p-4 h-dvh">
      <Image
        src="/logo-thuandiep.png"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      />
    </article>
  );
}
