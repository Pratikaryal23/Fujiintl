export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
}) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    dark: "btn-dark",
  };

  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const baseClasses = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && <span aria-hidden>→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}