export async function getProperty(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/propriedades/${id}`
  );
  const json = await res.json();
  return json.data;
}

export async function getProperties() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/propriedades`
  );
  const json = await res.json();
  return json.data;
}
