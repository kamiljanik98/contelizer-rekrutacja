type FileViewerProps = {
  file: File;
  content: string;
  processed: string;
};

export default function FileViewer({
  file,
  content,
  processed,
}: FileViewerProps) {
  return (
    <div className="flex flex-wrap justify-between mt-4 w-full gap-6 p-6 rounded-2xl border shadow-lg text-gray-700 dark:bg-gray-900 dark:border-gray-800">
      <section className="flex-1 min-w-[50%]">
        <h3 className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
          Oryginał
        </h3>
        <pre className="mt-2 bg-gray-950 text-gray-400 text-xs leading-relaxed p-3 rounded-lg whitespace-pre-wrap overflow-auto max-h-[60vh]">
          {content}
        </pre>
      </section>

      <section className="flex-1 min-w-[50%]">
        <h3 className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
          Po przetworzeniu
        </h3>
        <pre className="mt-2 bg-gray-950 text-gray-400 text-xs leading-relaxed p-3 rounded-lg whitespace-pre-wrap overflow-auto max-h-[60vh]">
          {processed}
        </pre>
      </section>
    </div>
  );
}
