export default function () {
  return useState<number>("counter", () => Math.round(Math.random() * 1000));
}
