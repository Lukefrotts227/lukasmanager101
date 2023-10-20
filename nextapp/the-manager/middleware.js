import { NextResponse } from "next/server";

export default function genericMiddleware(req) {
  // You can insert any generic middleware logic here
  console.log("Request URL:", req.url);
  
  // For testing, you can modify the response
  const response = NextResponse.next();
  
  // Add response headers or modify the response as needed
  response.headers.set("X-Test-Middleware", "Hello from genericMiddleware");
  
  return response;
}