
import { BookId } from "./Book-card";

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
                    <BookId libro={libro} key={libro.key}/>
                ))}
            </div>
        </main>
    )
}