import Image from "next/image";

type Props = {
  name: string;
  logo: string;
};

export default function ClientCard({ name, logo }: Props) {
  return (
     <>
    <div className="bg-white border border-gray-200 rounded-md p-2 flex items-center justify-center hover:shadow-md transition duration-300">
      <Image
        src={logo}
        alt={name}
        width={200}
        height={200}
        className="object-contain h-[100px] w-auto"
      />
    </div>

   
           </>
  );
}