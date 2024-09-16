import { FilledButton } from '@/components/models/EventButton';
import EventCard from '@/components/models/eventCard'


const EventList = ({eventData}:any) => {
    
    const data = eventData 
  return (
    <>
    {/* flex flex-wrap justify-center items-center md:justify-start */}
    <div className=' w-full flex flex-wrap  lg:gap-y-5 xl:gap-y-10 gap-3 justify-center md:justify-start md:gap-4 lg:gap-5 xl:gap-10  border border-red-200' >
          {eventData.map((event:any,i:any) => (
            <div className='col-span-1 shrink'>
                            <EventCard key={i} event={event} width={280}/>
                            </div>
                    ))}
          </div>
            <div
            className="w-full flex justify-center "
            style={{ marginTop: "calc(22px + 1vw)" }}
          >
            <FilledButton className="">Read more</FilledButton>
          </div>
          </>
  )
}

export default EventList