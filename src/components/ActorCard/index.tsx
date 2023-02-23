import Image from "next/image";
import ActorImage from "@/assets/images/actor.jpeg";

const ActorCard = () => {
  return (
    <div className="h-[250px] min-w-[138px] rounded-lg overflow-hidden shadow-sm shadow-[#00000012] mr-4 border border-[#e3e3e3]">
      <div className="h-[175px] w-full">
        <Image className="w-full h-full" src={ActorImage} alt="" />
      </div>
      <div className="h-[75px] p-2">
        <h1 className="">Paul Ruddd</h1>
        <h5 className="text-sm">Scott Lang / Ant-Man</h5>
      </div>
    </div>
  );
};

export default ActorCard;
