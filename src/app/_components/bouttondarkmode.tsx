"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Évite les problèmes de SSR
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      id="theme-switch"
      checked={theme === "dark"}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
    />
  );
}
