declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  const Github: ComponentType<IconProps>;
  const Mail: ComponentType<IconProps>;
  const MapPin: ComponentType<IconProps>;
  const Phone: ComponentType<IconProps>;
  const ArrowRight: ComponentType<IconProps>;
  const Linkedin: ComponentType<IconProps>;
  const ChevronDown: ComponentType<IconProps>;
  const Menu: ComponentType<IconProps>;
  const X: ComponentType<IconProps>;
  
  export { Github, Mail, MapPin, Phone, ArrowRight, Linkedin, ChevronDown, Menu, X };
}
