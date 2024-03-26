


export default async function DashboardPage() {
    const getDashboard = async () => {
        const response = await fetch('http://localhost:3000/api/dashboard');
        const data = await response.json();
        return data || {};
    }
    const { data } = await getDashboard();

    return (
        <div className="div">
            <div>Libros</div>
            <div>
                {data.docs.map( (libro: any) => (
                    <div key={libro.key} className="flex items-center gap-2">
                        <span>{libro.title}</span>
                        
                    </div>
                ) )}
            </div>
        </div>
    )
}