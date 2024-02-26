"use client"
import { useRouter } from "next/navigation";

export default function About() {

    const router = useRouter();

    function redirectHome() {
        router.push("/");
      }

  return (
    <div className="h-screen w-screen bg-gray-200 py-12 flex justify-center">
      <div>
        <img
          onClick={redirectHome} className="hover:cursor-pointer rounded-lg border-4 border-black"
          src={
            "https://sm.ign.com/ign_in/screenshot/default/hunter-x-hunter_nrd7.jpg"
          }
        />
      </div>
    </div>
  );
}
