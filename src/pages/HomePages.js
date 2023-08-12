import React from 'react'

const HomePages = () => {
  return (
    <div className='d-relative' style={{height: "100px"}}>
      <div>
        <img src='https://akssai.com/wp-content/uploads/2020/05/Import-export-logistics-India.jpg' width={'100%'} height={"400vh"} style={{objectFit: "cover"}}/>
      </div>

      <div className='bg-primary d-flex align-items-center justify-content-center ' >
        <div  className='m-2'>
            <img src='https://previews.123rf.com/images/andyadi/andyadi1802/andyadi180200589/95728052-vector-logo-design-of-deal-handshake-sign-meaning-of-friendship-partnership-cooperation-business.jpg' width={"100%"} height={"100vh"} style={{objectFit: "cover", borderRadius: "10px"}}/>
        </div>
        <div>
            <h2 className='text-white ms-5'>Zauba is a platform that helps businesses reduce risks involved in import and export trade</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePages
