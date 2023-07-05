import appPattern from "../../assets/Download App/appPattern.png";
import app from "../../assets/Download App/app.webp";
import appStore from "../../assets/Download App/appStore.svg";
import playStore from "../../assets/Download App/playStore.svg";
import { Button } from "flowbite-react";
export default function DownLoadApp() {
  return (
    <div className="mt-16 p-16 flex justify-between rounded-3xl relative mx-4">
        <img src={appPattern} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl -z-10"/>
        <div className="mt-14">
            <h3 className="text-2xl font-semibold mb-3">The ChawkBazar App</h3>
            <p className="text-4xl leading-[60px]">Share Your <span className="font-bold">Ideas</span> & Shop <br /> Endless <span className="font-bold">Inspiration</span> </p>
            <div className="flex gap-2">
                <Button size="lg" color="white" >
                    <img src={appStore} alt="" className="rounded duration-300 hover:opacity-80"/>
                </Button>
                <Button size="lg" color="white" >
                    <img src={playStore} alt="" className="rounded duration-300 hover:opacity-80"/>
                </Button>
            </div>
        </div>
        <div>
            <img src={app} alt="" className=""/>
        </div>
    </div>
  )
}
