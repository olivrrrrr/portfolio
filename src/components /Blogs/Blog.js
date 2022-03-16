import React, {useEffect, useState} from 'react'; 


function Blog() {

    const [data, setData] = useState(null); 

    useEffect(() =>{
        fetch("/blogs")
            .then((res)=> res.json())
            .then((data) => data.map(element=>setData(element.content)))
    },[]); 

  return (
    <div>
        <p>
            {data}
        </p>
    </div>
  )
}

export default Blog