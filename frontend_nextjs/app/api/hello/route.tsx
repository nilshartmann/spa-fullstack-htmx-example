export async function GET(request: Request) {
  const hello = <h1>Hello</h1>;

  return Response.json({
    data: hello,
  });
}
