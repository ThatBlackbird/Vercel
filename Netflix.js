export default async function handler(request) {
  const url = new URL(request.url);
  
  // Modify the URL as required
  url.hostname = "moel.missyouhero.com";
  url.protocol = "https";

  // Create and return a new request
  const newRequest = new Request(url, request);
  const response = await fetch(newRequest);
  
  return response;
}
