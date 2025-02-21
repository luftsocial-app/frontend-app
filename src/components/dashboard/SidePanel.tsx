import Link from 'next/link'
import {
    LayoutDashboard,
    Globe,
    PlusCircle,
    Mail,
    RefreshCw,
    Bell,
    Library,
    Users,
    Settings,
    Radio,
    UserCircle
  } from 'lucide-react'

const SidePanel = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Globe, label: 'Socials', href: '/dashboard/socials' },
    { icon: PlusCircle, label: 'Create Post', href: '/dashboard/create-post' },
    { icon: Mail, label: 'Inbox', href: '/dashboard/inbox' },
    { icon: RefreshCw, label: 'Schedule Post', href: '/dashboard/schedule' },
    { icon: Bell, label: 'Notifications', href: '/dashboard/notifications' },
    { icon: Library, label: 'Content Library', href: '/dashboard/library' },
    { icon: Users, label: 'Team', href: '/dashboard/team' },
    { icon: Settings, label: 'Automation', href: '/dashboard/automation' },
    { icon: Radio, label: 'Live Studio', href: '/dashboard/live' },
  ]

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">LiftSocial</h1>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded hover:bg-blue-600 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SidePanel