import Lottie from "lottie-react";
import loader from "@/lottie/loading.json";

export default function LoadingComponent() {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <Lottie animationData={loader} className="w-[90%] md:w-[50%] h-[90%] md:h-[50%]" />
        </div>
    );
}