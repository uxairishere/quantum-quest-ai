import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-64 h-44 relative ">
        <Image
          alt="Logo"
          src="/loading.gif"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Genius is thinking...
      </p>
    </div>
  );
};