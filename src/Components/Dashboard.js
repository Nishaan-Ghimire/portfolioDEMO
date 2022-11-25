import axios from 'axios';
import React,{useState,useEffect} from 'react'
let allmarkup='';

const getdata = async()=>{
     
      const data = await fetch('http://localhost:5000/adminData');
      console.log(data);
        allmarkup = generateMarkup(data);
      document.querySelector('.para').innerHTML = allmarkup;
    }
      

export default function Dashboard() {
    const[message,setMessages] = useState([])
  
    useEffect(()=>{
        axios.get('http://localhost:5000/adminData').then((result)=>{
            console.log(result.data);
                allmarkup = generateMarkup(result.data);
                document.querySelector('.para').innerHTML = allmarkup;
                
        }).catch(err=>{
            console.log(err);
        })
    })
    // let admin_code = prompt('Enter admin code ...');
    // if(admin_code !== 'nishan@admin@123')
    // {
    //     window.location = "/";
    // }else
    // {

    //     alert("Welcome admin..");
    // }
// getdata();

    // let allmarkup='';
    // let geturl = 'http:/localhost:5000/adminData';
    // axios.post(geturl).then(async (results) => {
    //     allmarkup = generateMarkup(results.data);
    //     document.querySelector('.para').innerHTML = allmarkup;
    //     console.log(allmarkup)
    // }).catch(() => {
    //     console.log("receive failed");
    // });

 
    return (
        <div style={{height: '78vh'}}>
    
        <section>
            <div >
        <table className="para" style={{width: "80%",margin: 'auto'}} border="1">
     

          </table>
 
            </div>
                   </section>
        </div>
  
  )
}

const generateMarkup = (results)=>{
    let markup = `<tr>
    <th>S.n</th>
    <th>Name</th>
    <th>Email</th>
    <th>Subject</th>
    <th>Message</th>
    </tr>
`;
let i = 1;
    results.forEach(element => {
        console.log(element.email)
markup += `
<tr>
<td>
    ${i}
</td>
<td>
    ${element.name}
</td>
<td>
${element.email}
</td>
<td>
${element.subject}
</td>
<td>
${element.message}
</td>
</tr>`;
i++;
    });
return markup
}

