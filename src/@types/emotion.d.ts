import { Theme as CustomTheme  } from "@/app/components/design";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
