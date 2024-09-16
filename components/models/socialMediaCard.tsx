
import Image from 'next/image';
import { Card, CardHeader } from '../ui/card';
import googleIcon from '../../public/icons/devicon_google.svg'
import fbIcon from '../../public/icons/devicon_facebook.svg'
import twitterIcon from '../../public/icons/devicon_twitter.svg'
import watsapIcon from '../../public/icons/watsap.svg'

interface SocialMediaCardProps { }

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ }) => {
    return (
        <Card className="mt-4 flex flex-row w-[519px] md:w-[519px] sm:w-[480px] xs:w-[400px]" style={{ height: "fit-content", borderRadius: "27px" }}>
            <CardHeader color="blue-gray" className="flex flex-col gap-2">
                <p className="text-lg font-bold text-[#333333]">Sharing is Enjoying</p>
                <div className="flex flex-row gap-2">
                    <Image src={googleIcon} alt={"svg"} width={40} height={40} />
                    <Image src={fbIcon} alt={"svg"} width={42} height={42} />
                    <Image src={twitterIcon} alt={"svg"} width={42} height={42} />
                    <Image src={watsapIcon} alt={"svg"} width={42} height={42} />
                </div>
            </CardHeader>
        </Card>
    );
};

export default SocialMediaCard;
