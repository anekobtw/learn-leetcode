import { Link } from "react-router-dom";

function Learn() {
  const mdFiles = import.meta.glob('../lessons/**/*.md', { eager: true, as: 'raw' });

  const folderMap: Record<string, string[]> = {};
  Object.keys(mdFiles).forEach(path => {
    const relative = path.replace('../lessons/', '').replace(/\.md$/, '');
    const parts = relative.split('/');
    const folder = parts.length > 1 ? parts[0] : '';
    const fileName = parts.length > 1 ? parts.slice(1).join('/') : parts[0];
    if (!folderMap[folder]) folderMap[folder] = [];
    folderMap[folder].push(fileName);
  });

  return (
    <div className="h-screen flex flex-col items-start justify-start gap-10 p-8 bg-gray-50 overflow-auto">
      <h1 className="text-5xl font-extrabold leetcode-gradient mb-6">Lessons</h1>

      {Object.entries(folderMap).map(([folder, files]) => (
        <div key={folder} className="w-full">
          <h2 className="text-3xl font-semibold mb-4">{folder}</h2>
          <div className="flex flex-wrap gap-4">
            {files.map(file => (
              <Link
                key={file}
                to={`/learn/${folder}/${file}`}
                className="px-5 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 text-lg font-medium"
              >
                {file}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learn;

