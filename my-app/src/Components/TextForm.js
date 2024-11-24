import { clear } from '@testing-library/user-event/dist/clear';
import { click } from '@testing-library/user-event/dist/click';
import React , {useState} from 'react'


export default function TextForm(Props) {
  const [text, setText] = useState('Enter text here');
  const handleUpClick =()=>{
    
    let newText = text.toUpperCase() ;
       setText (newText )

}
const handleUpClick1 =()=>{
    
  let newText = text.toLowerCase() ;
     setText (newText )

}


const handleonchange =(event)=>{
    
       setText(event.target.value) ;
      
  }

  const clearText = () => {
    setText('');

  
  }
  
  return (
  <>
    <div className="container" >
    <h1> {Props.heading} </h1>
       
    <div className="mb-3 my-5">
       <label for="mybox" className="form-label"><h1>Word Counter</h1>  </label>
      <textarea className="form-control"  value ={text}  onChange={handleonchange}   id="mybox" rows="12"></textarea>
     
      </div>
  
  
  
  
  < button className="btn btn-primary"    onClick ={handleUpClick}    style={{marginRight:'10px'}}>  Convert to UpperCase</button>
  
  < button className="btn btn-primary mx-2"    onClick ={handleUpClick1}  >  Convert to LowerCase</button> 
  < button className="btn btn-primary mx-2"    onClick ={clearText}  >  Clear text</button>





  </div>
 
    
      <div className="conatiner-my-3">
      <h1> 
        Your text Summary 
      </h1>
      <p>
    {text.split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters
    
</p>
<p> {0.008 * text.split(/\s+/).filter(word => word.length > 0).length } Minutes Read </p>

 </div>
 <h2>Preview</h2>
 {text}

 

    </>
  
  )
}


// // Navigation
// <nav className="container mx-auto px-4 py-6">
//   <div className="flex items-center justify-between">
//     <Link className="text-xl font-medium" href="#">
//       Madelyn Torff
//     </Link>
//     <div className="space-x-8">
//       <Link className="font-medium border-b-2 border-black" href="#">About</Link>
//       <Link className="font-medium" href="#">Projects</Link>
//       <Link className="font-medium" href="#">Contacts</Link>
//     </div>
//   </div>
// </nav>

// // About Section
// <section className="about-section container mx-auto px-4 py-12 md:py-24">
//   <div className="grid md:grid-cols-2 gap-12 items-center">
//     <div>
//       <h1 className="text-4xl font-bold mb-6">About me</h1>
//       <p className="text-gray-600 mb-8">
//         Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
//       </p>
//       <Button className="bg-[#FFD24C] text-black hover:bg-[#FFD24C]/90" variant="secondary">Resume</Button>
//     </div>
//     <div className="flex justify-center md:justify-end">
//       <div className="picture-wrapper">
//         <Image alt="Profile" className="object-cover" fill src="/placeholder.svg" priority />
//       </div>
//     </div>
//   </div>
// </section>

// // Projects Section
// <section className="projects-section container mx-auto px-4 py-12">
//   <h2 className="text-4xl font-bold text-center mb-12">
//     Projects
//     <div className="bg-accent mx-auto mt-2"></div>
//   </h2>
// </section>

// // Contact Form
// <section className="contact-section container mx-auto px-4 py-12 max-w-xl">
//   <form className="space-y-6">
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
//       <Input id="name" placeholder="Enter your name" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
//       <Input id="email" type="email" placeholder="Enter your email" />
//     </div>
//     <div>
//       <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
//       <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
//     </div>
//     <Button className="bg-[#FFD24C] text-black hover:bg-[#FFD24C]/90" variant="secondary">Send</Button>
//   </form>
// </section>

// // Footer
// <footer className="footer container mx-auto px-4 py-8">
//   <div className="social-links flex justify-center space-x-6 mb-4">
//     <Link href="#"><Instagram className="h-6 w-6" /></Link>
//     <Link href="#"><Linkedin className="h-6 w-6" /></Link>
//     <Link href="#"><Mail className="h-6 w-6" /></Link>
//   </div>
//   <p className="text-center text-gray-600 text-sm">Madelyn Torff 2021</p>
// </footer>