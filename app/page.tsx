import Button from "@/components/Button";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="w-[80%] h-[80vh] mx-auto flex items-center gap-10">
      <div className="w-[50%] self-center flex flex-col">
        <div className="mb-28">
          <h1 className="text-4xl text-gray-900 my-2 leading-10">
            Elevate Your New Style <br/><span className="text-blue-600">by</span> Wearing your comfirt
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            quo voluptates ab deleniti consectetur ratione quisquam temporibus
            sunt iure.{" "}
          </p>
        </div>
        <span className="mt-auto">
          <Button>Get Started</Button>
        </span>
      </div>
      <div className="w-[50%]">
        <Carousel/>
      </div>
    </main>
  );
}
