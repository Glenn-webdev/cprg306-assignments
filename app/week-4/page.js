
import NewItem from "./new-item"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div>
            <h1 className="font-extrabold text-center ">Add Products</h1>
            <NewItem></NewItem>
        </div>
      </main>



    )
 
};

