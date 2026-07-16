type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const primary =
    "bg-blue-600 hover:bg-blue-500 text-white";

  const secondary =
    "bg-neutral-800 hover:bg-neutral-700 text-white";

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl px-4 py-3 font-semibold transition ${
        variant === "primary" ? primary : secondary
      }`}
    >
      {children}
    </button>
  );
}
