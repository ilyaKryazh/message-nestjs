import Image from "next/image";

export default function ImageButton({ url, width, height }: { url: string, width: number, height: number }) {
  return (
    <div className="flex items-center justify-center p-2 rounded w-full">
      <Image src={url} alt="image" width={width} height={height} />
    </div>
  )
}
