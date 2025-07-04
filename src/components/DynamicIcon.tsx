import { X } from 'lucide-react'
import { HTMLAttributes } from 'react'

import { iconLibraries } from '@/lib/iconLibraries'

interface DynamicIconProps extends HTMLAttributes<HTMLElement> {
  name: string
  size?: number
  className?: string
}

export const DynamicIcon = ({
  name,
  size = 24,
  className,
  ...props
}: DynamicIconProps) => {
  let IconComponent: any = null

  for (const lib of Object.values(iconLibraries)) {
    if (lib[name]) {
      IconComponent = lib[name]
      break
    }
  }

  if (!IconComponent) return <X size={size} className="text-red-500" />

  return <IconComponent size={size} className={className} {...props} />
}
