export async function POST(req){
    const videoId = await req.json();
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;
    const data = await fetch(url);
    const usable = await data.json();
    const response = usable.items[0].snippet;
    return new Response(JSON.stringify(response))
}