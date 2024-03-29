export default function Hero() {
   return (
      <div className="hero min-h-screen  bg-fondo bg-no-repeat bg-size ">
         <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse glass shadow-md w-80 md:w-auto">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1704406019/TS4-hero_xsx5bv.jpg"
               className="max-w-sm rounded-lg shadow-2xl w-48 md:w-80"
            />
            <div className="text-center md:text-start">
               <h1 className="text-6xl font-bold text-am-primary">
                  ¡Juguetes nuevos!
               </h1>
               <p className="py-6 text-black">Esta es una tienda de juguetes</p>
               <button className="btn  btn-outline btn-warning hover:btn-info ">
                  Saber más
               </button>
            </div>
         </div>
      </div>
   );
}
