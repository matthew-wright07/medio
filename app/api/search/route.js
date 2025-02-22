export async function POST(req){
    const request = await req.json();
    const query = request.id;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    const usable = await data.json();
    const items = usable.items;
    console.log(items);
    return new Response(JSON.stringify(items))
}