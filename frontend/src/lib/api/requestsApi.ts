export async function getRequests() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests`);
  if (!res.ok){
    console.log("Failed to fetch requests:", res.status, res.statusText);    
    throw new Error("Failed to fetch");  
  } 
  else console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  return res.json();
}
