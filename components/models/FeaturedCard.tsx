import Image from "next/image"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

interface IInfo {
  img: string;
  content: string
}

const FeaturedCard: React.FC<IInfo> = ({ img, content }) => {
  return (
    <div className=" min-w-[240px] w-[32%]  max-w-[320px] h-auto flex justify-center p-3 bg-orange-50 rounded-3xl text-center">
      <Card className="w-full rounded-3xl flex flex-col items-center p-2">
        <CardHeader className="w-[90%] aspect-square overflow-hidden p-0">
          <Image src={img} className="" width={400} height={400} alt="" />
        </CardHeader>
        <CardFooter className="w-[90%] aspect-video flex items-center p-0 justify-center text-sm lg:text-md">{content}</CardFooter>
      </Card>
    </div>
  )
}

export default FeaturedCard;
