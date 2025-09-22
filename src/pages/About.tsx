import Container from "../components/ui/Container";

export default function About(){
    return(
        <Container>
            <div className="p-10 flex-col h-full flex items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 ">About us</h2>
            <p className="text-lg text-gray-700 font-medium"> ShopWave is your one-stop shop for amazing products.</p>
        </div>
        </Container>
    )
}