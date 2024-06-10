


function Banner ({banner, title=""}){
    return <div className='banner'>
        <img src={banner} className="" alt="banner" />
        <h1 className='banner-title'>{title}</h1>
    </div>
}

export default Banner;