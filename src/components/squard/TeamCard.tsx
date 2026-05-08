import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  return (
    <div className="text-center group">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-[260px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {name}
      </h3>

      <p className="text-sm text-gray-500">
        {role}
      </p>
    </div>
  );
}