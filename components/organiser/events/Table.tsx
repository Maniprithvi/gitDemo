import { Payment, columns } from "./column"
import { DataTable } from "./DataTable"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      bookingStatus: "pending",
      name:"mani",
      noSlots:2,
    },
    {
      id: "728ed52f",
      amount: 1090,
      bookingStatus: "success",
      name:"yaso",
      noSlots:34
    },
    // ...
  ]
}

export default async function Table() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
