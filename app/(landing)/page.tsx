import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const LandingPage = () => {

  const { userId } = auth();

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="relative mb-12 mt-28 pt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="absolute -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <Image
            src="/dashboard-preview.gif"
            width={1364}
            height={866}
            alt="product review"
            quality={100}
            className="rounded-md z-10 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10 opacity-20"
          />
        </div>
        <div className="z-20">
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden border border-gray-200 dark:border-gray-200/30 bg-white dark:bg-white/10 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 rounded-full">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
              Ai Assistant is now public
            </p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl ">
            Quantum <span className="text-green-600 dark:text-orange-600">Quest</span>
          </h1>
          <p className="mt-5 max-w-prose text-zinc-700 dark:text-zinc-500  sm:text-lg">
            QuantumQuest allows you to avail AI tool in a single platform. Simply
            create account and feel the power of AI.
          </p>
          <Link className={buttonVariants({
            size: 'lg',
            className: 'mt-5'
          })} href={"/dashboard"} target="_blank">
            {!userId ? "Get started" : "Dashboard"} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </MaxWidthWrapper>
      {/* value proposition section  */}
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left[calc(50%-30rem)] sm:w-[72.1875rem]">
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left[calc(50%-36rem)] sm:w-[72.1875rem]">
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default LandingPage;