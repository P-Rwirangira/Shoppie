import Image from 'next/image';
import Link from 'next/link';

export default function HomePage(): JSX.Element {
  return (
    <div className="bg-background">
      {/* Hero Banner Section */}
      <section className="relative w-full">
        <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 md:px-5 lg:px-20 xl:px-32">
          <div className="relative w-full lg:w-7/12 h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              alt="Fresh & Healthy Organic Food"
              className="object-cover"
              fill
              priority
              src="/banners/main-banner.jpg"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-10 bg-gradient-to-r from-black/40 to-transparent">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Fresh & Healthy<br />Organic Food
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-1 bg-primary"></div>
                <p className="text-white text-sm">100% freshness</p>
              </div>
              <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-md inline-flex items-center gap-2 w-fit hover:bg-primary/90 transition-colors">
                Shop now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 lg:w-5/12">
            <div className="relative w-full h-[240px] rounded-lg overflow-hidden">
              <Image
                alt="Fresh Fruits"
                className="object-cover"
                fill
                src="/banners/fruits-banner.jpg"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-6">
                <div className="mb-2">
                  <p className="text-sm font-medium">NEW produce</p>
                  <p className="text-primary font-bold">100% fresh</p>
                </div>
                <h2 className="text-xl font-bold mb-4">Only Fruit & Vegetable</h2>
                <Link href="/products" className="bg-white text-primary px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit hover:bg-gray-100 transition-colors">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative w-full h-[240px] rounded-lg overflow-hidden">
              <Image
                alt="Special Products"
                className="object-cover"
                fill
                src="/banners/special-banner.jpg"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-6">
                <div className="mb-2">
                  <p className="text-sm font-medium">Best Deal</p>
                </div>
                <h2 className="text-xl font-bold mb-4">Special Products Deal of the Month</h2>
                <Link href="/products" className="bg-white text-primary px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit hover:bg-gray-100 transition-colors">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="px-4 py-12 md:px-5 lg:px-20 xl:px-32">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Shop by Category</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-1 bg-gray-200"></div>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/vegetables.svg" alt="Vegetables" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">Vegetables</h3>
              <p className="text-sm text-gray-500">165 Products</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/fruits.svg" alt="Fresh Fruit" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">Fresh Fruit</h3>
              <p className="text-sm text-gray-500">137 Products</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/fish.svg" alt="River Fish" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">River Fish</h3>
              <p className="text-sm text-gray-500">34 Products</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/meat.svg" alt="Meat" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">Meat</h3>
              <p className="text-sm text-gray-500">165 Products</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/drinks.svg" alt="Water and Drinks" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">Water and Drinks</h3>
              <p className="text-sm text-gray-500">48 Products</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4 p-4">
              <Image src="/categories/snacks.svg" alt="Snacks" width={80} height={80} />
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-1">Snacks</h3>
              <p className="text-sm text-gray-500">165 Products</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Products Section */}
      <section className="px-4 py-12 md:px-5 lg:px-20 xl:px-32 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Products</h2>
          <Link href="/products" className="text-primary flex items-center gap-1 hover:underline">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="relative h-64 overflow-hidden">
              <Image src="/products/apple.jpg" alt="Green Apple" fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                <div>Sale</div>
                <div>50%</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Green Apple</h3>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-bold text-primary">$14.99</span>
                <span className="text-gray-400 line-through text-sm">$20.99</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <button type="button" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="relative h-64 overflow-hidden">
              <Image src="/products/malta.jpg" alt="Fresh Indian Malta" fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Fresh Indian Malta</h3>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-bold text-primary">$20.00</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <button type="button" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="relative h-64 overflow-hidden">
              <Image src="/products/corn.jpg" alt="Corn" fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Corn</h3>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-bold text-primary">$12.00</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <button type="button" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          
          {/* Product Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="relative h-64 overflow-hidden">
              <Image src="/products/capsicum.jpg" alt="Green Capsicum" fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                <div>Sale</div>
                <div>50%</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Green Capsicum</h3>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-bold text-primary">$9.00</span>
                <span className="text-gray-400 line-through text-sm">$20.99</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <button type="button" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Deals Banner */}
      <section className="px-4 py-12 md:px-5 lg:px-20 xl:px-32">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            alt="Special Deals"
            className="object-cover"
            fill
            src="/banners/deals-banner.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 lg:p-16 max-w-xl">
              <h2 className="text-sm font-medium mb-2">100% Vegetables</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Best Deals</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="bg-primary/90 rounded p-3 text-center">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-primary/90 rounded p-3 text-center">
                  <div className="text-2xl font-bold">02</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-primary/90 rounded p-3 text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-xs">Mins</div>
                </div>
                <div className="bg-primary/90 rounded p-3 text-center">
                  <div className="text-2xl font-bold">46</div>
                  <div className="text-xs">Secs</div>
                </div>
              </div>
              
              <Link href="/products" className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
