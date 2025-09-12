import { href } from "react-router-dom";
import Container from "../ui/Container";

const FooterLins =[
    {href:'/privacy',lable:'Privacy'},
    {href:'/terms',lable:'Terms'},
   ]

   export default function Footer(){
    return(
        <footer>
            <Container>
                <div></div>
            </Container>
        </footer>
    )
   }