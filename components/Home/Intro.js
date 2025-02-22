export default function Intro(){
    return(
        <div className="flex items-center py-10 px-24 justify-center gap-4">
            <div className="w-1/2 rounded-lg flex flex-col justify-between py-10 gap-8">
            <h1 className="text-4xl font-bold w-1/2">Stop Scrolling And Start Living Life</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus odio, pulvinar eget purus a, faucibus dictum ante. Curabitur erat neque, sodales non augue vel, lobortis facilisis urna. Sed ultrices risus et nisl tincidunt, nec viverra nisl tempus. Aliquam erat volutpat. Sed quis nisl ut ipsum rhoncus sollicitudin. Sed in commodo lorem. Duis quis imperdiet quam. Phasellus est enim, sodales eget hendrerit ac, dignissim eu risus. Vestibulum a elit sit amet tortor porta pharetra. Quisque gravida leo nec neque ullamcorper, vitae faucibus ex posuere. In id iaculis leo. Vivamus sagittis augue accumsan interdum imperdiet. Suspendisse potenti. Etiam consequat justo eu nibh placerat porta. Sed accumsan quam id odio imperdiet, eu ornare nulla semper. Nulla massa leo, hendrerit at congue quis, lacinia in nisl.</p>
            <a href="" className="w-28 h-12 bg-primary hover:bg-hover rounded-lg flex justify-center items-center">Start</a>
            </div>
            <div className="flex justify-center items-center w-1/2 rounded-lg">
            <img src="./intro.png" className="h-96 rounded-lg" />
            </div>
        </div>
    )
}