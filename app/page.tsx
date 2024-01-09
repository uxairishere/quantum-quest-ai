import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// ContextQube
// DocSense Navigator
// ParseFlow AI
// QuantumQuest
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 rounded-full">
          <p className="text-sm font-semibold text-gray-700">
            Ai Assistant is now public
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-green-600">documents</span> in seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          QuantumQuest allows you to chat with your PDF document. Simply
          upload your file and start asking  questions right away.
        </p>
        <Link className={buttonVariants({
          size: 'lg',
          className: 'mt-5'
        })} href={"/dashboard"} target="_blank">
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      {/* value proposition section  */}
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left[calc(50%-30rem)] sm:w-[72.1875rem]">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
