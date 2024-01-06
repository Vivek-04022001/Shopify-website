import canvaProductImage from '../../assets/Product mocups/CanvaTemplate.png'

const Bonus = () => {
  return (
    <section>
        <div className="Container">
            <h2 className='heading text-white capitalize'>what will you get in this <span className='text-primary-color '>ultimate social media kit ?</span></h2>

            {/* bonus- container */}
            <div className='flex flex-col gap-y-10 justify-center  mt-10'>

                {/* first product */}
                <div className='border-4 border-dashed  py-10  flex items-center justify-between px-12'>
                    {/* image of the product */}
                    <img src={canvaProductImage} alt="canva-product" className='w-[32%]  '/>
                    {/* product content */}
                    <div className='flex flex-col gap-y-10 capitalize'>
                        <h3 className='text-primary-color text-4xl text-center font-extrabold'>OFFER #1:</h3>
                        <p className='text-4xl font-extrabold text-white text-center'>17000+ EDITABLE VIRAL REELS</p>
                        <p className='text-2xl font-bold text-white'>📍reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>❌reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>✅reach milions of audience without spending money</p>
                    </div>
                </div>

                {/* second product */}
                <div className='border-4 border-dashed  py-10  flex items-center justify-between px-12'>
                    {/* image of the product */}
                    <img src={canvaProductImage} alt="canva-product" className='w-[32%]  '/>
                    {/* product content */}
                    <div className='flex flex-col gap-y-10 capitalize'>
                        <h3 className='text-primary-color text-4xl text-center font-extrabold'>OFFER #1:</h3>
                        <p className='text-4xl font-extrabold text-white text-center'>17000+ EDITABLE VIRAL REELS</p>
                        <p className='text-2xl font-bold text-white'>📍reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>❌reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>✅reach milions of audience without spending money</p>
                    </div>
                </div>

                {/* third product */}
                <div className='border-4 border-dashed  py-10  flex items-center justify-between px-12'>
                    {/* image of the product */}
                    <img src={canvaProductImage} alt="canva-product" className='w-[32%]  '/>
                    {/* product content */}
                    <div className='flex flex-col gap-y-10 capitalize'>
                        <h3 className='text-primary-color text-4xl text-center font-extrabold'>OFFER #1:</h3>
                        <p className='text-4xl font-extrabold text-white text-center'>17000+ EDITABLE VIRAL REELS</p>
                        <p className='text-2xl font-bold text-white'>📍reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>❌reach milions of audience without spending money</p>
                        <p className='text-2xl font-bold text-white'>✅reach milions of audience without spending money</p>
                    </div>
                </div>
            </div>

            <button className="inline-block group bg-btn-primary-bg border rounded-lg p-2 py-4 md:text-4xl text-xl w-full md:w-[60%] font-bold tracking-wide hover:text-btn-primary-bg hover:bg-white border-btn-primary-bg mx-auto text-center capitalize">
            <a href="#" className='group-hover:text-btn-primary-bg'>
                Boost your store today
            </a>
          </button>
        </div>
    </section>
  )
}

export default Bonus