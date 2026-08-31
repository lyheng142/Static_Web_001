
export default async function FoodDetailPage({params}:{params:Promise <{id:string}> }){

  const {id} = await params;
  
  return (
    <div>
      <h1> Food id : {id}</h1>
    </div>
  )
}
