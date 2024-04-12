import { useCallback, forwardRef, useState } from "react";
import { Input } from "../ui/input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { InputProps } from "../ui/input";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(() => setShowPassword(!showPassword), [showPassword]);
  return (
    <div className=" relative w-full">
      <Input {...props} ref={ref} type={showPassword ? "text" : "password"} />
      {showPassword ? (
        <FiEye
          onClick={togglePassword}
          className={cn("absolute right-1 top-[50%] mr-3 h-[16] w-[16] translate-y-[-50%] cursor-pointer")}
        />
      ) : (
        <FiEyeOff
          onClick={togglePassword}
          className={cn("absolute right-1 top-[50%] mr-3 h-[16] w-[16] translate-y-[-50%] cursor-pointer")}
        />
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
