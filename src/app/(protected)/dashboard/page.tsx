import { TrendingUp } from 'lucide-react';

export default function DashboardPage() {

return null
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Views', value: '4,732', trend: '+15,242' },
          { label: 'Profile Views', value: '242,732', trend: '+15,242' },
          { label: 'Likes', value: '241', trend: '+15,242' },
          { label: 'Comments', value: '532', trend: '+15,242' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{stat.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
