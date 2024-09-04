export default async function handler(req, res) {
  const url = new URL(req.url);

  // Modify the URL as required
  url.hostname = "moel.missyouhero.com";
  url.protocol = "https";

  // Fetch the modified request
  const response = await fetch(url, { headers: req.headers });
  res.send(await response.text());
}
