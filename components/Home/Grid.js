import Card from "./Card"

export default function Cards(){
    return(
        <div className="grid grid-cols-4 grid-rows-2 gap-8 px-24 py-10">
        <Card catagory="Coding" href="/search/Coding"/>
        <Card catagory="Math" href="/search/Math"/>
        <Card catagory="Science" href="/search/Science"/>
        <Card catagory="English" href="/search/English"/>
        <Card catagory="Reading" href="/search/Reading"/>
        <Card catagory="Gaming" href="/search/Gaming"/>
        <Card catagory="Sports" href="/search/Sports"/>
        <Card catagory="Funny" href="/search/Funny"/>
        </div>
    )
}