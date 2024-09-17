"use client"
import dynamic from "next/dynamic"


const DynamicLoadingComponent = dynamic(() => import('@/components/LoadingComponent'), { ssr: false })



export default function loading() {

    return(
        <div>
           <DynamicLoadingComponent/>
        </div>
    )
    
};
