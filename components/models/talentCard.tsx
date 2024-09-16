
import Image from 'next/image';
import { Card } from '../ui/card';

interface ITalent {
  image: string;
  content: string;
  color: string;
}

const TalentCard: React.FC<ITalent> = ({ image, content, color }) => {
  return (
    <div className="w-[24vw] min-w-[220px]  aspect-video">
      <Card className="w-[100%] h-[100%] relative" style={{ backgroundColor: `${color}` }}>
        <p className={`absolute bottom-[46%] left-[10%] text-start sm:text-md text-[#FFFFFF] font-bold`} style={{ fontSize: "calc(10px + 0.4vw)" }}>{content}</p>
        <Image src={image} alt="talentImg" fill style={{ paddingLeft: "34%", paddingTop: "5%" }} />
      </Card>
    </div>
  )
}

export default TalentCard
                  