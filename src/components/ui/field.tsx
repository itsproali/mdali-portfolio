import { cn } from "@/lib/utils";

const control =
  "w-full border border-line bg-transparent px-3 py-2.5 text-sm text-fg " +
  "placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-50";

export function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label flex items-baseline gap-2 text-fg-subtle">
        {label}
        {hint ? <span className="normal-case opacity-70">{hint}</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(control, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={cn(control, "resize-y", className)} {...props} />
  );
}
