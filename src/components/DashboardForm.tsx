import Image from "next/image";

export default async function DashboardPage(author: any) {
    const getDashboard = async () => {
        let author = 'conan'
        const response = await fetch(`https://openlibrary.org/search.json?author=${author}}`);
        const data = await response.json();
        return data.docs || {};
    }
    const data = await getDashboard();

    return (

        <main>
            <div>Libros</div>
            <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
                {data.map((libro: any) => (
                    <div key={libro.key} className="flex flex-col items-center gap-2 w-52">
                        <Image 
                        src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`} 
                        alt="cover-title" 
                        width={100} 
                        height={100} 
                        />
                        <span>{libro.title}</span>
                    </div>
                ))}
            </div>
        </main>
    )
}