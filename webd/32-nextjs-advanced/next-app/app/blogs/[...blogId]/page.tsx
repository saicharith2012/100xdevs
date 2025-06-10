export default async function Blog({
  params,
}: {
  params: Promise<{ blogId: string[] }>;
}) {
  return <div>{JSON.stringify((await params).blogId)}</div>;
}
