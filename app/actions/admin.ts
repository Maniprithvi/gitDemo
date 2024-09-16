import { auth } from "@/auth";
import prisma from "@/prisma";


class Admin{

    getAplliedOrganiser=async()=>{
        const { user }: any = await auth();
        const id = user.user.id;
        const isAdmin = await prisma.user.findUnique({ where: { id ,role:"ADMIN"} });
        if (!isAdmin) {
          return "un authorised access";
        }
        const appliedOrganiser = await prisma.organiser.findMany({
            where:{
                isVerified:false
            },
            orderBy:{
                createdAt:'asc'
            }
        });
        return appliedOrganiser
    }

    verifyOrganiser =async(organiserId:string)=>{
        const { user }: any = await auth();
        const id = user.user.id;
        const isAdmin = await prisma.user.findUnique({ where: { id ,role:"ADMIN"} });
        if (!isAdmin) {
          return "un authorised access";
        }
       
        const verify = await prisma.organiser.update({
            where:{
                id:organiserId
            },
            data:{
                isVerified:true
                // verifiedBy:isAdmin?.id
            }
        })
        return " organiser verified ..."
    }

    getEventsByOrganiser = async (orgniserId:string)=>{
        const { user }: any = await auth();
        const id = user.user.id;
        const isAdmin = await prisma.user.findUnique({ where: { id ,role:"ADMIN"} });
        if (!isAdmin) {
          return "un authorised access";
        }
       
        const eventsByOrganiser = await prisma.organiser.findUnique({
            where:{
                id:orgniserId
            },
            include:{
                events:true
            }
        })
    }

    
}
export default new Admin()