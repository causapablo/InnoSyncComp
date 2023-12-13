import Image from 'next/image'
// import img from '../../assets/imgs/Home.png'


const Home = () => {
    return (
        <main className='relative'>
            <div className="h-screen">
            <div className="absolute z-5">
           <Image 
           src='/Home.png'
           alt='img'
           width={1000}
           height={1000}
           />
           </div>
           <div className='text-goldenrod'> Some overlay things go in here </div>
           </div>
        </main>
    );
}
 
export default Home;