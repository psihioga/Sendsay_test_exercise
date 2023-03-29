import Link from "next/link";

export default function Links({
    link,
    path,
    active
  }: {
    link: string;
    path: string;
    active: boolean;
  }) {
    return (      
        <div className="p-1 px-4 font-bold text-gray-800">
            {
                active ? <Link href={path} className='text-yellow-900'>{link}</Link> : 
                <Link href={path}>{link}</Link>
            }
        </div>
    );
  }
  