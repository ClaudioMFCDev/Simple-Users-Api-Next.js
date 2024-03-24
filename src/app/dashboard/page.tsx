
const getDashboard = async () => {
    const response = await fetch('http://localhost:3000/api/dashboard');
    const data = await response.json();
    return data;
}

export default async function DashboardPage() {
    const data = await getDashboard();

    return (

        <div>Dachboard  {JSON.stringify(data, null, 2)} </div>
    )
}