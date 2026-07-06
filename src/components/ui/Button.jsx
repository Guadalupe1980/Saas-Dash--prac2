function Button({ children, className = "", ...props}) {
  return (
    <>
      <button className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border bg-blue-700 ${className}`}>
        {children}
      </button>
    </>
  );
}

export default Button;
