type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#151A21] p-5 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-white">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}
