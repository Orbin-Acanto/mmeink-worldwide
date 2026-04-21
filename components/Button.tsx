import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = false,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 font-medium text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-purple text-white hover:bg-purple/70 hover:scale-105 shadow-lg hover:shadow-2xl",
    secondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:scale-105 shadow-xl",
    outline:
      "bg-transparent text-purple border-2 border-purple hover:bg-purple hover:text-white shadow-lg hover:shadow-2xl",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
