import { existsSync } from "node:fs";
import { join } from "node:path";

export function assetPath(path: string) {
  const basePath = process.env.NEXT_BASE_PATH ?? "";
  const normalizedPath = path.startsWith("/") ? path : "/" + path;
  return `${basePath}${normalizedPath}`;
}

export function publicAssetExists(relativePath: string) {
  return existsSync(join(process.cwd(), "public", relativePath));
}
