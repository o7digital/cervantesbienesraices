import { lazy, type ComponentType } from "react";

export default function dynamic(loader: () => Promise<any>, _options?: Record<string, any>): ComponentType<any> {
  return lazy(async () => {
    const mod = await loader();
    return { default: mod.default || mod };
  }) as ComponentType<any>;
}
