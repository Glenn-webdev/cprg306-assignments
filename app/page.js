
import Link from 'next/link';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="justify-center">
                     
              <h1>CPRG 306: Web Development 2 - Assignments</h1>         
          
                <Link href ="/week-2" className="text-blue-600 visited:text-purple-600 ..."><h2 className="underline underline-offset-2 ...">WEEK 2</h2></Link>              
            
                <Link href = "/week-3" className="text-blue-600 visited:text-purple-600 ..."><h2 className="underline underline-offset-2 ...">WEEK 3</h2></Link>
                <Link href = "/week-4" className="text-blue-600 visited:text-purple-600 ..."><h2 className="underline underline-offset-2 ...">WEEK 4</h2></Link>
                <Link href = "/week-5" className="text-blue-600 visited:text-purple-600 ..."><h2 className="underline underline-offset-2 ...">WEEK 5</h2></Link>
                <Link href = "/week-6" className="text-blue-600 visited:text-purple-600 ..."><h2 className="underline underline-offset-2 ...">WEEK 6</h2></Link>  
            </div>
          
    </main>
  );
}
