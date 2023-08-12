import React from 'react'

const UserData = ({ data }) => {
  return (
    <>
      {
        data?.map((item, j) => {
          return (
            <tr key={j}>
              {
                Object.entries(item).map(([key, value]) => {
                  if (key == "_id" || key == "updatedAt" || key == "createdAt" || key == "__v") {
                    return
                  }
                  return (
                    <td >{value}</td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </>


  )
}

export default UserData