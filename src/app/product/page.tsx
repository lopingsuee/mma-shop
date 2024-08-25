// app/product/page.tsx
import Image from 'next/image';

async function fetchProducts() {
  const res = await fetch('http://localhost:3000/api/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductPage() {
  const barangs = await fetchProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 pt-16 place-items-center">
      {barangs.data && barangs.data.length > 0 ? (
        barangs.data.map((barang: any) => (
          <div
            key={barang.id}
            className="w-full max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <a href="/home">
              <Image
                className="p-2 object-fit md:h-64"
                src={barang.image}
                alt={barang.title}
                width={300}
                height={200}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {barang.title}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${barang.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
