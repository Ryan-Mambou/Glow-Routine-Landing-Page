type PhoneCardProps = {
  className: string;
  label: string;
  title: string;
  subtitle: string;
};

export function PhoneCard({ className, label, title, subtitle }: PhoneCardProps) {
  return (
    <div className={`mb-2 rounded-2xl p-3 text-white ${className}`}>
      <p className="mb-1 text-[9px] font-semibold tracking-[0.08em] opacity-85">
        {label}
      </p>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-[9px] opacity-80">{subtitle}</p>
    </div>
  );
}
