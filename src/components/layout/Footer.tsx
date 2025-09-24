

import Container from "../ui/Container";

const FooterLinks =[
    {href:'/privacy',lable:'Privacy'},
    {href:'/terms',lable:'Terms'},
   ]

   export default function Footer(){
    return(
        <footer className="border-t  bg-gray-200 py-4 ">
            <Container>
                <div className="flex justify-between items-center text-sm text-gray-600 py-6">
                    <p>{new Date().getFullYear()} ShopWave. All rights reserved.</p>
                    <div className="space-x-4">
                     {FooterLinks.map((link)=>(
                        <a href={link.href} className="hover:text-indigo-600"> {link.lable}</a>
                     ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
   }