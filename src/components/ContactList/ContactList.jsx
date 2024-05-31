import React, {useState} from 'react'

const ContactList = ({contacts}) => {

    const [filteredText, setFilteredText] = useState("");

    const filteredData = contacts.filter((item)=>{
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
        );
    })

  return (
    <div>
      <h2>Contact List</h2>
      <input type="text" placeholder='Search' 
      onChange={(e)=>setFilteredText(e.target.value)} />
      <ul id="list">
        {filteredData.map((item,key)=>(
            <li key={key}>
                <span>{item.full_name}</span>
                <span>{item.phone_number}</span>
            </li>
        ))}
      </ul>
      <span id='totalCount'>
        Total Contacts : {filteredData.length}
      </span>
    </div>
  )
}

export default ContactList;
