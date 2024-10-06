export default function StoreListPage() {
  return (
    <div>
      <h1>Store List</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const stores = await fetch(``);
}
