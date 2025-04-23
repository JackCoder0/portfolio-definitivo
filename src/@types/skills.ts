export interface StackItem {
  name: string
  icon: string // ex: 'Html5Original', 'SiZustand', etc.
  url: string
}

export interface StackCategory {
  type: 'front' | 'back' | 'full' | 'tools' | 'other'
  iconName: string // ex: 'MonitorSmartphone', 'Server', etc.
  stacks: StackItem[]
}
