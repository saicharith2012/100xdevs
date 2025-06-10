export default async function TodoPage({
  params,
}: {
  params: Promise<{
    todo: string[];
  }>;
}) {
  return <div>hi there {JSON.stringify((await params).todo)} hello</div>;
}
