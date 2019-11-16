export default  async function service(url , { meth, object }) {
  console.log(meth, object)
  const response = await fetch(url, {
    method: meth,
    body: JSON.stringify(object)
  });
  const data = await response.json();
  return data;
}