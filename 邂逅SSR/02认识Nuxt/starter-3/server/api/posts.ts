import path from "path";
import fs from "fs";
import matter from "gray-matter";
// 文章目录
const postsDir = path.join(process.cwd(), "content");
export default defineEventHandler((event) => {
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames.map((fileNames) => {
    const name = fileNames.replace(/.md$/, "");
    const fullPath = path.join(postsDir, fileNames);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterInfo = matter(fileContent);
    const fileInfo = fs.statSync(fullPath);
    return {
      name,
      content: matterInfo.content,
      date: fileInfo.ctime,
    };
  });
  return posts.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
});
