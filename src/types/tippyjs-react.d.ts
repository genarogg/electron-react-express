declare module "@tippyjs/react" {
    import { ComponentType, CSSProperties, ReactNode } from "react";
  
    interface TippyProps {
      content: ReactNode;
      placement?: "top" | "bottom" | "left" | "right";
      animation?: "shift-away" | "shift-toward" | "fade" | "scale" | "perspective";
      arrow?: boolean;
      delay?: number | [number, number];
      duration?: number | [number, number];
      hideOnClick?: boolean | "toggle";
      interactive?: boolean;
      maxWidth?: number | string;
      offset?: [number, number];
      onShow?: () => void;
      onHide?: () => void;
      theme?: string;
      visible?: boolean;
      zIndex?: number;
      style?: CSSProperties;
      className?: string;
      trigger?: string;
      children?: ReactNode; // Asegúrate de incluir la propiedad children
    }
  
    const Tippy: ComponentType<TippyProps>;
    export default Tippy;
  }