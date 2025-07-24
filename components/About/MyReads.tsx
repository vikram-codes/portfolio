import Card from "../Card";
import Star from "../../assets/icons/star.svg";
import Image from "next/image";
import Book from "../../assets/images/book-cover.png";

function MyReads() {
  return (
    <div className="flex justify-center mb-10">
      <Card>
        <div className="flex justify-center items-center gap-x-2">
          <Star className="size-9 text-emerald-300" />
          <h3 className="text-xl font-semibold text-white">My Reads</h3>
        </div>
        <p className="text-neutral-400 text-sm">
          Explore the books shaping my perspectives.
        </p>
        <div className="flex justify-center">
          <Image src={Book} alt="Book Cover" className="w-32 h-48 rounded-md" />
        </div>
      </Card>
    </div>
  );
}

export default MyReads;
