import Image from "next/image";

export default function LGBTQSection() {
  return (
    <section id="lgbtq-section" className="page-section ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Hello Jørgen!</h1>

        <div className="relative w-96 h-96 mx-auto mb-8">
          <Image
            src="https://media.licdn.com/dms/image/C4D03AQEj5FhMsPJ89Q/profile-displayphoto-shrink_200_200/0/1598260764479?e=2147483647&v=beta&t=PvX5NdeWPSD04LcLX0waP6Zz4yIVfuxwaX80E89RrkA"
            alt="Picture of Jørgen"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <p>Du kan lese mer om LGBTQ+ og kjønnsykdommer på <a href="http://www.google.com" className="underline">her</a></p>
      </div>
    </section>
  );
}

