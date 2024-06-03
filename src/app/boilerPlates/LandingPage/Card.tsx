import Image from "next/image";

function Card({
  background,
  icon,
  profile,
  rotation,
  title,
  description,
  onHover,
}: {
  background?: string;
  icon: string;
  profile: string;
  rotation?: string;
  title: string;
  description: string;
  onHover?: () => void;
}) {
  return (
    <div
      className={`h-[523px] bg-white rounded-xl w-[400px] p-[39px] shadow-xl  card ${
        background && `bg-[${background}]`
      } ${rotation && `${rotation} z-[10]`}  hover:scale-[1.02] `}
    >
      <div className="flex items-end justify-between">
        <Image src={profile} alt="Profile" className="w-[68px] h-[68px]" height="68" width="68" />
        <Image src={icon} alt="" className="w-[36px]" height="100" width="100"/>
      </div>
      <p className="font-semibold text-[22px] mt-[15px]">{title}</p>
      <p className="text-[20px] mt-[27px]">{description}</p>
    </div>
  );
}

export default Card;
