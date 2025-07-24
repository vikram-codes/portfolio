import Image from "next/image";
import Card from "../Card";
import MemojiSmile from "../../assets/images/memoji-smile.png";
import Map from "../../assets/images/map.png";

function MyLocation() {
  return (
    <div className="flex justify-center mb-10">
      <Card>
        <Image
          src={Map}
          alt="Map"
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <Image
          src={MemojiSmile}
          alt="Memoji Smile"
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
      </Card>
    </div>
  );
}

export default MyLocation;
