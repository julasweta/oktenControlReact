import React from 'react'


const UserInfo:React.FC = () => {
  const user = { name: "Svitlana", role: "admin", skills: ["htmls", "css", "js"] };

  return (
    <div className="user">
      <h1>UserInfo</h1>
      <h3>{user.name}</h3>
      <span>role: {user.role}</span>
      <div>
        <h4>SKILLS</h4>
        <ol>
          {user.skills.map((item:string) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export { UserInfo }