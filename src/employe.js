import React, { useState } from 'react'

function Main() {
    const[names ,setNames ] = useState("Aran Ramesh");
    const[age ,setAge ] = useState("25");
    const[company ,setCompany ] = useState("zoho");
    const[exp ,setExp ] = useState("1 year");

  return (
    <div>
        {names} {age} {company} {exp}
        <button onClick={() => setNames("Ramesh")}>update name</button>
        <button onClick={() => setAge("21")}>update age</button>
        <button onClick={() => setCompany("google")}>update company</button>
        <button onClick={() => setExp("3 years")}>update exp</button>
    </div>
  )
}

export default Main