export async function GET() {
  return Response.json({ date: new Date().toLocaleTimeString() });
}
