import react from "react";
import Link from 'next/link';

export default function StudentInfo () 
    

{
    return (
        <div>
            <h1>Name: Glenn Luna</h1>
                  
                <Link href="https://github.com/Glenn-webdev/cprg306-assignments" className="text-blue-600 visited:text-purple-600 ...">
                <h2 className="underline underline-offset-2 ...">GitHub</h2></Link>
              
        </div>
        
    );
};

