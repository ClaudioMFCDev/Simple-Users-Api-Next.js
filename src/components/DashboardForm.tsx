

export default async function DashboardPage(author : any) {
    const getDashboard = async () => {
        let author = 'conan'
        const response = await fetch(`https://openlibrary.org/search.json?author=${author}}`);
        const data = await response.json();
        return data.docs || {};
    }
    const data = await getDashboard();

    return (
        
        <div className="div">
            <div>Libros</div>
            <div>
                {data.map( (libro: any) => (
                    <div key={libro.key} className="flex items-center gap-2">
                        <span>{libro.title}</span>                      
                    </div>
                ) )}
            </div>
        </div>
    )
}