import Image from "next/image";




export default function Home() {
  return (
    <div className="min-h-[584px]">
      <div className="flex   justify-between">
        <div className="mt-20 ml-48" >
          <h1 className="text-7xl mb-10 font-bold  w-96 " >Creative Thoghts Agecy.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta pariatur consectetur, non eaque, illo nesciunt nemo </p>
          <div className="mt-5">
          <button className=" px-4 py-3 bg-blue-800 text-white rounded font-bold mx-5">Learn more</button>
          <button className=" px-4 py-3 bg-white text-black rounded font-bold mx-5">Contact</button>
          </div>
          <Image className="grayscale" src="/brands.png" width={500} height={50} />
        </div>
        <div className=" mr-40  mt-5">
        <Image src="/hero.gif" alt="" width={700} height={900} />
        </div>
      </div>

    </div>
  );
}
