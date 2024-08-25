import ClientComponent from "./page3client";

export const getData = async (params: { slug: string[] } = { slug: [] }) => {
  const res = await fetch('http://localhost:3000/api/products');

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function BarangPage() {
  const barangs = await getData();
  const limitedBarangs = barangs.data ? barangs.data.slice(0, 10) : [];
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        PRODUK TERBAIK KAMI
      </h1>
      <ClientComponent barangs={limitedBarangs} />
    </div>
  );
}