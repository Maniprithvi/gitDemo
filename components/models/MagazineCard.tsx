
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Image from 'next/image';

interface IMagazine {
  img: string;
  date: string;
  readTime: string;
  title: string;
  content: string;
}

const MagazineCard: React.FC<IMagazine> = ({ img, date, readTime, title, content }) => {
  return (
    <>
      <Card className="min-w-[270px] sm:w-[80%] md:w-[40%] lg:w-[40%] xl:w-[28%] p-4 mt-3 bg-transparent border-none">
        <CardHeader className="w-full aspect-video  space-y-0 rounded-md p-0">
          <Image src={img} alt="magazinePic" objectFit="aspect-ration" width={505} height={352} />
        </CardHeader>
        <CardContent className="h-[35%] w-full text-start p-2 border-none">
          <p className="leading-1 text-gray-400 flex justify-start text-sm">
            <span className="border-r-[2px] p-2 pr-4 pl-0 pt-2">{date}</span>
            <span className="p-2">{readTime}</span></p>
          <h3 className="w-full text-lg 2xl:text-2xl  font-bold pb-1">{title}</h3>
          <p className="text-[13px] line-clamp-3 text-gray-500">{content}</p>
        </CardContent>
      </Card>
    </>
  )
}

export default MagazineCard