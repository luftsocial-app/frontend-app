// import { SignIn } from '@clerk/nextjs'
// import Image from 'next/image'

// export default function LoginPage() {
//   return (
//       <div className="flex flex-col items-center justify-center p-8 ">
//         <Image 
//           src="/images/onBoardingScreen/luft_image.png" 
//           height={60} 
//           width={60} 
//           alt="Luft Image"
//           className="mb-4"
//         />

      
//         <div className="text-center mb-6">
//           <p className="text-xl font-semibold text-black">Luft Social</p>
//           <p className="text-lg text-gray-700">Welcome</p>
//           <p className="text-sm text-gray-500">Log in to LuftSocial to continue using it.</p>
//         </div>

        
//         <SignIn
//           path="/login"
//           appearance={{
//             elements: {
//               // rootBox: "hidden",
//               rootBox: "w-full max-w-[400px] bg-pink-700",
//               card: "w-full border:none",
//               header: "text-center mb-6",
//               // header: "text-center mb-6",
//               headerTitle: "hidden",
//               headerSubtitle: "hidden",
//               formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white w-full rounded font-medium",
//               formFieldInput: "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500",
//               formFieldLabel: "text-gray-700 font-medium",
//               dividerLine: "bg-gray-200",
//               dividerText: "text-gray-500",
//               footer: 'hidden',
//             },
//             layout: {
//               socialButtonsPlacement: "bottom",
//               showOptionalFields: false,
//             },
//             variables: {
//               colorPrimary: "#1a73e8",
//               colorText: "#333333",
//               colorBackground: "#ffffff",
//               colorDanger: "#dc2626",
//               borderRadius: "0",
//               spacingUnit: "1rem",
//             },
//           }}
//         />
//       </div>
//   )
// }

import Link from 'next/link'
import Image from 'next/image'

export default function SidebarNavigation() {
  const menuItems = [
    { icon: "/images/dashboard/dashboardLogo.png", label: 'Dashboard', href: '/dashboard' },
    { icon: "/images/dashboard/socialLogo.png", label: 'Socials', href: '/dashboard/socials' },
    { icon: "/images/dashboard/createPosts.png", label: 'Create Post', href: '/dashboard/create-post' },
    { icon: "/images/dashboard/inboxLogo.png", label: 'Inbox', href: '/dashboard/inbox' },
    { icon: "/images/dashboard/scheduleLogo.png", label: 'Schedule Post', href: '/dashboard/schedule' },
    { icon: "/images/dashboard/notificationLogo.png", label: 'Notifications', href: '/dashboard/notifications' },
    { icon: "/images/dashboard/contentLogo.png", label: 'Content Library', href: '/dashboard/library' },
    { icon: "/images/dashboard/teamLogo.png", label: 'Team', href: '/dashboard/team' },
    { icon: "/images/dashboard/automationLogo.png", label: 'Automation', href: '/dashboard/automation' },
    { icon: "/images/dashboard/liveStudio.png", label: 'Live Studio', href: '/dashboard/live' },
  ]

  return (
    <div className="max-w-[5.875rem] w-full min-h-screen bg-blue-700 text-white p-4 flex flex-col items-center">
      {/* Logo Section */}
      <div className="mb-8 flex flex-col items-center justify-center">
        <div className="w-10 h-10 flex items-center justify-center">
          <Image 
            src="/images/dashboard/luftLogo.png" 
            width={40} 
            height={40} 
            alt="logo"
            className="object-contain"
          />
        </div>
        <h1 className="text-xl font-bold mt-2 text-center">LuftSocial</h1>
      </div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="flex justify-center">
            <div className="w-[70px] h-[64px] flex flex-col items-center justify-center ">
              <div className=" flex items-center justify-center w-[24px] h-[24px]">
                <Image 
                  src={item.icon} 
                  width={24} 
                  height={24} 
                  alt={item.label}
                  className="object-contain"
                />
              </div>
              <span className="text-xs mt-1 text-center">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}





// export default SidePanel