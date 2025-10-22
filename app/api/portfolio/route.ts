import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Resolve the public images/portfolio directory
    const portfolioDir = path.join(process.cwd(), "public", "images", "portfolio");

    // Read files in the directory
    const files = await fs.promises.readdir(portfolioDir);

    // Filter common image extensions and build public URLs
    const images = files
      .filter((f) => /\.(jpe?g|png|gif|webp|avif|svg)$/i.test(f))
      .map((f) => path.posix.join("/images/portfolio", f));

    return new Response(JSON.stringify({ images }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to read portfolio images:", err);
    return new Response(JSON.stringify({ error: "Could not read portfolio images" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
